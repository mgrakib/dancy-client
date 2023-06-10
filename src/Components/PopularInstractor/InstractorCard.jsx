
import { Link } from 'react-router-dom';
import second from '../../assets/danch/danch5.jpg'
import { GoArrowRight } from 'react-icons/go';
import { HiMail } from "react-icons/hi";
import { FaUsers } from 'react-icons/fa';
// import { FaUsersBetweenLines } from "react-icons/fa";
const InstractorCard = ({ instractor }) => {
	const { name, className, totalEnrolledStudent, userImg, email } =
		instractor;
	return (
		<div className='relative group my-auto'>
			<div className=' flex items-center justify-center'>
				<img
					src={second}
					alt=''
				/>
			</div>

			<div className='relative shadow-xl w-2/3 mx-auto bg-white p-4 -top-5 text-center'>
				<h3 className='text-2xl font-bold'>{name}</h3>

				<div className='py-2 max-h-0 overflow-hidden group-hover:max-h-[200px] duration-500'>
					<div className='text-gray-color'>
						{className
							? className.map((course, i) => (
									<p key={i}>{course}</p>
							  ))
							: "No Class available"}
					</div>

					<div className='py-1 flex flex-col items-center '>
						<p className='flex items-center gap-2'>
							{" "}
							<HiMail /> {email}
						</p>
						<p className='flex items-center gap-2'>
							{" "}
							<FaUsers />{" "}
							{totalEnrolledStudent
								? totalEnrolledStudent
								: 0}{" "}
							students
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstractorCard;