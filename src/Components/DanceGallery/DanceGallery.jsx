import './DanceGallery.css'

import Container from "../Container/Container";
import danch1 from '../../assets/danch/danch1.jpg'
import danch2 from '../../assets/danch/danch2.avif'
import danch3 from '../../assets/danch/danch3.jpg'
import danch4 from '../../assets/danch/danch4.jpg'
import danch5 from '../../assets/danch/danch5.jpg'
const DanceGallery = () => {
    return (
		<div className='pt-16'>
			<div className='grid grid-cols-1  md:grid-cols-4 grid-rows-4'>
				<div className='gallery-div md:col-span-2 md:row-span-2'>
					<img
						src={danch5}
						alt=''
						className=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Ballet Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-blue-500 gallery-div'>
					<img
						src={danch1}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							House Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-green-500 gallery-div'>
					<img
						src={danch2}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Jazz Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-yellow-500 md:col-span-2 gallery-div'>
					<img
						src={danch3}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Hip Hop Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-indigo-700 md:row-span-2 gallery-div'>
					<img
						src={danch4}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Popping Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-purple-700 gallery-div'>
					<img
						src={danch5}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Popping Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-slate-800 md:col-span-2 md:row-span-2 gallery-div'>
					<img
						src={danch2}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Cardio Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
				<div className='bg-orange-900 gallery-div '>
					<img
						src={danch5}
						alt=''
					/>
					<div className='gallery-overlay'>
						<h3 className='text-3xl font-semibold'>
							Ballet Dance Class
						</h3>
						<p>Explore Class</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DanceGallery;