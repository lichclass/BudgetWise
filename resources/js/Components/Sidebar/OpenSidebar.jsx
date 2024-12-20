import styles from "../../../css/SidebarStyles.module.css"
import icons from "./SidebarIcons.jsx";
import { useRoute } from "../../../../vendor/tightenco/ziggy/src/js";
import { useForm } from "@inertiajs/react";


function Sidebar({ isOpen, toggleSidebar, onMouseEnter, onMouseLeave, isAdmin = false }) {

    const { post, processing } = useForm();

    const route = useRoute();

    const userItems = [
        { icon: icons.homeIcon, label: "Home", destination: route('home') },
        { icon: icons.transactionsIcon, label: "Transactions", destination: route('transaction.index') },
        { icon: icons.budgetIcon, label: "Budget", destination: route('budget.index') },
        { icon: icons.settingsIcon, label: "Settings", destination: route('settings') },
    ];

    const adminItems = [
        { icon: icons.homeIcon, label: "Home", destination: route('admin.dashboard') },
        { icon: icons.userIcon, label: "Users", destination: route('admin.users')},
        { icon: icons.settingsIcon, label: "Settings", destination: route('admin.settings') },
    ]

    const display = (isAdmin ? adminItems : userItems);
    

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    }

    return (
        <div
            className={`relative h-screen ${styles.backgroundGradient} border-r border-gray-300 border-opacity-40 rounded-r-lg flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-[294px]' : 'w-[111px]'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >

            {/* Header */}
            <div className="flex justify-center items-center pb-2 w-full h-28 bg-slate-900 border-b border-gray-300 border-opacity-70 rounded-tr-lg">
                <button onClick={toggleSidebar} className="transition-transform duration-300 ease-in-out">
                    <img src={isOpen ? icons.iconOpen : icons.iconClosed} alt="BW_logo" className="transition-opacity duration-300 ease-in-out hover:scale-105" />
                </button>
            </div>

            {/* Body */}
            <div className="flex flex-col justify-between h-full px-8 py-12 overflow-hidden">
                <ul className="flex flex-col gap-12">
                    {display.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <a href={item.destination} className="flex items-center gap-5 group">
                                <img src={item.icon} alt={`${item.label}_icon`} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                <h1 className={`text-xl text-sky-100 font-semibold transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 overflow-hidden whitespace-nowrap'}`}>
                                    {item.label}
                                </h1>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Logout */}
                <form onSubmit={handleLogout}>
                    <button className="mb-12 flex items-center gap-5 group" disabled={processing}>
                        <img src={icons.logoutIcon} alt="logout_icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                        <h1 className={`text-xl text-sky-100 font-semibold transition-all duration-300 ease-in-out ${isOpen ? 'opacity-65 translate-x-0' : 'opacity-0 -translate-x-4 overflow-hidden whitespace-nowrap'}`}>
                            Logout
                        </h1>
                    </button>
                </form>
            </div>

            <img src={isOpen ? icons.decorOpen : icons.decorClosed} className="absolute inset-x-0 bottom-0 pointer-events-none transition-transform duration-300 ease-in-out" alt="Decor" />
        </div>
    );
}

export default Sidebar;