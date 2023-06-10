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
				`https://twelve-assignment-server-mgrakib.vercel.app/instructor/?numberOfData=${numerOfData}&sort=${sort}`
			);
			return result.data;
		},
	});

	return { instractors, refetch, isLoading };
};

export default useInstracture;