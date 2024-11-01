import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/OpenSidebar.jsx";
import Navbar from "@/Components/Navbar";

function Main({ navbarMsg, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { auth } = usePage().props;

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--fallback-b1', '#07131E');
        document.body.style.backgroundColor = "#07131E";
        console.log('useeffect rendered');
        return () => {
            document.documentElement.style.removeProperty('--fallback-b1');
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <>
            <div className="absolute z-20">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            <div className="absolute z-10">
                <Navbar text={navbarMsg} />
            </div>
            <div className="pl-32 z-0">
                {children}
            </div>
        </>
    );
}

export default Main;