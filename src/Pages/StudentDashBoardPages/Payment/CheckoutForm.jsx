import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useCartClass from "../../../hooks/useCartClass";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CheckoutForm = ({ price, targetClass, closeModal }) => {
	const { user } = useAuth();
	const { refetch } = useCartClass();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [transactionID, setTransactionID] = useState("");
	const [processing, setProcessing] = useState(false);
	const [axiosSEcure] = useAxiosSecure();

	useEffect(() => {
		if (price > 0) {
			// Create PaymentIntent as soon as the page loads
			fetch(
				"https://twelve-assignment-server-mgrakib.vercel.app/create-payment-intent",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ price }),
				}
			)
				.then(res => res.json())
				.then(data => setClientSecret(data.clientSecret));
		}
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

		
		if (paymentIntent.status === "succeeded") {
			setTransactionID(paymentIntent.id);
			const payment = {
				email: user?.email,
				price,
				transactionID: paymentIntent.id,
				date: new Date(),
				// quantity: cartClasses.length,
				quantity: 1,
				cartClassesId: targetClass._id,
				classId: targetClass.classId,
				cartClassName: targetClass.name,
				instructorEmail: targetClass.instructorEmail,
			};

			axiosSEcure
				.post("payments", payment)
				.then(res => {
					closeModal();
					toast.success("Payment Successfully");
					console.log(res.data);
					refetch();
					setProcessing(false);
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