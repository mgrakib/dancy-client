import { useQuery } from "react-query";
import Container from "../../Components/Container/Container";
import axios from "axios";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";
import PageLoader from "../../Components/PageLoader/PageLoader";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const navigation = useNavigate();

    // TODO: first fetch all data 
    const {data: approvedClasses =[], isLoading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const result = await axios(
                `http://localhost:5000/approverd-classes`
            );
            
            return result.data;
        }
    })

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
				return	navigation('/login')
				}
			});
        } else {
            const {
				_id,
				name,
				instructorName,
				instructorEmail,
				availableSeats,
				price
            } = singleClass;
            
            const classToCart = { classId: _id, name, instructorEmail, instructorName, availableSeats,price, studentEmail: user?.email }
            
            axios
				.post(`http://localhost:5000/class-add-to-cart`, classToCart)
				.then(res => {
                    if (res.data.message === 'already added') {
                        alert('this class already added to cart')
                    }
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
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{approvedClasses.map(singleClass => (
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

export default Classes;