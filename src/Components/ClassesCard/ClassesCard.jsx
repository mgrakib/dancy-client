/** @format */

import "./ClassesCard.css";
import { BiUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import Button from "../Button/Button";
import { useState } from "react";
import DenyModal from "../Modal/DenyModal";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { TbFidgetSpinner, TbMessageDots } from "react-icons/tb";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import useModal from "../../hooks/useModal";
import DenyMessageShow from "../Modal/DenyMessageShow";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ClassesCard = ({
	singleClass,
	refetch,
	isAdmin,
	isInstructor,
	isUser,
	handerAddClass,
	isCart,
	handelRemoveToCart,
	handelPayment,
	addToCartLoadin,
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
		feedBack,
		totalStudent,
	} = singleClass;

	const { user } = useAuth();
	// check role for disable btn
	const { role } = useRole();
	const [axiosSEcure] = useAxiosSecure();
	const {
		isOpen: FBMisOpen,
		closeModal: FBMcloseModal,
		openModal: FBMopenModal,
	} = useModal();

	let [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}

	function openModal(value) {
		setIsOpen(true);
	}

	// change status
	const handelChangeStatus = async (statusValue, id, feedBack) => {
		const status = { status: statusValue, id: id, feedBack };
		const result = await axiosSEcure
			.put(`update-class-status`, status)
			.then(res => {
				if (statusValue === "approved") {
					axiosSEcure
						.put(`update-instructor-info`, {
							name,
							email: instructorEmail,
						})
						.then(res => {
							console.log(res.data);
						});
				}

				toast.success("Successfully Update!!");
				refetch();
			});
	};

	return (
		<div
			className={`rounded-tl-lg rounded-tr-lg overflow-hidden  border border-secondary-color dark:border-dark-secondary-colro  card-container duration-500 ${
				availableSeats === 0 && "bg-red-200 dark:bg-red-200"
			} dark:bg-dark-common-color`}
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
					{
						<p
							className='flex items-center gap-2'
							title='Available Sets'
						>
							<MdEventAvailable /> Available Seats:{" "}
							{availableSeats && availableSeats}
						</p>
					}
					<p className='flex items-center gap-2'>
						<ImPriceTags /> Cours Fee: {price || "00"}
					</p>
				</div>

				{/* show status if admin and instractor  */}

				<div className='flex items-center justify-between'>
					{(isAdmin || isInstructor) && (
						<p className='pb-4'>
							Status :{" "}
							<span
								className={`${
									status === "pending"
										? "text-yellow-500"
										: status === "approved"
										? "text-green-500"
										: "text-red-500"
								} relative`}
							>
								{status}

								{status === "deny" && (
									<div className='absolute -top-1 -right-4 cursor-pointer'>
										<TbMessageDots
											onClick={() => FBMopenModal()}
											title='Feedback from Admin'
										/>
									</div>
								)}
							</span>
						</p>
					)}
					{/* Total Enrolled */}
					{
						<p className='pb-4 flex items-center gap-2'>
							<AiOutlineUsergroupAdd /> Total Enrolled :{" "}
							<span className={`text-green-500`}>
								{totalStudent ? totalStudent : 0}
							</span>
						</p>
					}
				</div>

				{/* if admin then  show approved and deny btn  */}
				{isAdmin && (
					<div className='flex items-center gap-4'>
						<div
							onClick={() => handelChangeStatus("approved", _id)}
						>
							<Button
								bgColor={"bg-green-500"}
								label={"Approve"}
								isDisable={
									status === "approved" || status === "deny"
								}
							/>
						</div>

						<div
							onClick={openModal}
							className=''
						>
							<Button
								bgColor={"bg-secondary-color"}
								label={"Deny"}
								isDisable={
									status === "approved" || status === "deny"
								}
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

				{isUser && (
					<div className='flex items-center gap-4'>
						<div onClick={() => handerAddClass(singleClass)}>
							<Button
								bgColor={"bg-secondary-color"}
								label={"Select"}
								isDisable={
									availableSeats === 0 ||
									role === "admin" ||
									role === "instractor"
								}
							/>
						</div>
					</div>
				)}
				{isCart && (
					<div className='flex items-center gap-4'>
						<div onClick={() => handelRemoveToCart(singleClass)}>
							<Button
								bgColor={"bg-secondary-color"}
								label={"Remove To Cart"}
								isDisable={
									availableSeats === 0 ||
									role === "admin" ||
									role === "instractor"
								}
							/>
						</div>
						<div onClick={() => handelPayment(singleClass)}>
							<Button
								bgColor={"bg-secondary-color"}
								label={"Pay"}
								isDisable={
									availableSeats === 0 ||
									role === "admin" ||
									role === "instractor"
								}
							/>
						</div>
					</div>
				)}

				{}
			</div>

			<DenyModal
				closeModal={closeModal}
				isOpen={isOpen}
				id={_id}
				handelChangeStatus={handelChangeStatus}
			/>

			<DenyMessageShow
				closeModal={FBMcloseModal}
				isOpen={FBMisOpen}
				fbd={feedBack}
			/>
		</div>
	);
};

export default ClassesCard;
