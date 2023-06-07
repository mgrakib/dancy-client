/** @format */

import { FaArrowRight } from "react-icons/fa";

const RightArrow = () => {
	return (
		<div className='py-2 '>
			<div className='w-[30px] h-[30px] flex items-center justify-center bg-secondary-color text-primary-color rounded-full ms-auto cursor-pointer'>
				<FaArrowRight />
			</div>
		</div>
	);
};

export default RightArrow;
