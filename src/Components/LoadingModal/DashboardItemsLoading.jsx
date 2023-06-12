import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardItemsLoading = ({ card }) => {
    return (
		<div>
			{Array(card)
				.fill(0)
				.map((item, i) => (
                    <SkeletonTheme
                        key={i}
						baseColor='#202020'
						highlightColor='#444'
					>
						<p>
							<Skeleton height={40} />
						</p>
					</SkeletonTheme>
				))}
		</div>
	);
};

export default DashboardItemsLoading;