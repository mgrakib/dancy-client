import axios from "axios";
import { useQuery } from "react-query";

const useUser = () => {
    const {data: users=[], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axios(`http://localhost:5000/get-all-user`);
            return result.data;
        }
    });

    return {users, isLoading, refetch}
}

export default useUser;