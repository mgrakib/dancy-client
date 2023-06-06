/** @format */

import heroImg from "../../assets/banner/home-1.jpg";
import Container from "../Container/Container";
import "./HeroImage.css";
import { GrContact, GrLocation } from "react-icons/gr";


const HeroImage = () => {
	return (
		<div className='heroImg-container h-[150vh] md:h-[100vh]'>
			<Container>
				<div className='flex flex-col justify-end h-full  '>
					<div>
						<div>
							<h2 className='text-primary-color md:font-bold'>
								lose yourself to
							</h2>
						</div>
						<div>
							<h2 className='text-primary-color  text-[100px] md:text-[167px] md:font-bold leading-[150px]'>
								Dance!
							</h2>
						</div>
					</div>

					<div className='w-full mt-5'>
						<div className=' flex flex-col md:flex-row relative'>
							<div className='flex  items-end flex-1 flex-wrap'>
								<div className='bg-action-color w-full text-primary-color px-[30px] py-[35px]'>
									<h2 className='text-[26px]'>
										Hello new Students
									</h2>
									<p className='text-[18px]'>
										Sign up now for a taster lesson -
										completely free!
									</p>
								</div>
							</div>

							
							<div className='flex  bg-primary-color flex-1 items-end flex-wrap'>
								<div className='text-primary-color px-[30px] py-[35px]'>
									<p className='text-secondary-color'>
										Happy you here!
									</p>
									<h2 className='text-[28px] text-common-color font-bold py-2'>
										Welcome to our dance school
									</h2>

									<p className='text-[18px] text-gray-color'>
										We champion new ideas, embrace artistic
										innovation and enable extraordinary
										experiences for dance artists
									</p>
									<div className='flex justify-end items-center text-common-color gap-4 py-'>
										<div className='flex items-center gap-2'>
											<GrLocation /> Directions
										</div>
										<div className='flex items-center gap-2'>
											<GrContact /> Contact Us
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default HeroImage;
