/** @format */

import { Link, Outlet } from "react-router-dom";
import logo_light from "../../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import useRole from "../../hooks/useRole";
import { useQuery } from "react-query";
import { useEffect } from "react";

const Dashboard = () => {
    
	const { role, isLoading, refetch } = useRole();
	
	// set dashboard nav link by role 
    let sideNavItem;

    if (role === 'admin') {
        sideNavItem = (
			<>
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
			</>
		);
    } else if (role === "instractor") {
		sideNavItem = (
			<>
				<Link to='/dashboard'>
					<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
						<IoHome /> Instractor Home
					</li>
				</Link>
				<Link to='/dashboard/manage-users'>
					<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
						<FaUsers /> My Classes
					</li>
				</Link>
				<Link to='/dashboard/add-an-class'>
					<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
						<HiOutlineClipboardDocumentList /> Add a Class
					</li>
				</Link>
			</>
		);
    } else {
        sideNavItem = (
			<>
				<Link to='/dashboard'>
					<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
						<IoHome /> Student Home
					</li>
				</Link>
				<Link to='/dashboard/manage-users'>
					<li className='text-gray-color  p-4 flex items-center gap-2 text-lg'>
						<FaUsers /> My Classes
					</li>
				</Link>
			</>
		);
    }
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

					<ul>{sideNavItem}</ul>
				</div>

				<div className='w-full h-[100vh] overflow-y-auto '>
					<Outlet />
				</div>
			</div>
		);
};

export default Dashboard;
