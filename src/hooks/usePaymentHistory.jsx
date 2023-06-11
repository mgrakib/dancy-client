import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePaymentHistory = () => {
    const [axiosSEcure] = useAxiosSecure();

    const {user, loading } = useAuth();
    const {data: paymentHistory =[], isLoading, refetch } = useQuery({
        queryKey: ['payment-history'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSEcure(
				`payment-history/?email=${user?.email}`);

            return result.data;
        }
    })

    return { paymentHistory, isLoading, refetch };
};

export default usePaymentHistory;