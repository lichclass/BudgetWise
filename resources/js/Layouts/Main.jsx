import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/OpenSidebar.jsx";
import Navbar from "@/Components/Navbar";

function Main({ navbarMsg, children, isSettings=false, isAdmin=false }) {

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
        return () => {
            document.documentElement.style.removeProperty('--fallback-b1');
            document.body.style.backgroundColor = "";
            document.body.style.backgroundImage = ""; // Reset the background image
        };
    }, []);


    return (
        <div className="flex w-screen h-screen"> 
            <div className="w-auto z-20">
                <Sidebar
                    isOpen={isOpen}
                    toggleSidebar={toggleSidebar}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    isAdmin={isAdmin}
                />
            </div>
            <div className="flex flex-col flex-grow"> 
                <div className={`w-full z-10 ${isSettings ? "hidden" : ""}`}>
                    <Navbar text={navbarMsg} />
                </div>
                <div className="p-6 z-0 text-white h-full overflow-y-auto flex-grow">
                    <div className="rounded-lg py-8 px-12 h-full bg-[rgba(26,66,87,0.28)]">
                            {children}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Main;