import { useQuery } from "react-query";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import './PopularClass.css'
import axios from "axios";
import Card from "../Card/Card";
import useClass from "../../hooks/useClass";
import useApprovedCasses from "../../hooks/useApprovedCasses";
import { useState } from "react";
const PopularClass = () => {

	const [dataLimite, setDataLimite] = useState(6)
	const [sortData, setSortData] = useState(-1)
	let { approvedClasses, refetch,  isLoading } = useApprovedCasses(dataLimite, sortData);

	// if (approvedClasses.length > 6) {
	// 	approvedClasses = approvedClasses.slice(0, 6)
	// }
	// approvedClasses.sort((a, b) => b.totalStudent - a.totalStudent);

	const handelSortDataChange = e => {
		setSortData(e.target.value);
		refetch();
	}
	const handelDataLimiteChange = e => {
		setDataLimite(e.target.value);
		refetch();
	};

    return (
		<div className=''>
			<Container>
				<SectionTitle
					title={"CHOOSE YOUR DANCE STYLE"}
					subTitle={"OUR POPULAR CLASS"}
					isCenter={true}
				/>

				
				<div className='flex items-center justify-between md:justify-start gap-3'>
					<div>
						<select
							onChange={handelSortDataChange}
							name=''
							id=''
							className='outline-none border-2 rounded-md border-secondary-color mb-4 md:mb-8 py-2 px-1 hover:shadow-md'
						>
							<option value='-1'>Sort</option>
							<option value='-1'>Ascending</option>
							<option value='1'>Descending</option>
						</select>
					</div>
					<div>
						<select
							onChange={handelDataLimiteChange}
							name=''
							id=''
							className='outline-none border-2 rounded-md border-secondary-color mb-4 md:mb-8 py-2 px-1 hover:shadow-md'
						>
							<option value='6'>Data Limite</option>
							<option value='2'>2</option>
							<option value='4'>4</option>
							<option value='6'>6</option>
							<option value='8'>8</option>
							<option value='10'>10</option>
						</select>
					</div>
				</div>

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