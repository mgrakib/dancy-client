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
			const result = await axios("https://twelve-assignment-server-mgrakib.vercel.app/classes");
			return result.data;
		},
    });
    
    return {classes, refetch, isLoading}
}

export default useClass;