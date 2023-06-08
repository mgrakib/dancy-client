import { useQuery } from "react-query";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import './PopularClass.css'
import axios from "axios";
import Card from "../Card/Card";
import useClass from "../../hooks/useClass";
const PopularClass = () => {
	
	const {classes} = useClass()
	
    return (
		<div className=''>
			<Container>
				
					<SectionTitle
						title={"CHOOSE YOUR DANCE STYLE"}
						subTitle={"OUR POPULAR CLASS"}
						isCenter={true}
					/>
			

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