import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useCartClass from "../../../hooks/useCartClass";

const CheckoutForm = ({ price, cartClasses }) => {
	const { user } = useAuth();
	const { refetch } = useCartClass();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [transactionID, setTransactionID] = useState("");
	const [processing, setProcessing] = useState(false);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ price }),
		})
			.then(res => res.json())
			.then(data => setClientSecret(data.clientSecret));
	}, [price]);

	const handleSubmit = async event => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setError(error.message);
			console.log("[error]", error);
		} else {
			setError("");
		}
		setProcessing(true);
		const { paymentIntent, error: conformError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "anonymous",
						name: user?.displayName || "unknown",
					},
				},
			});

		if (conformError) {
			console.log(conformError);
		}

		setProcessing(false);
		if (paymentIntent.status === "succeeded") {
			setTransactionID(paymentIntent.id);
			const payment = {
				email: user?.email,
				price,
				transactionID: paymentIntent.id,
				quantity: cartClasses.length,
				date: new Date(),
				cartClassesId: cartClasses.map(singleClass => singleClass._id),
				classId: cartClasses.map(singleClass => singleClass.classId),
				cartClassName: cartClasses.map(singleClass => singleClass.name),
			};
            
            axios
				.post("http://localhost:5000/payments",  payment)
				.then(res => {
					refetch();
					console.log(res.data)
				});

		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					type='submit'
					disabled={!stripe || !clientSecret || processing}
					className='bg-secondary-color text-primary-color py-1 px-4 rounded-md mt-4'
				>
					Pay
				</button>
			</form>

			<div>
				<p>
					<small className='text-red-500'>{error}</small>
				</p>

				{transactionID && (
					<p>
						<small className='text-green-500'>
							Transaction Complete with TransactionID:{" "}
							{transactionID}
						</small>
					</p>
				)}
			</div>
		</div>
	);
};

export default CheckoutForm;