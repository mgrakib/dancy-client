import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useInstructorClass = () => {
    const { user, loading } = useAuth();
    const email = { email: user?.email }
    
    const {data:instructorCalsses =[], isLoading, refetch } = useQuery({
        queryKey: ['instructor-classes'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axios(
				`https://twelve-assignment-server-mgrakib.vercel.app/instructor-classes/?email=${user?.email}`
			);
            
            return result.data;
        }
    })

    return {instructorCalsses, isLoading, refetch}
};

export default useInstructorClass;