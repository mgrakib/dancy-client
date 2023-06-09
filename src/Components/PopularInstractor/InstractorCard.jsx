
import { Link } from 'react-router-dom';
import second from '../../assets/danch/danch5.jpg'
import { GoArrowRight } from 'react-icons/go';
const InstractorCard = ({ instractor }) => {
	const { name, courses, experience } = instractor;
	return (
		<div className='relative group my-auto'>
			<div>
				<img
					src={second}
					alt=''
				/>
			</div>

			<div className='relative shadow-xl w-2/3 mx-auto bg-white p-4 -top-5 text-center'>
				<h3 className='text-2xl font-bold'>{name}</h3>

				<div className='py-2 max-h-0 overflow-hidden group-hover:max-h-[200px] duration-500'>
					<div className='text-gray-color'>
						{courses.map((course, i) => (
							<p key={i}>{course}</p>
						))}
					</div>

					
						<div className='flex items-center gap-2 justify-center py-2 text-blue-700'>
							{experience} students
						</div>
				</div>
			</div>
		</div>
	);
};

export default InstractorCard;