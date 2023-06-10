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
                const res = await axios("https://twelve-assignment-server-mgrakib.vercel.app/get-all-user"); 
                
				return res.data;
			},
		});

    
    return { users, loading, refetch };
}

export default useUser;