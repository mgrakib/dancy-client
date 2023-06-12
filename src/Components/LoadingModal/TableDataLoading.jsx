/** @format */

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const TableDataLoading = ({ cards }) => {
	return (
		<div className='mt-20 px-5'>
			<div className="w-1/2 mx-auto mb-5">
				<SkeletonTheme
					baseColor='#b8b8b8'
					highlightColor='#d3d3d3'
				>
					<p>
						<Skeleton height={35} />
					</p>
				</SkeletonTheme>
			</div>

			<SkeletonTheme
				baseColor='#b8b8b8'
				highlightColor='#d3d3d3'
			>
				<p>
					<Skeleton height={35} />
				</p>
			</SkeletonTheme>

			{Array(cards)
				.fill(0)
				.map((item, i) => (
					<SkeletonTheme
						baseColor='#c8cacb'
						highlightColor='#e3e3e3'
						key={i}
					>
						<p>
							<Skeleton height={25} />
						</p>
					</SkeletonTheme>
				))}
		</div>
	);
};

export default TableDataLoading;
