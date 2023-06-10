import axios from "axios";
import { useQuery } from "react-query";

const useApprovedCasses = (numerOfData, sort) => {


	// TODO: first fetch all data
	const {
		data: approvedClasses = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			const result = await axios(
				`https://twelve-assignment-server-mgrakib.vercel.app/approverd-classes/?numberOfData=${numerOfData}&sort=${sort}`
			);

			return result.data;
		},
    });
    
    return {approvedClasses, isLoading, refetch}
};

export default useApprovedCasses;