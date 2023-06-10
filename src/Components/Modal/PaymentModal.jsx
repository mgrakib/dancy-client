import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Pages/StudentDashBoardPages/Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const PaymentModal = ({ isOpen, closeModal, targetClass }) => {

	return (
		<Transition
			appear
			show={isOpen}
			as={Fragment}
		>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={closeModal}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black bg-opacity-25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
								<Dialog.Title
									as='h3'
									className='text-lg font-medium leading-6 text-gray-900'
								>
									Payment!!
								</Dialog.Title>
								<div className='mt-2'>
									<div className='flex items-center justify-between'>
										<p className='text-gray-900 text-2xl font-bold'>
											{targetClass?.name}
										</p>
										<p className='text-gray-900 text-2xl font-bold'>
											${targetClass?.price}
										</p>
									</div>
									<div className='py-4'>
										<Elements stripe={stripePromise}>
											<CheckoutForm
												price={targetClass?.price}
												targetClass={targetClass}
												closeModal={closeModal}
											/>
										</Elements>
									</div>
								</div>

								<div className='mt-4 text-end'>
									<button
										type='button'
										className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
										onClick={closeModal}
									>
										cancle
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PaymentModal;