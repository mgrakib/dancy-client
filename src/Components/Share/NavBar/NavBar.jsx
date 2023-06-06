
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png' 
import Container from '../../Container/Container';
import './NavBar.css'
import useAuth from '../../../hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavBar = () => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	const handelLogOut = () => {
		logOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch(error => {
				console.log(error.message)
			});
	}
    const navItesm = (
		<>
			<Link className='nav-items'>
				<li>Home</li>
			</Link>
			<Link className='nav-items'>
				<li>Instructors</li>
			</Link>
			<Link className='nav-items'>
				<li>Classes</li>
			</Link>
			{user && (
				<>
					<Link className='nav-items'>
						<li>Dashboard</li>
					</Link>
					<li className='px-[30px] md:px-0'>
						<div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
							<img
								src={user?.photoURL}
								alt=''
								title={user?.displayName}
							/>
						</div>
					</li>
					<div
						onClick={handelLogOut}
						className='nav-items cursor-pointer'
					>
						Log Out
					</div>
				</>
			)}
			{!user && (
				<Link
					to={"/login"}
					className='nav-items'
				>
					<li>Login</li>
				</Link>
			)}
		</>
	);

    return (
		<div className='bg-[#FFFFFF]'>
			<Container>
				<div className='flex items-center justify-between relative'>
					<Link to={"/"}>
						<div className='w-[50px]'>
							<img
								src={logo}
								alt=''
							/>
						</div>
					</Link>

					<div className='hidden md:block'>
						<ul className='flex items-center'>{navItesm}</ul>
					</div>

					<div className='md:hidden'>
						<GiHamburgerMenu
							onClick={() => setIsOpen(!isOpen)}
							size={"24"}
						/>
					</div>
					{isOpen && (
						<div className='bg-black  absolute right-0 top-10 z-50 text-primary-color rounded-md w-1/2 overflow-hidden'>
							<ul className='flex flex-col '>{navItesm}</ul>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};

export default NavBar;