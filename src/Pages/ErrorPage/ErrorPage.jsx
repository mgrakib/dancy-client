
import Lottie from "react-lottie";
import errorPage from '../../../public/error-404.json'
import Container from "../../Components/Container/Container";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: errorPage,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
    return (
		<div>
			<Container>
				<Lottie
					options={defaultOptions}
					height={"80vh"}
					width={400}
				/>

				<div className='text-center'>
					<Link to={"/"}>
						<button className='py-3 px-10 bg-[#1A2E35] hover:bg-[#272145] rounded-md text-white'>
							Home Page
						</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default ErrorPage;