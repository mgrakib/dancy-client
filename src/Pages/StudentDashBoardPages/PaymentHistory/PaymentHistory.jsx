import React, { useEffect } from 'react';
import DashboardContainer from '../../../Components/DashboardContainer/DashboardContainer';
import usePaymentHistory from '../../../hooks/usePaymentHistory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaHistory } from 'react-icons/fa';
import PaymentHistoryTable from '../../../Components/Reusable/PaymentHistoryTable/PaymentHistoryTable';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
	const { paymentHistory, isLoading, refetch } = usePaymentHistory();
	const {loading, user} = useAuth();


	const handelRefresh = () => {
		console.log('first')
			refetch();
	}


    return (
		<div className='w-full'>
			<DashboardContainer>
				<div className='flex items-center'>
					<SectionTitle
						title={"Payment History"}
						isCenter={true}
					/>

					<div>
						<FaHistory
							onClick={handelRefresh}
							className='cursor-pointer'
						/>
					</div>
				</div>

				{loading ? (
					<div className=''>Loading</div>
				) : (
					<div className=''>
						<PaymentHistoryTable paymentHistory={paymentHistory} />
					</div>
				)}
			</DashboardContainer>
		</div>
	);
};

export default PaymentHistory;