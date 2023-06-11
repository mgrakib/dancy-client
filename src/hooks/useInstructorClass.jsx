import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorClass = () => {
    const { user, loading } = useAuth();
    const email = { email: user?.email }
    const [axiosSEcure] = useAxiosSecure();
    
    const {data:instructorCalsses =[], isLoading, refetch } = useQuery({
        queryKey: ['instructor-classes'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSEcure(
				`instructor-classes/?email=${user?.email}`
			);
            return result.data;
        }
    })

    return {instructorCalsses, isLoading, refetch}
};

export default useInstructorClass;