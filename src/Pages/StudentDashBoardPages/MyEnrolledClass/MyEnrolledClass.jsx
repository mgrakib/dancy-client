import { GrFormAdd } from "react-icons/gr";
import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import { Link } from "react-router-dom";

const MyEnrolledClass = () => {
	const { myEnrolledClasses, isLoading, refetch } = useEnrolledClasses();
	
    return (
		<div className='w-full'>
			<DashboardContainer>
				<div>
					<SectionTitle
						title={"My Enrolled Classes"}
						isCenter={true}
					/>
				</div>

				{myEnrolledClasses.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
						{myEnrolledClasses.map(singleClass => (
							<ClassesCard
								key={singleClass._id}
								singleClass={singleClass}
							/>
						))}
					</div>
				) : (
					<div className='w-full text-center pt-5 rounded-md bg-red-50'>
						<h2 className='text-3xl  '>No Class avaiable</h2>

						<div className='py-4'>
							<Link to={"/classes"}>
								<button className='hover:bg-gray-200  flex items-center gap-2 mx-auto p-2  rounded-md'>
									add class <GrFormAdd />
								</button>
							</Link>
						</div>
					</div>
				)}
			</DashboardContainer>
		</div>
	);
};

export default MyEnrolledClass;