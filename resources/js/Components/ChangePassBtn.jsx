import { Link } from "@inertiajs/react";

function ChangePassBtn() {
    return (
        <Link href=""
            className="btn rounded-xl font-medium text-lime-50 border-lime-50 border-2 text-lg px-5 py-2 hover:bg-lime-50 hover:text-teal-800 transition"
        >
            Change Password
        </Link>
    );
}

export default ChangePassBtn