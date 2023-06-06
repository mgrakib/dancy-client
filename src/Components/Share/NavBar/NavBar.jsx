
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png' 
import Container from '../../Container/Container';
import './NavBar.css'
import useAuth from '../../../hooks/useAuth';
const NavBar = () => {
	const { user, logOut } = useAuth();
	
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
					<div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
						<img
							src={user?.photoURL}
							alt=''
							title={user?.displayName}
						/>
					</div>
					<div
						onClick={handelLogOut}
						className='nav-items cursor-pointer'
					>
						Log Out
					</div>
				</>
			)}
			{!user && (
				<Link to={'/login'} className='nav-items'>
					<li>Login</li>
				</Link>
			)}
		</>
	);

    return (
		<div className='bg-[#FFFFFF]'>
			<Container>
				<div className='flex items-center justify-between'>
					<Link to={"/"}>
						<div className='w-[50px]'>
							<img
								src={logo}
								alt=''
							/>
						</div>
					</Link>

					<div>
						<ul className='flex items-center'>{navItesm}</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;