import { Link } from "@inertiajs/react";

function GetStartBtnCont({ to }) {
    
    return <Link 
                href={to}
                className="text-lg font-bold text-lime-50 border-teal-800 bg-teal-800 border-2 py-4 px-12 rounded-full"
            >
                Continue
            </Link>;
}

export default GetStartBtnCont;
