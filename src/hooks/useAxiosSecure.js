import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const axiosSEcure = axios.create({
	baseURL: `http://localhost:5000/`
});

const useAxiosSecure = () => {

    useEffect(() => {
        axiosSEcure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization =  `Bearer ${token}`
            }

            return config;
        });

        axiosSEcure.interceptors.response.use(response => response, error => {
            if (error?.response && (error?.response?.status === 401 || error?.response?.status === 403)) {
                
                toast.error(error?.response?.data?.message);
             }
        })
    }, [])

    return [axiosSEcure]
};

export default useAxiosSecure;