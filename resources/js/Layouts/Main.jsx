import { useState } from "react";
import { usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/OpenSidebar.jsx";

function Main({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="absolute">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            <div className="pl-32">
                {children}
            </div>
        </>
    );
}

export default Main;