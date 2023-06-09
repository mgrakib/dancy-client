import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import PageLoader from "../../../Components/PageLoader/PageLoader";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useInstructorClass from "../../../hooks/useInstructorClass";
import { GrFormAdd } from "react-icons/gr";

const MyClasses = () => {
    const {user, loading} = useAuth()

    const { instructorCalsses, isLoading } = useInstructorClass();
    
    if (loading || isLoading) {
		return <PageLoader />;
	}
   

    return (
		<div className='w-full '>
			<DashboardContainer>
				<div>
					<SectionTitle
						title={"My Classes"}
						isCenter={true}
					/>
				</div>

				{instructorCalsses.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
						{instructorCalsses.map(singleClass => (
							<ClassesCard
								key={singleClass._id}
								singleClass={singleClass}
								isInstructor={true}
							/>
						))}
					</div>
				) : (
					<div className='w-full text-center pt-5 rounded-md bg-red-50'>
						<h2 className='text-3xl  '>No Class avaiable</h2>

						<div className='py-4'>
							<button className='hover:bg-gray-200  flex items-center gap-2 mx-auto p-2  rounded-md'>
								add class <GrFormAdd />
							</button>
						</div>
					</div>
				)}
			</DashboardContainer>
		</div>
	);
};

export default MyClasses;