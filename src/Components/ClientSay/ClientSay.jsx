import Container from "../Container/Container";
import image from "../../assets/client.jpg";
import partan from "../../assets/line-pattern.png";
import SectionTitle from "../SectionTitle/SectionTitle";
const ClientSay = () => {
    return (
		<div className='dark:bg-dark-primary-colro py-10'>
			<Container>
				<div className='grid md:grid-cols-2'>
					<div className='col-span-1 rounded-lg overflow-hidden'>
						<img
							src={image}
							alt=''
						/>
					</div>
					<div className='col-span-1  relative'>
						<div className='absolute w-[30%] right-0'>
							<img
								src={partan}
								alt=''
							/>
						</div>
						<div className='bg-white py-7 px-5 rounded-lg relative w-full  top-1/2 -translate-y-1/2 md:-left-8 z-[1] text-center flex flex-col gap-2'>
							<p className='text-[#E83347] font-bold'>
								TESTIMONIAL
							</p>
							<h3 className='text-2xl md:text-4xl font-bold'>
								WHAT OUR CLIENT SAY
							</h3>
							<p className='text-[#838383]'>
								“Ballet dance is awesome! I use ballet dance
								often. Keep up the excellent work. It really
								saves me time and effort. I will recommend you
								to my colleagues today!!”
							</p>

							<p className='text-xl font-bold'>
								Magdalena - Georgia
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ClientSay;