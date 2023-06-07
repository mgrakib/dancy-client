
import { Link } from 'react-router-dom';
import second from '../../assets/danch/danch5.jpg'
import { GoArrowRight } from 'react-icons/go';
const InstractorCard = () => {
    return (
		<div className='relative group my-auto'>
			<div>
				<img
					src={second}
					alt=''
				/>
			</div>

			<div className='relative shadow-xl w-2/3 mx-auto bg-white p-4 -top-5 text-center'>
				<h3 className='text-2xl font-bold'>Hip Hop Dance</h3>

				<div className='py-2 max-h-0 overflow-hidden group-hover:max-h-[200px] duration-500'>
					<p className='text-gray-color'>
						Lorem ipsum dolor sit amet, consecte adipiscing elit,
						sed do eiusmod tempor incididunt
					</p>

					<Link>
					<div className='flex items-center gap-2 justify-center py-2 text-blue-700'>Learn More <GoArrowRight /></div></Link>
				</div>
			</div>
		</div>
	);
};

export default InstractorCard;