import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";

const MyEnrolledClass = () => {
	const { myEnrolledClasses, isLoading, refetch } = useEnrolledClasses();
	
	console.log(myEnrolledClasses);
    return (
		<div className='w-full'>
			<DashboardContainer>
				<div>
					<SectionTitle
						title={"My Enrolled Classes"}
						isCenter={true}
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{myEnrolledClasses.map(singleClass => (
						<ClassesCard
							key={singleClass._id}
							singleClass={singleClass}
							
							
						/>
					))}
				</div>
			</DashboardContainer>
		</div>
	);
};

export default MyEnrolledClass;