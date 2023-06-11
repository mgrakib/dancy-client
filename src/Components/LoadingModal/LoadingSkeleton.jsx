/** @format */

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({ cards }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-2'>
			{Array(cards)
				.fill(0)
				.map((item, i) => (
					<div
						className='p-2 border rounded-md'
						key={i}
					>
						<SkeletonTheme
							baseColor='#313131'
							highlightColor='#525252'
						>
							<div className=''>
								<div className='mb-5'>
									<Skeleton
										width={"100%"}
										height={200}
									/>
								</div>

								<div>
									<Skeleton
										width={"30%"}
										height={20}
									/>
									<div className=' grid grid-cols-2 gap-x-5'>
										<Skeleton
											width={"100%"}
											height={10}
											className='inline-block'
										/>
										<Skeleton
											width={"100%"}
											height={10}
										/>
									</div>
									<div className=' grid grid-cols-2 gap-5'>
										<Skeleton
											width={"100%"}
											height={10}
											className='inline-block'
										/>
										<Skeleton
											width={"100%"}
											height={10}
										/>
									</div>
									<div className=' grid grid-cols-2 gap-5'>
										<Skeleton
											width={"100%"}
											height={10}
											className='inline-block'
										/>
										<Skeleton
											width={"100%"}
											height={10}
										/>
									</div>
								</div>
							</div>
						</SkeletonTheme>
					</div>
				))}
		</div>
	);
};

export default LoadingSkeleton;
