import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSEcure] = useAxiosSecure();
    const {data: myEnrolledClasses= [], refetch, isLoading } = useQuery({
        queryKey: ['enrolled classes'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSEcure(`enrolled-classes/?email=${user?.email}`);

            return result.data;
        }
    })

    return {myEnrolledClasses, refetch, isLoading}
};

export default useEnrolledClasses;