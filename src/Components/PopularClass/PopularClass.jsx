import { useQuery } from "react-query";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import './PopularClass.css'
import axios from "axios";
import Card from "../Card/Card";
const PopularClass = () => {
	const {data: classes =[], refetch, isLoading } = useQuery({
		queryKey: ['classes'],
		queryFn: async () => {
			const result = await axios("http://localhost:5000/classes");
			return result.data
		}
	})

	
    return (
		<div className=''>
			<Container>
				<div className='mt-4 md:py-16'>
					<SectionTitle
						title={"CHOOSE YOUR DANCE STYLE"}
						subTitle={"OUR POPULAR CLASS"}
						isCenter={true}
					/>
				</div>

				<div className='flex items-center justify-center'>
					{classes.map(singleClass => (
						<Card key={singleClass._id} />
					))}
				</div>
			</Container>
		</div>
	);
};

export default PopularClass;