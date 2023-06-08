import ClassesCard from "../../../Components/ClassesCard/ClassesCard";
import DashboardContainer from "../../../Components/DashboardContainer/DashboardContainer";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClass from "../../../hooks/useClass";

const ManageClasses = () => {
    const { classes, isLoading, refetch } = useClass();
    
	// TODO: disable btn after click approve or deny
    
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
							isAdmin={true}
						/>
					))}
				</div>
			</DashboardContainer>
		</div>
	);
};

export default ManageClasses;