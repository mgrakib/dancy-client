import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useRole =() => {
    const { user } = useAuth();
    const {date:role=[], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn:  async() => {
            const result = axios(`http://localhost:5000/user-role`).then(
				res => console.log(res.date)
			);
        }
    })

    return {role, isLoading, refetch}
}

export default useRole;