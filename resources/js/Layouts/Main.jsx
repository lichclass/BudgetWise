import { useState } from "react";
import { usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/OpenSidebar.jsx";
import Navbar from "@/Components/Navbar";

function Main({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { auth } = usePage().props;

    console.log(auth);

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
            <div className="absolute z-20">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            <div className="absolute z-10">
                <Navbar text={`Welcome Back, ${auth.user.username}`} />
            </div>
            <div className="pl-32 z-0">
                {children}
            </div>
        </>
    );
}

export default Main;