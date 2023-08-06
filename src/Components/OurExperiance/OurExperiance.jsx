
import AnimatedNumbers from "react-animated-numbers";
import Container from "../Container/Container";
const OurExperiance = () => {
    return (
		<div className='dark:bg-dark-primary-colro overflow-hidden  py-4 md:py-16'>
			<Container>
				<div className='flex items-center justify-between flex-wrap'>
					<div className='flex items-center gap-2 md:gap-3 w-1/2 md:w-1/4'>
						<h4 className='text-black dark:text-white w-1/4 flex items-center gap-1 text-2xl'>
							<AnimatedNumbers
								animateToNumber={10}
								fontStyle={{ fontSize: 22 }}
								configs={[
									{ mass: 1, tension: 220, friction: 100 },
									{ mass: 1, tension: 180, friction: 130 },
									{ mass: 1, tension: 280, friction: 90 },
									{ mass: 1, tension: 180, friction: 135 },
									{ mass: 1, tension: 260, friction: 100 },
									{ mass: 1, tension: 210, friction: 180 },
								]}
							></AnimatedNumbers>{" "}
							K+
						</h4>
						<h6 className='flex-1 text-black dark:text-white'>
							Sucess Students
						</h6>
					</div>
					<div className='flex items-center gap-2 md:gap-3 w-1/2  md:w-1/4'>
						<h4 className='text-black dark:text-white w-1/4'>
							<AnimatedNumbers
								includeComma
								animateToNumber={600}
								fontStyle={{ fontSize: 22 }}
								configs={[
									{ mass: 1, tension: 220, friction: 100 },
									{ mass: 1, tension: 180, friction: 130 },
									{ mass: 1, tension: 280, friction: 90 },
									{ mass: 1, tension: 180, friction: 135 },
									{ mass: 1, tension: 260, friction: 100 },
									{ mass: 1, tension: 210, friction: 180 },
								]}
							></AnimatedNumbers>
						</h4>
						<h6 className='flex-1 text-black dark:text-white'>
							Live Performance
						</h6>
					</div>
					<div className='flex items-center gap-2 md:gap-3 w-1/2  md:w-1/4'>
						<h4 className='text-black dark:text-white w-1/4'>
							<AnimatedNumbers
								includeComma
								animateToNumber={15}
								fontStyle={{ fontSize: 22 }}
								configs={[
									{ mass: 1, tension: 220, friction: 100 },
									{ mass: 1, tension: 180, friction: 130 },
									{ mass: 1, tension: 280, friction: 90 },
									{ mass: 1, tension: 180, friction: 135 },
									{ mass: 1, tension: 260, friction: 100 },
									{ mass: 1, tension: 210, friction: 180 },
								]}
							></AnimatedNumbers>
						</h4>
						<h6 className='flex-1 text-black dark:text-white'>
							Years Of Experiences
						</h6>
					</div>
					<div className='flex items-center gap-2 md:gap-3 w-1/2  md:w-1/4'>
						<h4 className='text-black dark:text-white w-1/4 flex items-center gap-1'>
							<AnimatedNumbers
								animateToNumber={50}
								fontStyle={{ fontSize: 22 }}
								configs={(number, index) => {
									return {
										mass: 1,
										tension: 230 * (index + 1),
										friction: 140,
									};
								}}
							></AnimatedNumbers>{" "}
							+
						</h4>
						<h6 className='flex-1 text-black dark:text-white'>
							Certified Instructors
						</h6>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default OurExperiance;