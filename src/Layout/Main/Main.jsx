import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Share/NavBar/NavBar";
import Footer from "../../Components/Share/Footer/Footer";

const Main = () => (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
);

export default Main;