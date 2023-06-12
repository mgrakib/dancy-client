import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import DashboardPageLoading from "../Components/LoadingModal/DashboardPageLoading";

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, isLoading } = useRole();
    const location = useLocation();
    
    
    if (loading || isLoading) {
        return <DashboardPageLoading />
    }
    if (user && role === 'admin') {
        return children;
    }
    
    return (<Navigate to={'/'} state={{from: location}} relative="" />);
};

export default AdminRouter;