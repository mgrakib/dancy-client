import axios from "axios";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useInstracture = (numerOfData, sort) => {
	const [axiosSEcure] = useAxiosSecure();
	const {
		data: instractors = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["instracture"],
		queryFn: async () => {
			const result = await axiosSEcure(
				`instructor/?numberOfData=${numerOfData}&sort=${sort}`
			);
			return result.data;
		},
	});

	return { instractors, refetch, isLoading };
};

export default useInstracture;