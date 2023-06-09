import axios from "axios";
import { useQuery } from "react-query";

const useInstracture = (numerOfData, sort) => {
	const {
		data: instractors = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["instracture"],
		queryFn: async () => {
			const result = await axios(
				`http://localhost:5000/instructor/?numberOfData=${numerOfData}&sort=${sort}`
			);
			return result.data;
		},
	});

	return { instractors, refetch, isLoading };
};

export default useInstracture;