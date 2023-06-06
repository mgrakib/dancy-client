/** @format */

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
	const { createUser, updateUserNamePhoto, user } = useAuth();
	const [error, setError] = useState('');
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		setError(``);
		const formData = new FormData();
		formData.append("image", data.image[0]);
		console.log(data.image[0]);

		// password did not mathc 
		if (data.password !== data.confirmPassword) {
			return setError(`Password didn't match`)
		}
		
		axios
			.post(
				`https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_IMAGE_HOSTING_TOKEN
				}`,
				formData
			)
			.then(res => {
				const imgURL = res?.data?.data?.display_url;
				console.log(imgURL);
				if (res.data.success) {
					createUser(data.email, data.password)
						.then(() => {
							updateUserNamePhoto(data.name, imgURL)
								.then(() => {})
								.catch(err => setError(err.message));
						})
						.catch(err => setError(err.message));
				}
			});
	};


	console.log(user);
	return (
		<>
			{/* TODO:HELMATE***** */}
			{/* TODO: Navigate after sing up  */}
			{/* <Helmet>
				<title>Hello World</title>
				<link
					rel='canonical'
					href='https://www.tacobell.com/'
				/>
			</Helmet> */}

			<div className='flex justify-center items-center min-h-screen'>
				<div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
					<div className='mb-8 text-center'>
						<h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
						{/* TODO: Change name  */}
						<p className='text-sm text-gray-400'>
							Welcome to AirCNC
						</p>
					</div>
					<form
						noValidate=''
						action=''
						className='space-y-6 ng-untouched ng-pristine ng-valid'
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className='space-y-4'>
							<div>
								<label
									htmlFor='name'
									className='block mb-2 text-sm'
								>
									Name
								</label>
								<input
									type='text'
									{...register("name", { required: true })}
									id='name'
									placeholder='Enter Your Name Here'
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
									data-temp-mail-org='0'
								/>
								{errors.name?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										First name is required
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm'
								>
									Email address
								</label>
								<input
									type='email'
									{...register("email", { required: true })}
									id='email'
									placeholder='Enter Your Email Here'
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
									data-temp-mail-org='0'
								/>
								{errors.email?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Email is required
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor='image'
									className='block mb-2 text-sm'
								>
									Select Image:
								</label>
								<input
									type='file'
									id='image'
									{...register("image", { required: true })}
									accept='image/*'
								/>
								{errors.image?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Image is required
									</p>
								)}
							</div>

							<div>
								<div className='flex justify-between'>
									<label
										htmlFor='password'
										className='text-sm mb-2'
									>
										Password
									</label>
								</div>

								<select
									{...register("gender", { required: true })}
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
								>
									<option value=''>Select One</option>
									<option value='female'>female</option>
									<option value='male'>male</option>
									<option value='other'>other</option>
								</select>
								{errors.gender?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Gender is required
									</p>
								)}
							</div>

							<div>
								<div className='flex justify-between'>
									<label
										htmlFor='phone'
										className='text-sm mb-2'
									>
										Phone
									</label>
								</div>
								<input
									type='text'
									{...register("phone", { required: true })}
									id='phone'
									placeholder='Enter Your Phone Here'
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
								/>
								{errors.phone?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Phone is required
									</p>
								)}
							</div>
							<div>
								<div className='flex justify-between'>
									<label
										htmlFor='address'
										className='text-sm mb-2'
									>
										Address
									</label>
								</div>
								<input
									type='text'
									{...register("address", { required: true })}
									id='address'
									placeholder='Enter Your Address Here'
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
								/>
								{errors.address?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Address is required
									</p>
								)}
							</div>
							<div>
								<div className='flex justify-between'>
									<label
										htmlFor='password'
										className='text-sm mb-2'
									>
										Password
									</label>
								</div>
								<input
									type='password'
									{...register("password", {
										required: true,
										minLength: 6,
										pattern:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/i,
									})}
									id='password'
									placeholder='*******'
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
								/>
								{errors.password?.type === "required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Password is required
									</p>
								)}
								{errors.password?.type === "pattern" && (
									<span className='text-red-500'>
										One UpperLetter One small Letter Specal
										leatter number
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className='text-red-500'>
										Password must be more 6
									</span>
								)}
							</div>
							<div>
								<div className='flex justify-between'>
									<label
										htmlFor='confirmPassword'
										className='text-sm mb-2'
									>
										Confirm Password
									</label>
								</div>
								<input
									type='password'
									{...register("confirmPassword", {
										required: true,
										minLength: 6,
										pattern:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/i,
									})}
									id='confirmPassword'
									placeholder='*******'
									className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#63AC45] bg-gray-200 text-gray-900'
								/>
								{errors.confirmPassword?.type ===
									"required" && (
									<p
										role='alert'
										className='text-red-500'
									>
										Confirm Password is required
									</p>
								)}
								{errors.confirmPassword?.type === "pattern" && (
									<span className='text-red-500'>
										One UpperLetter One small Letter Specal
										leatter number
									</span>
								)}
								{errors.confirmPassword?.type ===
									"minLength" && (
									<span className='text-red-500'>
										Confirm Password must be more 6
									</span>
								)}
								{error && (
									<span className='text-red-500'>
										{error}
									</span>
								)}
							</div>
						</div>

						<div>
							<input
								type='submit'
								className='bg-[#63AC45] w-full rounded-md py-3 text-white cursor-pointer'
							/>
						</div>
					</form>

					{/* social login  */}
					<SocialLogin />

					<p className='px-6 text-sm text-center text-gray-400'>
						Already have an account?{" "}
						<Link
							to='/login'
							className='hover:underline hover:text-rose-500 text-gray-600'
						>
							Login
						</Link>
						.
					</p>
				</div>
			</div>
		</>
	);
};

export default SignUp;
