import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardPageLoading = () => {
    return (
		<div className='h-[100vh]'>
			<SkeletonTheme
				baseColor='#E5E5E5'
				highlightColor='#c1c1c1'
			>
				<Skeleton height={"100%"} />;
			</SkeletonTheme>
		</div>
	);
};

export default DashboardPageLoading;