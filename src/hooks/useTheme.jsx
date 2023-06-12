import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setThem] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    
    useEffect(() => {
		console.log(theme);

		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
    }, [theme]);
    
    return [theme, setThem]
};

export default useTheme;