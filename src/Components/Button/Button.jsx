
const Button = ({label, bgColor}) => {
    return (
        <button className={`py-2 px-5 bg-secondary-color text-primary-color rounded-md`}>
            {label}
        </button>
    );
};

export default Button;