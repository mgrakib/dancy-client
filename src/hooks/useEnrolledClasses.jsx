import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useEnrolledClasses = () => {
    const { user } = useAuth();
    const {data: myEnrolledClasses= [], refetch, isLoading } = useQuery({
        queryKey: ['enrolled classes'],
        queryFn: async () => {
            const result = await axios(
				`https://twelve-assignment-server-mgrakib.vercel.app/enrolled-classes/?email=${user?.email}`
			);

            return result.data;
        }
    })

    return {myEnrolledClasses, refetch, isLoading}
};

export default useEnrolledClasses;