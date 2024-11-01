import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/OpenSidebar.jsx";
import Navbar from "@/Components/Navbar";

function Main({ navbarMsg, children, isSettings=false }) {

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
        <div className="flex w-screen">
            
            <div className="w-auto z-20 border-2 border-red-600 border-dashed">
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            <div className="flex flex-col flex-grow">
                <div className={`w-full z-10 border-2 border-red-600 border-dashed ${isSettings ? "hidden" : ""}`}>
                    <Navbar text={navbarMsg} />
                </div>
                <div className="w-full p-6 z-0 border-2 border-red-600 border-dashed text-white">
                    <div 
                        className="rounded-lg p-3"
                        style={{
                            backgroundColor: "rgba(26, 66, 87, 0.28)"
                        }}
                    >
                       {children}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;