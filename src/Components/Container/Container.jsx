const Container = ({children}) => {
    return (
        <div className="md:px-[100px] py-2 h-full">
            {children}
        </div>
    );
};

export default Container;