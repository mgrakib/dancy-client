import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Share/NavBar/NavBar";

const Main = () => (
    <div>
        <NavBar />
        <Outlet />
    </div>
);

export default Main;