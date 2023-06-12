
import { Link } from 'react-router-dom';
import logo_Light from "../../../assets/logo.png"; 
import logo_dark from "../../../assets/logo_Dark.png"; 
import Container from '../../Container/Container';
import './NavBar.css'
import useAuth from '../../../hooks/useAuth';
import { GiHamburgerMenu } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import useTheme from '../../../hooks/useTheme';
import { useState } from 'react';

// ..
AOS.init();

const NavBar = () => {
	const { user, logOut, isDark, setIsDark } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setThem] = useTheme();

	const handelDarkLight = () => {
		const isThemeDark = localStorage.getItem('theme');
		if (isThemeDark === 'dark') {
			localStorage.setItem('theme', 'light')
			setThem('light')
			setIsDark(false);
			
		} else {
			localStorage.setItem('theme', 'dark')
			setThem("dark");
			setIsDark(true);
			
		}
		
	}


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
			<Link
				to={"/nstructors"}
				className='nav-items'
			>
				<li>Instructors</li>
			</Link>
			<Link
				to={"/classes"}
				className='nav-items'
			>
				<li>Classes</li>
			</Link>
			{user && (
				<>
					<Link
						to={"/dashboard"}
						className='nav-items'
					>
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
		<div
			data-aos='fade-up'
			data-aos-duration='10000'
			data-aos-easing='linear'
		>
			<div className='bg-[#FFFFFF] dark:bg-dark-primary-colro shadow-lg dark:text-dark-secondary-colro'>
				<Container>
					<div className='flex items-center justify-between relative'>
						<Link to={"/"}>
							<div className='w-[70px]'>
								<img
									src={isDark ? logo_Light : logo_dark}
									alt=''
								/>
							</div>
						</Link>

						<div className='hidden md:block ms-auto'>
							<ul className='flex items-center'>{navItesm}</ul>
						</div>
						<div>
							<button
								onClick={handelDarkLight}
								className={`bg-dark-primary-colro text-primary-color dark:bg-white dark:text-dark-primary-colro font-bold py-1 px-3 rounded-md duration-300`}
							>
								{isDark ? 'Light' : 'Dark'}
							</button>
						</div>

						<div className='md:hidden'>
							<GiHamburgerMenu
								onClick={() => setIsOpen(!isOpen)}
								size={"24"}
							/>
						</div>
						{isOpen && (
							<div className=' absolute right-0 top-10 text-primary-color dark:bg-dark-primary-colro rounded-md w-1/2 overflow-hidden responisv-nav z-50'>
								<ul className='flex flex-col '>{navItesm}</ul>
							</div>
						)}
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NavBar;