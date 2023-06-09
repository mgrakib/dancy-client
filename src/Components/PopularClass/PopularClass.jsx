import { useQuery } from "react-query";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import './PopularClass.css'
import axios from "axios";
import Card from "../Card/Card";
import useClass from "../../hooks/useClass";
import useApprovedCasses from "../../hooks/useApprovedCasses";
const PopularClass = () => {
	
	let { approvedClasses } = useApprovedCasses(2, 1);

	// if (approvedClasses.length > 6) {
	// 	approvedClasses = approvedClasses.slice(0, 6)
	// }
	// approvedClasses.sort((a, b) => b.totalStudent - a.totalStudent);


    return (
		<div className=''>
			<Container>
				<SectionTitle
					title={"CHOOSE YOUR DANCE STYLE"}
					subTitle={"OUR POPULAR CLASS"}
					isCenter={true}
				/>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
					{approvedClasses.map(singleClass => (
						<Card
							key={singleClass._id}
							singleClass={singleClass}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default PopularClass;