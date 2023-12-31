
const SectionTitle = ({title, subTitle, details, isCenter}) => {
    return (
		<div
			className={`py-4 md:py-16 w-full md:w-1/2 mx-auto ${
				isCenter && "text-center"
			}`}
		>
			<div
				data-aos='fade-left'
				data-aos-duration='1000'
			>
				<h4 className='text-secondary-color dark:text-dark-common-color font-bold uppercase'>
					{subTitle}
				</h4>
			</div>

			<div
				data-aos='fade-right'
				data-aos-duration='1000'
			>
				<h2 className='text-common-color dark:text-dark-secondary-colro text-3xl font-bold uppercase'>
					{title}
				</h2>
			</div>
			<div
				data-aos='fade-left'
				data-aos-duration='1000'
			>
				<p className='text-gray-color'>{details}</p>
			</div>
		</div>
	);
};

export default SectionTitle;
