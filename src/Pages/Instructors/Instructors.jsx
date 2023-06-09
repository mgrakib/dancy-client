import Container from "../../Components/Container/Container";
import InstractorCard from "../../Components/PopularInstractor/InstractorCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useInstracture from "../../hooks/useInstracture";

const Instructors = () => {
    const { instractors} = useInstracture();
    return (
		<div>
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