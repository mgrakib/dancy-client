import { useQuery } from "react-query";
import useAuth from "./useAuth"
import axios from "axios";

const useRole = () => {
    const { user, loading } = useAuth();
    const {
		data: role = {},
		isLoading,
		refetch,
	} = useQuery({
		queryKey: "users",
		enabled: !loading,
		queryFn: async () => {
			const result = await axios(
				`https://twelve-assignment-server-mgrakib.vercel.app/user-role/?email=${user?.email}`
			);
			return result.data;
		},
	});

    return { role, isLoading, refetch };
}

export default useRole;