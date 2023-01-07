import { useEffect, useState } from "react";

const UseGetWindowsSize = () => {


    const [windowsSize, setWindowsSize] = useState(0)

    const handleResize = () => {
        if (typeof window !== "undefined") setWindowsSize(window?.innerWidth)
        else setWindowsSize(0)
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {

        if (windowsSize === 0) setWindowsSize(window?.innerWidth)

    }, [typeof window !== "undefined"])


    return windowsSize
}
export default UseGetWindowsSize;