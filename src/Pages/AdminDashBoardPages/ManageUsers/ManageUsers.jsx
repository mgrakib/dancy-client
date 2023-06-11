/** @format */

import axios from "axios";
import TableData from "../../../Components/Reusable/Table/TableData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
	const { users, refetch } = useUser();
	const [axiosSEcure] = useAxiosSecure();

	const handelRoleChange = async (role, user) => {
		const roleStatus = { role, email: user?.email };
		const result = await axiosSEcure
			.put("http://localhost:5000/update-user-role", roleStatus)
			.then(res => {
				axiosSEcure.post(`http://localhost:5000/make-instructor/${user?.email}`).then(result => {
					console.log(result.data)
					refetch();
				})
			}).catch(err => console.log(err.message))
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

	// TODO: reomove instructor when is admin

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
