/** @format */

import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
	const { userLogin,loading,  setLoading } = useAuth();
	const [error, setError] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		
		setError('');
		userLogin(data.email, data.password).then(() => {

			// axios.post(`http://localhost:5000/users`, data.email).then(res => {
			// 	// TODO: navigate home
			// 	Swal.fire({
			// 		position: "top-end",
			// 		icon: "success",
			// 		title: "Successfully Login",
			// 		showConfirmButton: false,
			// 		timer: 1500,
			// 	});
			// })
			
		}).catch((err) => {
			setLoading(false);
			setError(err.message)
		});
	};

	return (
		<div className='flex justify-center items-center min-h-screen'>
			<div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
				<div className='mb-8 text-center'>
					<h1 className='my-3 text-4xl font-bold'>Log In</h1>
					<p className='text-sm text-gray-400'>
						Sign in to access your account
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
								htmlFor='email'
								className='block mb-2 text-sm'
							>
								Email address
							</label>
							<input
								type='email'
								{...register("email", {
									required: true,
								})}
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
							<div className='flex justify-between'>
								<label
									htmlFor='password'
									className='text-sm mb-2'
								>
									Password
								</label>
							</div>
							{/* TODO show password  */}
							<input
								type='password'
								id='password'
								{...register("password", {
									required: true,
								})}
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
							{error && (
								<p
									role='alert'
									className='text-red-500'
								>
									{error}
								</p>
							)}
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='bg-[#63AC45] w-full rounded-md py-3 text-white cursor-pointer text-center'
							disabled={loading}
						>
						{loading ? <TbFidgetSpinner className="w-full animate-spin" /> :"Sing in" }	
						</button>
						
					</div>
				</form>
				<div className='space-y-1'>
					<button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
						Forgot password?
					</button>
				</div>

				{/* social login  */}
				<SocialLogin />

				<p className='px-6 text-sm text-center text-gray-400'>
					Don't have an account yet?{" "}
					<Link
						to='/signup'
						className='hover:underline hover:text-rose-500 text-gray-600'
					>
						Sign up
					</Link>
					.
				</p>
			</div>
		</div>
	);
};

export default Login;
