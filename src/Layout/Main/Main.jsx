import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Share/NavBar/NavBar";
import Footer from "../../Components/Share/Footer/Footer";

const Main = () => (
	<div>
		<div className='z-50 fixed w-full top-0 left-0'>
			<NavBar />
		</div>
		<div className="mt-[40px] md:mt-[55px]">
			<Outlet />
		</div>
		<Footer />
	</div>
);

export default Main;