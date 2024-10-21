import { useState } from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar/OpenSidebar.jsx";

function Welcome() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex gap-8 bg-slate-900">
            <Head title="Welcome" />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {/* Your main content goes here */}
        </div>
    );
}

export default Welcome;