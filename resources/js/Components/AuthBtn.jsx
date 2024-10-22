import { Link } from "@inertiajs/react";

function AuthBtn({ state, text, to }) {
    const active =
        "text-slate-900 text-md font-medium bg-lime-50 border-lime-50 border-2 py-3 px-14 rounded-full flex-shrink-0";
    const inactive =
        "text-lime-50 text-md font-medium bg-transparent border-lime-50 border-2 py-3 px-14 rounded-full flex-shrink-0 hover:bg-lime-50 hover:text-slate-900 transition";

    const stateBtn = state === "active" ? active : inactive;
    
    return <Link 
                href={to}
                className={stateBtn}
            >
                {text}
            </Link>;
}

export default AuthBtn;
