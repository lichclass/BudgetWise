import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

function TransactCat({ category, amount, time, description, isIncome}) {
    const [collapsed, setCollapsed] = useState(true);

    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    const arrowAnim = "text-white transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer"

    return (
        // can remove hover scale and can add setCollapsed here instead
        <div className={`bg-[#0F3A51] rounded-2xl shadow-sm transition-all duration-200 hover:scale-105`}> 
            
            <div className="flex justify-between items-center px-5 py-2">
                <div className="flex items-center gap-0 sm:gap-3">
                    <span className="text-white text-sm sm:text-base">{category}</span>
                    {collapsed ? (
                        <MdOutlineKeyboardArrowDown onClick={() => setCollapsed(!collapsed)} className={`${arrowAnim}`} />
                    ) : (
                            <MdOutlineKeyboardArrowUp onClick={() => setCollapsed(!collapsed)} className={`${arrowAnim}`} />
                    )}
                </div>

                <div className="flex items-center gap-1 sm:gap-4">
                    <button><FaEdit className="text-white text-xs sm:text-base text-opacity-80 transition-all duration-500 ease-in-out hover:scale-110" /></button>
                    <div className="text-right text-sm sm:text-base">
                        <span className={`${isIncome ? "text-[#79BAA8]" : "text-[#D46060]"} font-bold`}>
                            <span>{isIncome ? "+" : "-"}</span>
                            <span>{formaterr.format(amount)}</span>
                        </span>
                        <p className="text-xs text-white opacity-60">{time}</p>
                    </div>
                </div>
                
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${collapsed ? 'max-h-0' : 'max-h-40'}`}>
                <div className="px-5 pb-6">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TransactCat;
