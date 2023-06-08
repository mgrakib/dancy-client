import axios from "axios";
import { useQuery } from "react-query";

const useClass = () => {
    const {
		data: classes = [],
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["classes"],
		queryFn: async () => {
			const result = await axios("http://localhost:5000/classes");
			return result.data;
		},
    });
    
    return {classes, refetch, isLoading}
}

export default useClass;