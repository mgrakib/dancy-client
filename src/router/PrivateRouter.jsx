import { Navigate, useLocation } from "react-router-dom";
import PageLoader from "../Components/PageLoader/PageLoader";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    if (loading) {
        return <div className="w-full h-[50vh]">
            <PageLoader />
        </div>
    }

    if (user) {
        return children
    }
     return (
			<Navigate
				to='/login'
				state={{ from: location }}
				replace
			></Navigate>
		);
};

export default PrivateRouter;