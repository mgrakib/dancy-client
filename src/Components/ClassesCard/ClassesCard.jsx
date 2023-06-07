import './ClassesCard.css'
import { BiUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import Button from '../Button/Button';
import { useState } from 'react';
import DenyModal from '../Modal/DenyModal';
import axios from 'axios';

const ClassesCard = ({ singleClass, openModal, refetch }) => {
	let [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// change status
	const handelChangeStatus = async (statusValue, id, feedBack) => {
		const status = { status: statusValue, id: id, feedBack };
		const result = await axios
			.put(`http://localhost:5000/update-class-status`, status)
			.then(res => {
				refetch();
				console.log(res.data)
			});
	};

	return (
		<div className='rounded-tl-lg rounded-tr-lg overflow-hidden  border border-secondary-color card-container duration-500'>
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
						<ImPriceTags /> Cours Fee: {singleClass?.price || "00"}
					</p>
				</div>

				<div>
					<p className='pb-4'>
						Status :{" "}
						<span
							className={`${
								singleClass.status === "pending"
									? "text-yellow-500"
									: singleClass.status === "approved"
									? "text-green-500"
									: "text-red-500"
							}`}
						>
							{singleClass?.status}
						</span>
					</p>
				</div>
				<div className='flex items-center gap-4'>
					<div
						onClick={() =>
							handelChangeStatus("approved", singleClass._id)
						}
					>
						<Button label={"Approve"} />
					</div>

					<div
						onClick={openModal}
						className=''
					>
						<Button label={"Deny"} />
					</div>
				</div>
			</div>

			<DenyModal
				closeModal={closeModal}
				isOpen={isOpen}
				id={singleClass._id}
				handelChangeStatus={handelChangeStatus}
			/>
		</div>
	);
};

export default ClassesCard;