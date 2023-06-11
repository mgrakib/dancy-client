import { useQuery } from "react-query";
import useAuth from "./useAuth"
import axios from "axios";

const useCartClass = () => {
    const { user, loading } = useAuth();

    const {data: cartClasses =[], isLoading, refetch } = useQuery({
        queryKey: ['cartclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const result = await axios(`http://localhost:5000/cart-classes/?email=${user?.email}`, { headers: {Authorization: `Bearer ${localStorage.getItem('access-token')}`}});
            return result.data;
        }
    })

    return { cartClasses, isLoading, refetch };
}

export default useCartClass;