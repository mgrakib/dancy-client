import { useQuery } from "react-query";
import useAuth from "./useAuth"
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
	const { user, loading } = useAuth();
	const [axiosSEcure] = useAxiosSecure();
    const {
		data: role = {},
		isLoading,
		refetch,
	} = useQuery({
		queryKey: "users",
		enabled: !loading,
		queryFn: async () => {
			const result = await axiosSEcure(
				`user-role/?email=${user?.email}`
			);
			return result.data;
		},
	});

    return { role, isLoading, refetch };
}

export default useRole;