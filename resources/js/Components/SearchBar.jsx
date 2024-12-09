import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="relative sm:w-[406px] h-[39px] flex-shrink-0">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full h-full pl-16 pr-2 rounded-[13px] border border-[#A9ADAE] bg-[#07131E4F] shadow-md transition duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-[#A9ADAEA1] focus:border-transparent hover:shadow-lg hover:border-[#A9ADAEA1]
                text-white placeholder-gray-400"
            />
            <button className="absolute left-0 top-0 h-full flex items-center justify-center px-3 rounded-l-[13px] bg-[#07131E4F] border border-[#A9ADAEA1] 
                transition duration-300 ease-in-out hover:bg-[#0B1A23] hover:shadow-lg focus:outline-none">
                <IoIosSearch className="text-gray-400" />
            </button>
        </div>
    );
}

export default SearchBar;