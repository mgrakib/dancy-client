

import TableData from "../../../Components/Reusable/Table/TableData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useUser from "../../../hooks/useUser";

const ManageUsers = () => {
    const { users, isLoading, refetch } = useUser();
    

    if (isLoading) {
        return  <p>Loading...</p>
    }
    return (
		<div className=''>
			<div className='py-4 md:py-16'>
				<SectionTitle
					title={"Manage Users"}
					isCenter={true}
				/>
			</div>

			<div className=" overflow-x-auto min-w-[70vw]">
				<TableData users={users} />
			</div>
		</div>
	);
};

export default ManageUsers;