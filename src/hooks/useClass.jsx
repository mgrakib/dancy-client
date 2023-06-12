import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
	const { loading } = useAuth();
	const [axiosSEcure] = useAxiosSecure();
    const {
		data: classes = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["classes"],
		enabled: !loading,
		queryFn: async () => {
			const result = await axiosSEcure("classes");
			return result.data;
		},
    });
    
    return {classes, refetch, isLoading}
}

export default useClass;