/** @format */

import axios from "axios";
import TableData from "../../../Components/Reusable/Table/TableData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";

const ManageUsers = () => {
	const { users, refetch } = useUser();

	const handelRoleChange = async (role, user) => {
		const roleStatus = { role, email: user?.email };
		const result = await axios
			.put("http://localhost:5000/update-user-role", roleStatus)
			.then(res => {
				axios.post(`http://localhost:5000/make-instructor/${user?.email}`).then(result => {
					console.log(result.data)
					refetch();
				})
			});
	};

	

// _id
// 648054557135cb7910807a47
// name
// "John Smith"
// email
// "john.smith@example.com"

// courses
// Array
// 0
// "Mathematics"
// 1
// "Physics"
// experience
// 5


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
