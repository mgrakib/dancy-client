/** @format */

import axios from "axios";
import TableData from "../../../Components/Reusable/Table/TableData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";

const ManageUsers = () => {
	const { users } = useUser();

	const handelRoleChange = async (role, user) => {
		const roleStatus = { role, email: user?.email };
		const result = await axios
			.put("http://localhost:5000/update-user-role", roleStatus)
			.then(res => {
				// refetch();
				console.log(res.data);
			});
	};

	console.log(users, "manage");
	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }
	return (
		<div className=''>
			<SectionTitle
				title={"Manage Users"}
				isCenter={true}
			/>

			<div className=' overflow-x-auto min-w-[70vw]'>
				<TableData
					users={users}
					handelRoleChange={handelRoleChange}
				/>
			</div>
		</div>
	);
};

export default ManageUsers;
