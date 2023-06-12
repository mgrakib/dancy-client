import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import InstractorCard from "../../Components/PopularInstractor/InstractorCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useInstracture from "../../hooks/useInstracture";

const Instructors = () => {
    const { instractors} = useInstracture();
    return (
		<div className="dark:bg-dark-primary-colro">

			<Helmet>
				<title>Instructors - Dancy</title>
			</Helmet>

			<Container>
				<div>
					<SectionTitle
						title={"Our Instructors"}
						isCenter={true}
						subTitle={"BRIGHT YOUR FUTURE WITH"}
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2 '>
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

export default Instructors;