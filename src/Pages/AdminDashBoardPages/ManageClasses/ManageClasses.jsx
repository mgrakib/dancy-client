import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClass from "../../../hooks/useClass";

const ManageClasses = () => {
    const { classes, isLoading, refetch } = useClass();
    
    console.log(isLoading, classes);
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
		<div>
			<DashboardContainer>
				<div className='py-4 md:py-16'>
					<SectionTitle
						title={"All Class"}
						isCenter={true}
					/>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{classes.map(singleClass => (
						<ClassesCard
							key={singleClass?._id}
							singleClass={singleClass}
						/>
					))}
				</div>
			</DashboardContainer>
		</div>
	);
};

export default ManageClasses;