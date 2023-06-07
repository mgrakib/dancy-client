import './Card.css'

import second from '../../assets/danch/danch1.jpg'
import RightArrow from '../Arrow/RightArrow';




const Card = () => {
    return (
		<div className='group overflow-hidden rounded-sm flex flex-col shadow-md class-container'>
			<div>
				<img
					src={second}
					alt=''
				/>
			</div>
			<div className='p-2'>
				<h2 className='text-2xl classTitle relative duration-500 left-2 inline-block py-2'>
					Ballet Dance Class
				</h2>
				<p className='pb-2'>
					We denounce with righteous indignation and dislike mens
					beguiled...
                </p>
                
                <RightArrow />
				
			</div>
		</div>
	);
};

export default Card;