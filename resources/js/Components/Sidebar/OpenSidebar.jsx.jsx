import React from "react";
import styles from "./SidebarStyles.module.css";
import icons from "./SidebarIcons.jsx";

//anchors for now
const menuItems = [
    { icon: icons.homeIcon, label: "Home", destination: "#" },
    { icon: icons.transactionsIcon, label: "Transactions", destination: "#" },
    { icon: icons.budgetIcon, label: "Budget", destination: "#" },
    { icon: icons.settingsIcon, label: "Settings", destination: "#" },
];

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`relative h-screen ${styles.backgroundGradient} border-r border-gray-300 border-opacity-40 rounded-r-lg flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-72' : 'w-28'}`}>
            
            {/* Header */}
            <div className="flex justify-center items-center pb-2 w-full h-28 bg-slate-900 border-b border-gray-300 border-opacity-70 rounded-tr-lg">
                <button onClick={toggleSidebar} className="transition-transform duration-300 ease-in-out">
                    <img src={isOpen ? icons.iconOpen : icons.iconClosed} alt="BW_logo" className="transition-opacity duration-300 ease-in-out hover:scale-105"/>
                </button>
            </div>

            {/* Body */}
            <div className="flex flex-col justify-between h-full px-8 py-12 overflow-hidden">
                <ul className="flex flex-col gap-12">
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <a href={item.destination} className="flex items-center gap-5 group">
                                <img src={item.icon} alt={`${item.label}_icon`} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                <h1 className={`text-xl text-sky-100 font-semibold opacity-65 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 overflow-hidden whitespace-nowrap'}`}>
                                    {item.label}
                                </h1>
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#" className="mb-12 flex items-center gap-5 group">
                    <img src={icons.logoutIcon} alt="logout_icon" className="transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                    <h1 className={`text-xl text-sky-100 font-semibold transition-all duration-300 ease-in-out ${isOpen ? 'opacity-65 translate-x-0' : 'opacity-0 -translate-x-4 overflow-hidden whitespace-nowrap'}`}>
                        Logout
                    </h1>
                </a>
            </div>

            <img src={isOpen ? icons.decorOpen : icons.decorClosed} className="absolute inset-x-0 bottom-0 pointer-events-none transition-opacity duration-300 ease-in-out" alt="Decor"/>
        </div>
    );
}

export default Sidebar;