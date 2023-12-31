/** @format */

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const SocialLogin = () => {
	const { googleLogin, setLoading } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [axiosSEcure] = useAxiosSecure();

	const from = location.state?.from?.pathname || "/";

	const handelGoogleSingIn = () => {
		googleLogin()
			.then(async res => {

				await axiosSEcure
					.post(`users`, {
						email: res?.user?.email,
						userImg: res?.user?.photoURL,
						name: res?.user?.displayName,
					})
					.then(res => {
						// TODO: navigate home
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: "Successfully SingUp",
							showConfirmButton: false,
							timer: 1500,
						});

						navigate(from, { replace: true });
					});
			})
			.catch(err => {
				setLoading(false);
				console.log(err.message)
			});
	};
	return (
		<div>
			<div className='flex items-center pt-4 space-x-1'>
				<div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
				<p className='px-3 text-sm dark:text-gray-400'>
					Login with social accounts
				</p>
				<div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
			</div>
			<div
				onClick={handelGoogleSingIn}
				className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
			>
				<FcGoogle size={32} />

				<p>Continue with Google</p>
			</div>
		</div>
	);
};

export default SocialLogin;
