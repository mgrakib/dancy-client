import { useQuery } from "react-query";
import Container from "../../Components/Container/Container";
import axios from "axios";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import PageLoader from "../../Components/PageLoader/PageLoader";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useApprovedCasses from "../../hooks/useApprovedCasses";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Classes = () => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


	// TODO : change value second time 
	const [dataLimite, setDataLimite] = useState(6);
	const [sortData, setSortData] = useState(-1);
	let { approvedClasses, refetch, isLoading } = useApprovedCasses();
	const [addToCartLoadin, setAddToCartLoadin] = useState(false);
	
	const handelSortDataChange = e => {
		setSortData(e.target.value);
		console.log(sortData)
		refetch();
	};

	const handelDataLimiteChange = e => {
		setDataLimite(e.target.value);
		console.log(e.target.value);
		refetch();
	};


	
	const handerAddClass = singleClass => {
		setAddToCartLoadin(true)
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
				return	navigate("/login", { state: { from: location } });
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
					if (res.data.message === 'already added') {
						
						toast.error("This class already added.");
                    }else{
						toast.success("Add successfully!!!");
					}
					setAddToCartLoadin(false);
				});
    
        }
    }



    if (isLoading) {
        return (
			<div className="w-full h-[80vh]">
				<PageLoader />
			</div>
		);
    }
    return (
		<div className='pt-4 md:pt-16'>
			<Container>
				<div className='flex items-center justify-between md:justify-start gap-3'>
					<div>
						<select
							onChange={handelSortDataChange}
							name=''
							id=''
							className='outline-none border-2 rounded-md border-secondary-color mb-4 md:mb-8 py-2 px-1 hover:shadow-md'
						>
							<option value='-1'>Sort</option>
							<option value='-1'>Ascending</option>
							<option value='1'>Descending</option>
						</select>
					</div>
					<div>
						<select
							onChange={handelDataLimiteChange}
							name=''
							id=''
							className='outline-none border-2 rounded-md border-secondary-color mb-4 md:mb-8 py-2 px-1 hover:shadow-md'
						>
							<option value='6'>Data Limite</option>
							<option value='2'>2</option>
							<option value='4'>4</option>
							<option value='6'>6</option>
							<option value='8'>8</option>
							<option value='10'>10</option>
						</select>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{approvedClasses.map(singleClass => (
						<ClassesCard
							key={singleClass._id}
							singleClass={singleClass}
							isUser={true}
							handerAddClass={handerAddClass}
							addToCartLoadin={addToCartLoadin}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Classes;