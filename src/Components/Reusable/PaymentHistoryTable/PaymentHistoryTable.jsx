/** @format */

import moment from "moment/moment";

const PaymentHistoryTable = ( {paymentHistory} ) => {


    console.log(paymentHistory);
	return (
		<div>
			<div className='overflow-x-auto'>
				<table className='table table-zebra'>
					{/* head */}
					<thead>
						<tr>
							<th>#</th>

							<th>Class Name</th>
							<th>Transaction Id</th>
							<th>Date</th>
							<th>Price</th>
							<th>User Email</th>
							<th className='text-center'>Instructor Email</th>
						</tr>
					</thead>
					<tbody>
						{paymentHistory?.map((item, index) => (
							<tr key={item._id}>
								<td>{index + 1}</td>

								<td>{item?.cartClassName}</td>
								<td>{item?.transactionID}</td>
								<td>{moment().format(new Date(item?.date).toLocaleString())}</td>
								{/* <td>{new Date(item?.date).toLocaleDateString()}</td> */}
								<td>{item?.price}</td>
								<td>{item?.email}</td>
								<td>{item?.instructorEmail}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentHistoryTable;
