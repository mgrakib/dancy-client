import './Card.css'


import RightArrow from '../Arrow/RightArrow';
import { BiUser } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { MdEventAvailable } from 'react-icons/md';
import { ImPriceTags } from 'react-icons/im';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const Card = ({ singleClass }) => {
	const {
		_id,
		img,
		name,
		instructorName,
		instructorEmail,
		availableSeats,
		price,
		status,
		feedBack,
		totalStudent,
	} = singleClass;
	return (
		<div
			className={`group overflow-hidden rounded-md flex flex-col shadow-md class-container ${availableSeats === 0 && 'bg-red-200 dark:bg-red-200'} dark:bg-dark-common-color`}
		>
			<div className='min-h-[250px]'>
				<img
					src={img}
					alt=''
				/>
			</div>
			<div className='p-2'>
				<h2 className='text-2xl classTitle relative duration-500 left-2 inline-block py-2'>
					{name}
				</h2>
				<div className='py-2 flex items-center justify-between'>
					<p
						className='flex items-center gap-2'
						title='Instractor Name'
					>
						<BiUser /> {instructorName}
					</p>

					<p
						className='flex items-center gap-2'
						title='Instractor Email'
					>
						<GrMail /> {instructorEmail}
					</p>
				</div>

				<div className='py-2 flex items-center justify-between'>
					<p
						className='flex items-center gap-2'
						title='Available Sets'
					>
						<MdEventAvailable /> Available Seats: {availableSeats}
					</p>

					<p className='flex items-center gap-2'>
						<ImPriceTags /> Cours Fee: {price || "00"}
					</p>
				</div>
				<p className='pb-4 flex items-center gap-2'>
					<AiOutlineUsergroupAdd /> Total Enrolled :{" "}
					<span className={`text-green-500`}>{totalStudent}</span>
				</p>
				<RightArrow />
			</div>
		</div>
	);
};

export default Card;