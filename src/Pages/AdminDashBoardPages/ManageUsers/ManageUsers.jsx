/** @format */

import axios from "axios";
import TableData from "../../../Components/Reusable/Table/TableData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TableDataLoading from "../../../Components/LoadingModal/TableDataLoading";

const ManageUsers = () => {
	const { users, refetch, isLoading } = useUser();
	const [axiosSEcure] = useAxiosSecure();

	const handelRoleChange = async (role, user) => {
		const roleStatus = { role, email: user?.email };
		const result = await axiosSEcure
			.put("update-user-role", roleStatus)
			.then(res => {
				axiosSEcure.post(`make-instructor/${user?.email}`).then(result => {
					console.log(result.data)
					refetch();
				})
			}).catch(err => console.log(err.message))
	};

	


	// TODO: reomove instructor when is admin
	if (isLoading) {
		return <TableDataLoading cards={6} />;
	}
	return (
		<div className=''>
			<SectionTitle
				title={"Manage Users"}
				isCenter={true}
			/>

			<div className=' overflow-x-auto min-w-[70vw] px-5'>
				<TableData
					users={users}
					handelRoleChange={handelRoleChange}
				/>
			</div>
		</div>
	);
};

export default ManageUsers;
