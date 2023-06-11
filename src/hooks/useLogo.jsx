import { useState } from "react";

const useLogo = () => {
    const [isDarkLogo, setIsDarkLogo] = useState(false);


    return {isDarkLogo, setIsDarkLogo}
};

export default useLogo;