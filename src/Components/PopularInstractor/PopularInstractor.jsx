
import { useQuery } from 'react-query';
import './PopularInstractor.css'
import axios from 'axios';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';
import InstractorCard from './InstractorCard';
import useInstracture from '../../hooks/useInstracture';
import { useState } from 'react';

const PopularInstractor = () => {
	
	// TODO : change value second time
	const [dataLimite, setDataLimite] = useState(6);
	const [sortData, setSortData] = useState(-1);
	let { instractors, refetch, isLoading } = useInstracture(
		dataLimite,
		sortData
	);

	const handelSortDataChange = e => {
		setSortData(e.target.value);
		console.log(sortData);
		refetch();
	};

	const handelDataLimiteChange = e => {
		setDataLimite(e.target.value);
		console.log(e.target.value);
		refetch();
	};

	return (
		<div>
			<Container>
				<SectionTitle
					title={"Learn to swing your hips with them"}
					subTitle={"OUR POPULAR Instractors"}
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
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					{instractors.map(instractor => (
						<InstractorCard
							key={instractor._id}
							instractor={instractor}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default PopularInstractor;