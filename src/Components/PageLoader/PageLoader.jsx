import { HashLoader } from "react-spinners";

const PageLoader = () => {
    return (
		<div className='w-full h-full flex items-center justify-between'>
			<HashLoader
				color='#DE4139'
				className='mx-auto'
			/>
		</div>
	);
};

export default PageLoader;