import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClass from "../../../hooks/useClass";

const ManageClasses = () => {
    const { classes, isLoading, refetch } = useClass();
    
    
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
		<div>
			<DashboardContainer>
				
					<SectionTitle
						title={"All Class"}
						isCenter={true}
					/>
				
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{classes.map(singleClass => (
						<ClassesCard
							key={singleClass?._id}
							singleClass={singleClass}
							refetch={refetch}
						/>
					))}
				</div>
			</DashboardContainer>
		</div>
	);
};

export default ManageClasses;