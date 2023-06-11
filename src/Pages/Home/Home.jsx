

import HeroImage from "../../Components/HeroImage/HeroImage";
import HeroImgSlider from "../../Components/HeroImgSlider/HeroImgSlider";
import DanceGallery from "../../Components/DanceGallery/DanceGallery";
import PopularClass from "../../Components/PopularClass/PopularClass";
import PopularInstractor from "../../Components/PopularInstractor/PopularInstractor";
import { useLocation } from "react-router-dom";

const Home = () => {
	const location = useLocation();
    return (
		<div>
			{/* <HeroImgSlider /> */}
			<HeroImage />
			<PopularClass />
			<PopularInstractor />
			<DanceGallery />
		</div>
	);
};

export default Home;



