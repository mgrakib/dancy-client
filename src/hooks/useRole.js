import { useQuery } from "react-query";
import useAuth from "./useAuth"
import axios from "axios";

const useRole = () => {
    const { user } = useAuth();
    const {data : role = {}, isLoading, refetch } = useQuery({
        queryKey: 'users',
        queryFn: async () => {
            const result = await axios(
				`http://localhost:5000/user-role/?email=${user?.email}`
			);
            return result.data;
            
          
        }
    })

    
    return { role, isLoading };
}

export default useRole;