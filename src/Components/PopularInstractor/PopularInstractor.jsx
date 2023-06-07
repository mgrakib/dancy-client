
import { useQuery } from 'react-query';
import './PopularInstractor.css'
import axios from 'axios';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';
import InstractorCard from './InstractorCard';

const PopularInstractor = () => {
    const {data: instractors = [], refetch } = useQuery({
        queryKey: ['instractor'],
        queryFn: async () => {
            const reslut = await axios("http://localhost:5000/instructor")
            return reslut.data;
        }
    })

    return (
		<div>
			<Container>
				<div className='mt-4 md:py-16'>
					<SectionTitle
						title={"Learn to swing your hips with them"}
						subTitle={"OUR POPULAR Instractors"}
						isCenter={true}
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					{instractors.map(instractor => (
						<InstractorCard key={instractor._id} />
					))}
				</div>
			</Container>
		</div>
	);
};

export default PopularInstractor;