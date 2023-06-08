import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import logo_dark from '../../../assets/logo_Dark.png'

const Footer = () => {
    return (
		<div>
			<Container>
				
				<div className='w-[160px] pt-4 md:pt-16 mx-auto text-center'>
					<Link to={'/'}>
						<img
							src={logo_dark}
							alt=''
						/>
						<p>Dance school</p>
						</Link>
					</div>
				
				<div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
					<div className='py-4 md:py-16 text-center'>
						<h4 className='text-3xl font-bold'>Contacts</h4>
						<div className='text-gray-color'>
							102 Broadmay New York, NY, 246814
							example@dance_studio.com 1-002-448-568
						</div>
					</div>
					<div className='py-4 md:py-16 text-center'>
						<h4 className='text-3xl font-bold'>Open Hours</h4>
						<div className='text-gray-color'>
							<p>Monday 11am-7pm</p>
							<p>Tuesday-Friday 11am-8pm</p>
							<p>Saturday 10am-6pm</p>
							<p>Sunday 11am-6pm</p>
						</div>
					</div>
					<div className='py-4 md:py-16 text-center'>
						<h4 className='text-3xl font-bold'>About</h4>
						<div className='text-gray-color'>
							<Link>
								<p>About Us</p>
							</Link>
							<Link>
								<p>Blog</p>
							</Link>
							<Link>
								<p>Contacts</p>
							</Link>
						</div>
					</div>
					<div className='py-4 md:py-16 text-center'>
						<h4 className='text-3xl font-bold'>Information</h4>
						<div className='text-gray-color'>
							<Link>
								<p>FAQs</p>
							</Link>
							<Link>
								<p>Image Credits</p>
							</Link>
							<Link>
								<p>Find a Store</p>
							</Link>
						</div>
					</div>
				</div>

				<div className='text-center text-gray-color'>
					<p>
						Privacy Policy - cmsmasters © 2023 - All Rights Reserved
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Footer;