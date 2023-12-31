/** @format */

import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
const AddAnClass = () => {
	const { user } = useAuth();
	const [process, setProcess] = useState(false);
	const [axiosSEcure] = useAxiosSecure();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();


	const onSubmit = data => {
		setProcess(true);
		const classImage = data.image[0];
		const formData = new FormData();
		formData.append("image", classImage);

		console.log(classImage)
		axios
			.post(
				`https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_IMAGE_HOSTING_TOKEN
				}`,
				formData
			)
			.then(res => {
				const img = res.data.data.display_url;
				const {
					name,
					instructorName,
					instructorEmail,
					price,
					availableSeats,
				} = data;

				const newClass = {
					name,
					instructorEmail: instructorEmail || user?.email,
					instructorName: instructorName || user?.displayName,
					price: parseFloat(price),
					img,
					availableSeats: parseFloat(availableSeats),
					status: "pending",
					totalStudent: 0,
				};

				axiosSEcure
					.post(`add-an-class`, newClass)
					.then(res => {
						toast.success("Successfully add!");
						setProcess(false);
					})
					.catch(err => setProcess(false));
			})
			.catch(err => setProcess(false));
	};
	return (
		<div className=''>
			<DashboardContainer>
				<div className='text-center'>
					<SectionTitle title={"Add An Class"} />
				</div>

				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 dark:bg-dashboard-color p-4'>
							{/* class name  */}
							<div className='space-y-1 text-sm'>
								<label
									htmlFor='className'
									className='block text-gray-600'
								>
									Class Name
								</label>
								<input
									className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-secondary-color rounded-md '
									{...register("name", {
										required: true,
									})}
									id='className'
									type='text'
									placeholder='Class Name'
								/>
							</div>
							{/* class image  */}
							<div className=' p-4 bg-white w-full  m-auto rounded-lg'>
								<div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
									<div className='flex flex-col w-max mx-auto text-center'>
										<label>
											<input
												className='text-sm cursor-pointer w-36 hidden'
												type='file'
												{...register("image", {
													required: true,
												})}
												id='image'
												accept='image/*'
												hidden
											/>
											<div className='bg-secondary-color text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-secondary-color'>
												Upload Image
											</div>
										</label>
									</div>
								</div>
							</div>
							{/* Instructor name */}
							<div className='space-y-1 text-sm'>
								<label
									htmlFor='instructorName'
									className='block text-gray-600'
								>
									Instructor Name
								</label>
								<input
									className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-secondary-color rounded-md '
									{...register("instructorName")}
									id='instructorName'
									type='text'
									placeholder='Instructor Name'
									value={user?.displayName}
								/>
							</div>
							{/* Instructor Email */}
							<div className='space-y-1 text-sm'>
								<label
									htmlFor='instructorEmail'
									className='block text-gray-600'
								>
									Instructor Email
								</label>
								<input
									className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-secondary-color rounded-md '
									{...register("instructorEmail")}
									id='instructorEmail'
									type='text'
									placeholder='Instructor Email'
									value={user?.email}
								/>
							</div>
							<div className='flex justify-between gap-2'>
								<div className='space-y-1 text-sm'>
									<label
										htmlFor='price'
										className='block text-gray-600'
									>
										Price
									</label>
									<input
										className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-secondary-color rounded-md '
										{...register("price", {
											required: true,
										})}
										id='price'
										type='number'
										placeholder='Price'
									/>
								</div>

								<div className='space-y-1 text-sm'>
									<label
										htmlFor='availableSeats'
										className='block text-gray-600'
									>
										Available seats
									</label>
									<input
										className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-secondary-color rounded-md '
										{...register("availableSeats", {
											required: true,
										})}
										id='availableSeats'
										type='number'
										placeholder='Available seats'
									/>
								</div>
							</div>
						</div>

						<button
							type='submit'
							className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-secondary-color'
						>
							{process ? (
								<TbFidgetSpinner
									className='m-auto animate-spin'
									size={24}
								/>
							) : (
								"Save & Continue"
							)}
						</button>
					</form>
				</div>
			</DashboardContainer>
		</div>
	);
};

export default AddAnClass;
