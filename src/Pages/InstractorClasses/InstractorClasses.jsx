/** @format */

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const InstractorClasses = () => {
	const classes = useLoaderData();
	const { user } = useAuth();
	const location = useLocation();
	const navigation = useNavigate();

	const handerAddClass = singleClass => {
		if (!user) {
			Swal.fire({
				title: "Are you sure?",
				text: "You have to first Login!!!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes",
			}).then(result => {
				if (result.isConfirmed) {
					return navigation("/login");
				}
			});
		} else {
			const {
				_id,
				name,
				instructorName,
				instructorEmail,
				availableSeats,
				price,
				img,
			} = singleClass;

			const classToCart = {
				classId: _id,
				name,
				instructorEmail,
				instructorName,
				availableSeats,
				price,
				studentEmail: user?.email,
				img,
			};

			axios
				.post(`http://localhost:5000/class-add-to-cart`, classToCart)
				.then(res => {
					if (res.data.message === "already added") {
						alert("this class already added to cart");
					}
				});
		}
	};

	return (
		<div>
			<Container>
				<SectionTitle
					title={"Instractor Classes"}
					isCenter={true}
				/>

				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{classes.map(singleClass => (
						<ClassesCard
							key={singleClass._id}
							singleClass={singleClass}
							isUser={true}
							handerAddClass={handerAddClass}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default InstractorClasses;
