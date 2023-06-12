import axios from "axios";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedCasses = (numerOfData, sort) => {

	const [axiosSEcure] = useAxiosSecure();

	// TODO: first fetch all data
	const {
		data: approvedClasses = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			const result = await axiosSEcure(
				`approverd-classes/?numberOfData=${numerOfData}&sort=${sort}`
			);

			return result.data;
		},
    });
    
    return {approvedClasses, isLoading, refetch}
};

export default useApprovedCasses;