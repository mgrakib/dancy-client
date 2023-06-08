
const Button = ({ label, bgColor, isUser, availableSeats, isDisable }) => {
	
	return (
		<button
			disabled={isDisable}
			className={`py-2 px-5 ${bgColor} text-primary-color rounded-md`}
		>
			{label}
		</button>
	);
};

export default Button;