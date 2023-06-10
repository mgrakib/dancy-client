import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const usePaymentHistory = () => {
    const {user } = useAuth();
    const {data: paymentHistory =[], isLoading, refetch } = useQuery({
        queryKey: ['payment-history'],
        queryFn: async () => {
            const result = await axios(`https://twelve-assignment-server-mgrakib.vercel.app/payment-history/?email=${user?.email}`);

            return result.data;
        }
    })

    return { paymentHistory, isLoading, refetch };
};

export default usePaymentHistory;