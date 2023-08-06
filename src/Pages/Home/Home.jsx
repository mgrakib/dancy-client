

import HeroImage from "../../Components/HeroImage/HeroImage";
import HeroImgSlider from "../../Components/HeroImgSlider/HeroImgSlider";
import DanceGallery from "../../Components/DanceGallery/DanceGallery";
import PopularClass from "../../Components/PopularClass/PopularClass";
import PopularInstractor from "../../Components/PopularInstractor/PopularInstractor";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BecomeMember from "../../Components/BecomeMember/BecomeMember";
import ClientSay from "../../Components/ClientSay/ClientSay";
import OurExperiance from "../../Components/OurExperiance/OurExperiance";

const Home = () => {
	const location = useLocation();
    return (
		<div>
			<Helmet>
				<title>Home - Dancy</title>
			</Helmet>

			<HeroImgSlider />
			<HeroImage />
			<PopularClass />
			<PopularInstractor />
			<DanceGallery />
			<OurExperiance />
			<BecomeMember />
			<ClientSay />
		</div>
	);
};

export default Home;



