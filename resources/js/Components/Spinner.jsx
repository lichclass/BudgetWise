import { useEffect } from 'react';
import budgetwiseLogo from "../../../public/build/assets/Sidebar_ClosedIcon.svg";

function Spinner() {

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
            <div className="flex flex-col space-y-6 items-center justify-center h-dvh w-full">
                <img src={budgetwiseLogo} alt="Budget Icon" className="w-20 h-20 animate-spin" />
                <h1 className="text-slate-500 text-2xl font-bold">Loading Please wait...</h1>
            </div>
    );
}

export default Spinner;