

import HeroImage from "../../Components/HeroImage/HeroImage";
import HeroImgSlider from "../../Components/HeroImgSlider/HeroImgSlider";
import DanceGallery from "../../Components/DanceGallery/DanceGallery";
import PopularClass from "../../Components/PopularClass/PopularClass";

const Home = () => {
    return (
		<div>
			<HeroImgSlider />
			<HeroImage />
			<PopularClass />
			<DanceGallery />
		</div>
	);
};

export default Home;



