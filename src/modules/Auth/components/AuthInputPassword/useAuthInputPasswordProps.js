import { useState } from "react";

export const useAuthInputPasswordProps = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    
    return { 
        show,
        handleClick 
    }
}