/** @format */

import { Link, Outlet } from "react-router-dom";
import logo_light from "../../assets/logo.png";
import { IoCloseSharp, IoHome } from "react-icons/io5";
import { FaHistory, FaUsers } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa";
import useRole from "../../hooks/useRole";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { MdPayment } from "react-icons/md";
import useCartClass from "../../hooks/useCartClass";
import useAuth from "../../hooks/useAuth";

import logo_dark from "../../assets/logo_Dark.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import DashboardLoading from "../../Components/LoadingModal/DashboardLoading";
import DashboardItemsLoading from "../../Components/LoadingModal/DashboardItemsLoading";

const Dashboard = () => {
    
	const { role, isLoading, refetch } = useRole();
	const { loading } = useAuth();
	
	const { cartClasses } = useCartClass();
	const [isDrowerOpen, setIsDrowerOpen] = useState(false);
	
	
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
	
	const handelDrowerOpen = event => {
		event.stopPropagation();
		setIsDrowerOpen(true);
	};

	if (loading) {
		return <DashboardLoading />;
	}
	
	return (
		<div
			className='flex'
			onClick={() => {
				console.log("first");
				setIsDrowerOpen(false);
			}}
		>
			<Helmet>
				{role === "admin" ? (
					<title>Admin Dashboard - Dancy</title>
				) : role === "instractor" ? (
					<title>Instructor Dashboard - Dancy</title>
				) : (
					<title>Student Dashboard - Dancy</title>
				)}
			</Helmet>
			<div
				className={`w-[50%] md:w-[25%] bg-dashboard-color  h-[100vh] absolute ${
					isDrowerOpen ? "left-0" : "-left-60"
				} md:left-0 z-50  md:relative duration-300`}
			>
				<div className=' p-4  border-b border-dashed border-secondary-color mb-4 flex relative'>
					<Link to={"/"}>
						<img
							src={logo_light}
							alt=''
							className='w-[120px]'
						/>
					</Link>

					<div
						onClick={() => setIsDrowerOpen(!isDrowerOpen)}
						className='md:hidden w-[20px] h-[20px] bg-red-500 flex justify-center items-center rounded-full text-white absolute -right-2 top-1/2 -translate-y-1/2 drop-shadow-[5_5px_35px_rgba(239,68,69,1)]'
					>
						<IoCloseSharp />
					</div>
				</div>

				{/* TODO: LOADiNG  */}
				{isLoading ? (
					<>
						<DashboardItemsLoading  card={4}/>
					</>
				) : (
					<ul>{sideNavItem}</ul>
				)}
			</div>

			<div className='w-full h-[100vh] overflow-y-auto bg-[#F5F8FA] dark:bg-dark-dashboard-color'>
				<div className='flex items-center justify-between py-3 px-2 md:hidden'>
					<div className='w-[100px]'>
						<img
							src={logo_light}
							alt=''
						/>
					</div>

					<div className='z-50'>
						<GiHamburgerMenu
							onClick={handelDrowerOpen}
							className='text-white'
							size={"24"}
						/>
					</div>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
