import './DanceGallery.css'

import Container from "../Container/Container";
import danch1 from '../../assets/danch/danch1.jpg'
import danch2 from '../../assets/danch/danch2.avif'
import danch3 from '../../assets/danch/danch3.jpg'
import danch4 from '../../assets/danch/danch4.jpg'
import danch5 from '../../assets/danch/danch5.jpg'
const DanceGallery = () => {
    return (
		<div>
			
				<div className='grid grid-cols-1  md:grid-cols-4 grid-rows-4'>
					<div className='galary-div md:col-span-2 md:row-span-2'>
						<img
							src={danch5}
							alt=''
							className=''
						/>
					</div>
					<div className='bg-blue-500 galary-div'>
						<img
							src={danch1}
							alt=''
						/>
					</div>
					<div className='bg-green-500 galary-div'>
						<img
							src={danch2}
							alt=''
						/>
					</div>
					<div className='bg-yellow-500 md:col-span-2 galary-div'>
						<img
							src={danch3}
							alt=''
						/>
					</div>
					<div className='bg-indigo-700 md:row-span-2 galary-div'>
						<img
							src={danch4}
							alt=''
						/>
					</div>
					<div className='bg-purple-700 galary-div'>
						<img
							src={danch5}
							alt=''
						/>
					</div>
					<div className='bg-slate-800 md:col-span-2 md:row-span-2 galary-div'>
						<img
							src={danch2}
							alt=''
						/>
					</div>
					<div className='bg-orange-900 galary-div '>
						<img
							src={danch5}
							alt=''
						/>
					</div>
				</div>
			
		</div>
	);
};

export default DanceGallery;