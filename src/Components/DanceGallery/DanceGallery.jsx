import './DanceGallery.css'


import danch1 from '../../assets/dance/danch1.jpg'
import danch2 from '../../assets/dance/danch2.avif'
import danch3 from '../../assets/dance/danch3.jpg'
import danch4 from '../../assets/dance/danch4.jpg'
import danch5 from '../../assets/dance/danch5.jpg'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import SectionTitle from '../SectionTitle/SectionTitle';
// ..
AOS.init();
const DanceGallery = () => {
	return (
		<div className='dark:bg-dark-primary-colro  overflow-hidden px-2'>
			<SectionTitle
				isCenter={true}
				title={"Show Your Talent"}
				subTitle={"Dance Gallery"}
				details={
					"It's Time to show your tallent to all the people of the World"
				}
			/>

			<div
				data-aos-duration='1000'
				data-aos='fade-up'
				data-aos-anchor-placement='top-bottom'
			>
				<div className='grid grid-cols-1  md:grid-cols-4 grid-rows-4'>
					<div className='gallery-div md:col-span-2 md:row-span-2 '>
						<img
							src={danch5}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Ballet Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-blue-500 gallery-div'>
						<img
							src={danch1}
							alt=''
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								House Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-green-500 gallery-div'>
						<img
							src={danch2}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Jazz Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-yellow-500 md:col-span-2 gallery-div'>
						<img
							src={danch3}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Hip Hop Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-indigo-700 md:row-span-2 gallery-div'>
						<img
							src={danch4}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Popping Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-purple-700 gallery-div'>
						<img
							src={danch5}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Popping Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-slate-800 md:col-span-2 md:row-span-2 gallery-div'>
						<img
							src={danch2}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Cardio Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
					<div className='bg-orange-900 gallery-div '>
						<img
							src={danch5}
							alt=''
							className='w-full'
						/>
						<div className='gallery-overlay dark:bg-dark-primary-colro'>
							<h3 className='text-3xl font-semibold dark:text-dark-secondary-colro'>
								Ballet Dance Class
							</h3>
							<p className='dark:text-dark-common-color'>
								Explore Class
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DanceGallery;