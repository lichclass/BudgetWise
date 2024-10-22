import { Link } from "@inertiajs/react";

function GetStartBtnCont({ to }) {
    
    return <Link 
                href={to}
                className="text-lg font-bold text-teal-800 border-teal-800 border-2 py-4 px-16 rounded-full hover:bg-teal-800 hover:text-lime-50 transition"
            >
                Back
            </Link>;
}

export default GetStartBtnCont;
