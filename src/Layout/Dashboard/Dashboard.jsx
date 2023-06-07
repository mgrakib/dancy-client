/** @format */

import { Link, Outlet } from "react-router-dom";
import logo_light from "../../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const Dashboard = () => {
	return (
		<div className='flex'>
			<div className='w-[20%] bg-dashboard-color h-[100vh]'>
				<div className=' p-4  border-b border-dashed border-secondary-color mb-4'>
					<Link to={"/"}>
						<img
							src={logo_light}
							alt=''
							className='w-[120px]'
						/>
					</Link>
				</div>

				<ul>
					<Link to='/dashboard'>
						<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
							<IoHome /> Admin Home
						</li>
					</Link>
					<Link to='/dashboard/manage-users'>
						<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
							<FaUsers /> Manage Users
						</li>
					</Link>
					<Link to='/dashboard/manage-classes'>
						<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
							<HiOutlineClipboardDocumentList /> Manage Classes
						</li>
					</Link>
				</ul>
			</div>

			<div className="w-full h-[100vh] overflow-y-auto ">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
