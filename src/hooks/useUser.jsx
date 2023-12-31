/** @format */

import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
	const { loading } = useAuth();
	const [axiosSEcure] = useAxiosSecure();
	const {
		data: users = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["user"],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSEcure("get-all-user");

			return res.data;
		},
	});

	return { users, isLoading, refetch };
};

export default useUser;
