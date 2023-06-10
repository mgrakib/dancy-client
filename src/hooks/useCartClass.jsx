import { useQuery } from "react-query";
import useAuth from "./useAuth"
import axios from "axios";

const useCartClass = () => {
    const { user, loading } = useAuth();

    const {data: cartClasses =[], isLoading, refetch } = useQuery({
        queryKey: ['cartclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const result = await axios(`https://twelve-assignment-server-mgrakib.vercel.app/cart-classes/?email=${user?.email}`);
            return result.data;
        }
    })

    return { cartClasses, isLoading, refetch };
}

export default useCartClass;