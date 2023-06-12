import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSEcure = axios.create({
	baseURL: `https://twelve-assignment-server-mgrakib.vercel.app/`,
});

const useAxiosSecure = () => {
const navigate = useNavigate();
    const {logOut } = useAuth();
    useEffect( () => {
        axiosSEcure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization =  `Bearer ${token}`
            }

            return config;
        });

        axiosSEcure.interceptors.response.use(
			response => response,
			async error => {
				if (
					error?.response &&
					(error?.response?.status === 401 ||
						error?.response?.status === 403)
				) {
					toast.error(error?.response?.data?.message);
					await logOut();
					navigate("/login");
				}
			}
		);
    }, [])

    return [axiosSEcure]
};

export default useAxiosSecure;