/** @format */

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardLoading = () => {
	return (
		<div className='grid grid-cols-[2fr,10fr] gap-2'>
			<div className='h-[100vh]'>
				<SkeletonTheme
					baseColor='#E5E5E5'
					highlightColor='#c1c1c1'
				>
					<Skeleton height={"100%"} />;
				</SkeletonTheme>
			</div>
			<div>
				<SkeletonTheme
					baseColor='#E5E5E5'
					highlightColor='#c1c1c1'
				>
					<Skeleton height={"100%"} />;
				</SkeletonTheme>
			</div>
		</div>
	);
};

export default DashboardLoading;
