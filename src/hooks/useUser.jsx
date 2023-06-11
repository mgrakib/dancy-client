import axios from "axios";
import { useQuery } from "react-query";

const useUser = () => {
   
      const {
			data: users = [],
			isLoading: loading,
			refetch,
		} = useQuery({
			queryKey: ["user"],
			queryFn: async () => {
                const res = await axios("http://localhost:5000/get-all-user"); 
                
				return res.data;
			},
		});

    
    return { users, loading, refetch };
}

export default useUser;