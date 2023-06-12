import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import DashboardPageLoading from "../Components/LoadingModal/DashboardPageLoading";

const InstructorRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, isLoading } = useRole();
    const location = useLocation();
    
    if(loading || isLoading){
        return <DashboardPageLoading />
    }

    if (user && role === 'instractor') {
        return children
    }

    return <Navigate to={'/'} state={{from: location}} replace/>;
};

export default InstructorRouter;