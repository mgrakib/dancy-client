import axios from "axios";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCartClass from "../../../hooks/useCartClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import PaymentModal from "../../../Components/Modal/PaymentModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySelectedClass = () => {
	const { cartClasses, refetch } = useCartClass();
	let [isOpen, setIsOpen] = useState(false);
	const [targetClass, setTargetClass] = useState({});
	const [axiosSEcure] = useAxiosSecure();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const handelPayment = setSingleClass => {
		setTargetClass(setSingleClass);
		openModal();
	};


    
	const handelRemoveToCart = (singleClass) => {
		
        const id = singleClass._id;
        Swal.fire({
			title: "Are you sure to remove from cart?",
			text: "You will be able to add this class again.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
            if (result.isConfirmed) {
                axiosSEcure
					.delete(`http://localhost:5000/delete-cart-class/${id}`)
					.then(res => {
						refetch();
						Swal.fire(
							"Remove!",
							"Your file has been Removed from cart.",
							"success"
						);
					});
				
			}
		});
        
    
    } 
    return (
		<div className='w-full'>
			<DashboardContainer>
				<div>
					<SectionTitle
						title={"My Select Classes"}
						isCenter={true}
					/>
				</div>
				<div className='flex items-center justify-between py-4'>
					<h4 className='text-3xl'>
						Total Class: {cartClasses.length}
					</h4>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{cartClasses.map(singleClass => (
						<ClassesCard
							key={singleClass._id}
							singleClass={singleClass}
							isCart={true}
							handelRemoveToCart={handelRemoveToCart}
							handelPayment={handelPayment}
						></ClassesCard>
					))}
				</div>
			</DashboardContainer>

			<PaymentModal
				isOpen={isOpen}
				closeModal={closeModal}
				targetClass={targetClass}
			/>
		</div>
	);
};

export default MySelectedClass;