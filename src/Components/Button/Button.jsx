
const Button = ({ label, bgColor, isUser, availableSeats }) => {
	console.log(bgColor);
	return (
		<button
			className={`py-2 px-5 ${bgColor} text-primary-color rounded-md`}
		>
			{label}
		</button>
	);
};

export default Button;