import { useQuery } from "react-query";
import Container from "../../Components/Container/Container";
import axios from "axios";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";

const Classes = () => {
    const {data: classes =[], isLoading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const result = await axios(
                `http://localhost:5000/approverd-classes`
            );
            
            return result.data;
        }
    })
    return (
		<div className="pt-4 md:pt-16">
			<Container>
				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
					{classes.map(singleClass => (
						<ClassesCard
							key={singleClass._id}
                            singleClass={singleClass}
                            user={true}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Classes;