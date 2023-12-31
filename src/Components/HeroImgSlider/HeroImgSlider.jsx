/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './HeroImgSlider.css'

import {Autoplay,  Pagination } from "swiper";

import sliderImg1 from '../../assets/HeroImg/heroImg1.jpg'
import sliderImg2 from '../../assets/HeroImg/heroImg2.jpg'
import sliderImg3 from '../../assets/HeroImg/heroImg3.jpg'
import sliderImg4 from '../../assets/HeroImg/heroImg4.jpg'
import sliderImg5 from '../../assets/HeroImg/heroImg5.jpg'
import sliderImg6 from '../../assets/HeroImg/heroImg6.jpg'

const HeroImgSlider = () => {
    return (
		<div className='py-4 md:py-16 -z-10 dark:bg-dark-primary-colro  overflow-hidden'>
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay]}
				className='mySwiper'
			>
				<SwiperSlide>
					<div>
						<img
							src={sliderImg1}
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={sliderImg2}
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={sliderImg3}
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={sliderImg4}
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={sliderImg5}
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img
							src={sliderImg6}
							alt=''
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default HeroImgSlider;
