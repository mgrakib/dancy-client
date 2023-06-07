import './ClassesCard.css'
import { BiUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
const ClassesCard = ({ singleClass }) => {
    console.log(singleClass)
    return (
		<div className='rounded-tl-lg rounded-tr-lg overflow-hidden  border border-secondary-color'>
			<div className='h-[250px]  overflow-hidden'>
				<img
					src={singleClass?.img}
					alt=''
					className='h-full w-full object-cover'
				/>
			</div>

			<div className='p-4 '>
				<h2 className='text-3xl font-bold'>{singleClass.name}</h2>

				<div className='py-2 flex items-center justify-between'>
					<p
						className='flex items-center gap-2'
						title='Instractor Name'
					>
						<BiUser /> {singleClass?.instructorName}
					</p>

					<p
						className='flex items-center gap-2'
						title='Instractor Email'
					>
						<GrMail /> {singleClass?.instructorName}
					</p>
				</div>
				<div className='py-2 flex items-center justify-between'>
					<p
						className='flex items-center gap-2'
						title='Available Sets'
					>
						<MdEventAvailable /> Available Seats:{" "}
						{singleClass?.availableSets}
					</p>

					<p className='flex items-center gap-2'>
						<ImPriceTags /> Cours Fee: {singleClass?.price || '00'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ClassesCard;