import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

const BecomeMember = () => {
    return (
		<div className='dark:bg-dark-primary-colro  overflow-hidden'>
			<SectionTitle
				isCenter={true}
				title={"BECOME MEMBER OF FLAIRE"}
				subTitle={"CHOOSE YOUR PLAN"}
				details={
					"It's Time to show your tallent to all the people of the World"
				}
			/>

			<div className='mt-5 '>
				<Container>
					<div className='grid md:grid-cols-3 gap-5'>
						<div className=' p-10 rounded-lg text-black dark:text-white'>
							<p className='text-xl font-semibold'>
								HIP HOP DANCE
							</p>
							<div className='flex items-end py-3'>
								<h2 className='text-4xl font-bold '>$250</h2>
								<span className='ml-1 text-xl'>/ month</span>
							</div>

							<div className='mt-5'>
								<ul className='flex flex-col divide-y divide-gray-200'>
									<li className='py-5 text-xl'>
										12 Hour Session{" "}
									</li>
									<li className='py-5 text-xl'>
										Offline & Online Classes
									</li>
									<li className='py-5 text-xl'>
										Individual Prices
									</li>
									<li className='py-5 text-xl'>
										No Joining Fee
									</li>
								</ul>
							</div>

							<div>
								<button className='w-full border border-[#e5172e] py-3 text-[#e5172e] font-bold rounded-md hover:bg-[#E5172E] hover:text-white duration-300'>
									PURCHASE NOW
								</button>
							</div>
						</div>
						<div className='bg-[#E5172E] p-10 rounded-lg text-white'>
							<div className='flex  items-center justify-between'>
								<p className='text-xl font-semibold  '>
									K-POP DANCE
								</p>
								<div className='bg-black px-5 py-2 rounded-2xl'>
									POPULAR
								</div>
							</div>
							<div className='flex items-end py-3'>
								<h2 className='text-4xl font-bold '>$750</h2>
								<span className='ml-1 text-xl'>/ month</span>
							</div>

							<div className='mt-5'>
								<ul className='flex flex-col divide-y divide-gray-200'>
									<li className='py-5 text-xl'>
										12 Hour Session{" "}
									</li>
									<li className='py-5 text-xl'>
										Offline & Online Classes
									</li>
									<li className='py-5 text-xl'>
										Individual Prices
									</li>
									<li className='py-5 text-xl'>
										No Joining Fee
									</li>
								</ul>
							</div>

							<div>
								<button className='w-full border border-[#e5172e] hover:border-white py-3 text-[#e5172e] font-bold rounded-md bg-white hover:bg-[#E5172E] hover:text-white duration-300'>
									PURCHASE NOW
								</button>
							</div>
						</div>
						<div className=' p-10 rounded-lg text-black dark:text-white'>
							<p className='text-xl font-semibold'>
								MODERN DANCE
							</p>
							<div className='flex items-end py-3'>
								<h2 className='text-4xl font-bold '>$750</h2>
								<span className='ml-1 text-xl'>/ month</span>
							</div>

							<div className='mt-5'>
								<ul className='flex flex-col divide-y divide-gray-200'>
									<li className='py-5 text-xl'>
										12 Hour Session{" "}
									</li>
									<li className='py-5 text-xl'>
										Offline & Online Classes
									</li>
									<li className='py-5 text-xl'>
										Individual Prices
									</li>
									<li className='py-5 text-xl'>
										No Joining Fee
									</li>
								</ul>
							</div>

							<div>
								<button className='w-full border border-[#e5172e] py-3 text-[#e5172e] font-bold rounded-md bg-white hover:bg-[#E5172E] hover:text-white duration-300'>
									PURCHASE NOW
								</button>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default BecomeMember;