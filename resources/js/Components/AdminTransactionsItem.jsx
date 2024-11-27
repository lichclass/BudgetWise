import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function AdminTransactionsItem({ transaction }) {
    const [collapsed, setCollapsed] = useState(true);

    const amountFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    const arrowAnim =
        "text-white transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer";

    return (
        <div
            className={`bg-[#082333] rounded-lg hover:bg-[#062131] transition-all duration-200`}
        >
            <div className="flex justify-between items-center px-5 py-2">
                <div className="flex items-center gap-0 sm:gap-3">
                    <span className="text-white text-sm sm:text-base">
                        {transaction.category_name}
                    </span>
                    {collapsed ? (
                        <MdOutlineKeyboardArrowDown
                            onClick={() => setCollapsed(!collapsed)}
                            className={`${arrowAnim}`}
                        />
                    ) : (
                        <MdOutlineKeyboardArrowUp
                            onClick={() => setCollapsed(!collapsed)}
                            className={`${arrowAnim}`}
                        />
                    )}
                </div>

                <div className="flex items-center gap-1 sm:gap-4">
                    <button
                        className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110"
                    >
                        <FaRegEdit />
                    </button>

                    <div className="text-right text-sm sm:text-base">
                        <span
                            className={`${transaction.transaction_type === "income"
                                    ? "text-[#79BAA8]"
                                    : "text-[#D46060]"
                                } font-bold`}
                        >
                            <span>
                                {transaction.transaction_type === "income"
                                    ? "+"
                                    : "-"}
                            </span>
                            <span>{amountFormatter.format(transaction.amount)}</span>
                        </span>
                        <p className="text-xs text-white opacity-60">
                            {transaction.transaction_date}
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${collapsed ? "max-h-0" : "max-h-40"
                    }`}
            >
                <div className="px-5 pb-6">
                    <p>{transaction.transaction_description}</p>
                </div>
            </div>
        </div>
    );
}

export default AdminTransactionsItem;
