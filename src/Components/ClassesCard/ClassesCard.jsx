import './ClassesCard.css'
import { BiUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import Button from '../Button/Button';
import { useState } from 'react';
import DenyModal from '../Modal/DenyModal';
import axios from 'axios';

const ClassesCard = ({
	singleClass,
	openModal,
	refetch,
	isAdmin,
	isInstructor,
	user
}) => {

	const {
		_id,
		img,
		name,
		instructorName,
		instructorEmail,
		availableSeats,
		price,
		status,
	} = singleClass;

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
			});
	};

	return (
		<div
			className={`rounded-tl-lg rounded-tr-lg overflow-hidden  border border-secondary-color  card-container duration-500 ${availableSeats === 0 && 'bg-red-200' }`}
		>
			<div className='h-[250px]  overflow-hidden'>
				<img
					src={img}
					alt=''
					className='h-full w-full object-cover'
				/>
			</div>

			<div className='p-4 '>
				<h2 className='text-3xl font-bold'>{name}</h2>

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
						<MdEventAvailable /> Available Seats:{" "}
						{availableSeats}
					</p>

					<p className='flex items-center gap-2'>
						<ImPriceTags /> Cours Fee: {price || "00"}
					</p>
				</div>

				{/* show status if admin and instractor  */}
				{(isAdmin || isInstructor) && (
					<div>
						<p className='pb-4'>
							Status :{" "}
							<span
								className={`${
									status === "pending"
										? "text-yellow-500"
										: status === "approved"
										? "text-green-500"
										: "text-red-500"
								}`}
							>
								{status}
							</span>
						</p>
					</div>
				)}

				{/* if admin then  show approved and deny btn  */}
				{isAdmin && (
					<div className='flex items-center gap-4'>
						<div
							onClick={() =>
								handelChangeStatus("approved", _id)
							}
						>
							<Button
								bgColor={"bg-green-500"}
								label={"Approve"}
							/>
						</div>

						<div
							onClick={openModal}
							className=''
						>
							<Button
								bgColor={"bg-secondary-color"}
								label={"Deny"}
							/>
						</div>
					</div>
				)}

				{/* if instracture then just show update btn */}
				{isInstructor && (
					<div className='flex items-center gap-4'>
						<div>
							<Button
								bgColor={"bg-green-500"}
								label={"Update"}
							/>
						</div>
					</div>
				)}

				{user && (
					<div className='flex items-center gap-4'>
						<div>
							<Button
								bgColor={"bg-secondary-color"}
								label={"Select"}
							/>
						</div>
					</div>
				)}
			</div>

			<DenyModal
				closeModal={closeModal}
				isOpen={isOpen}
				id={_id}
				handelChangeStatus={handelChangeStatus}
			/>
		</div>
	);
};

export default ClassesCard;