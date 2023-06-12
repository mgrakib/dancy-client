import { useQuery } from "react-query";
import useAuth from "./useAuth"
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useCartClass = () => {
    const { user, loading } = useAuth();
    const [axiosSEcure] = useAxiosSecure();

    const {data: cartClasses =[], isLoading, refetch } = useQuery({
        queryKey: ['cartclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSEcure(
				`cart-classes/?email=${user?.email}`);
            return result.data;
        }
    })

    return { cartClasses, isLoading, refetch };
}

export default useCartClass;