/** @format */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

const DenyModal = ({
	modalHandler,
	closeModal,
	isOpen,
	id,
	handelChangeStatus,
}) => {
	const feedbackRef = useRef(null);
	const submitFeedback = e => {
		const feedBack = feedbackRef.current.value;
		
		handelChangeStatus("deny", id, feedBack);
		closeModal();
	};
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
									Feed Back!!
								</Dialog.Title>
								<div className='mt-2'>
									<textarea
										ref={feedbackRef}
										name=''
										id=''
										className='w-full h-[150px] outline-none border border-common-color p-2 '
									></textarea>

									<p className='text-sm text-gray-500'>
										If admin deny any class approval then
										student won't be abail to see this class
										on dashobard. Instractour will see this
										feebback!!! {id}
									</p>
								</div>

								<div className='mt-4'>
									<button
										type='button'
										className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
										onClick={submitFeedback}
									>
										Submit Feed Back
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

export default DenyModal;
