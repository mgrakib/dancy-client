/** @format */

import { Link, Outlet } from "react-router-dom";
import logo_light from "../../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { FaHistory, FaUsers } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa";
import useRole from "../../hooks/useRole";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { MdPayment } from "react-icons/md";
import useCartClass from "../../hooks/useCartClass";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    
	const { role, isLoading, refetch } = useRole();
	const { loading } = useAuth();
	const {cartClasses } = useCartClass();
	
	// set dashboard nav link by role 
    let sideNavItem;

    if (role === 'admin') {
        sideNavItem = (
			<>
				<Link to='/dashboard'>
					<li className='text-gray-color  p-4 flex items-center gap-2  '>
						<IoHome /> Admin Home
					</li>
				</Link>
				<Link to='/dashboard/manage-users'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<FaUsers /> Manage Users
					</li>
				</Link>
				<Link to='/dashboard/manage-classes'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<HiOutlineClipboardDocumentList /> Manage Classes
					</li>
				</Link>
			</>
		);
    } else if (role === "instractor") {
		sideNavItem = (
			<>
				<Link to='/dashboard'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<IoHome /> Instractor Home
					</li>
				</Link>
				<Link to='/dashboard/my-classes'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<FaUsers /> My Classes
					</li>
				</Link>
				<Link to='/dashboard/add-an-class'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<HiOutlineClipboardDocumentList /> Add a Class
					</li>
				</Link>
			</>
		);
    } else {
        sideNavItem = (
			<>
				<Link to='/dashboard'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<IoHome /> Student Home
					</li>
				</Link>
				<Link to='/dashboard/my-selected-classes'>
					<li className='text-gray-color  p-4 flex items-center gap-2 relative'>
						<FaBookOpen />
						<div className="relative">
							My Selected Classes
							<span className='bg-cyan-500 text-white w-[15px] h-[15px] text-[10px] flex items-center justify-center absolute -right-4 -top-1 rounded-full'>
								{cartClasses.length}
							</span>
						</div>
					</li>
				</Link>
				<Link to='/dashboard/my-enrolled-classes'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<SiGoogleclassroom /> My Enrolled Classes
					</li>
				</Link>
			
				<Link to='/dashboard/payment-history'>
					<li className='text-gray-color  p-4 flex items-center gap-2 '>
						<FaHistory /> Payment Histroy
					</li>
				</Link>
			</>
		);
    }


	if (loading) {
		return <p>Loading</p>
	}
		return (
			<div className='flex'>
				<div className='w-[25%] bg-dashboard-color h-[100vh]'>
					<div className=' p-4  border-b border-dashed border-secondary-color mb-4'>
						<Link to={"/"}>
							<img
								src={logo_light}
								alt=''
								className='w-[120px]'
							/>
						</Link>
					</div>

					{/* TODO: LOADiNG  */}
					{isLoading ? <><p>Data Load</p></> : <ul>{sideNavItem}</ul>}
				</div>

				<div className='w-full h-[100vh] overflow-y-auto '>
					<Outlet />
				</div>
			</div>
		);
};

export default Dashboard;
