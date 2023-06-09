import React from 'react';
import DashboardContainer from '../../../Components/DashboardContainer/DashboardContainer';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useCartClass from '../../../hooks/useCartClass';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);


const Payment = () => {
	const { cartClasses } = useCartClass();
	const total = cartClasses.reduce((sum, item) => sum+ item.price ,0)
	const price = parseFloat(total.toFixed(2));
	
	// TODO:payment 
    return (
		<div className='w-full'>
			<DashboardContainer>
				<div>
					<SectionTitle
						title={"Payment"}
						isCenter={true}
					/>
				</div>

				<div className='py-4 w-1/2 mx-auto'>
					<div>
						<h2 className='py-4 text-3xl'>Payment: ${price}</h2>
					</div>

					<Elements stripe={stripePromise}>
						<CheckoutForm
							price={price}
							cartClasses={cartClasses}
						/>
					</Elements>
				</div>
			</DashboardContainer>
		</div>
	);
};

export default Payment;