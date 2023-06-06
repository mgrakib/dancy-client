
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png' 
import Container from '../../Container/Container';
const NavBar = () => {

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

					<div></div>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;