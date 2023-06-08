import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useInstructorClass = () => {
    const { user, loading } = useAuth();
    const email = { email: user?.email }
    
    console.log(email)
    const {data:instructorCalsses =[], isLoading, refetch } = useQuery({
        queryKey: ['instructor-classes'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axios(
				`http://localhost:5000/instructor-classes/?email=${user?.email}`
			);
            
            return result.data;
        }
    })

    return {instructorCalsses, isLoading, refetch}
};

export default useInstructorClass;