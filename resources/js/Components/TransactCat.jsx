import React, { useState } from "react";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import EditTransactionBtn from "./EditTransactionBtn";

function TransactCat({ transaction }) {
    const [collapsed, setCollapsed] = useState(true);

    const formater = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    const arrowAnim =
        "text-white transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer";

    return (
        // can remove hover scale and can add setCollapsed here instead
        <div
            className={`bg-[#0F3A51] rounded-2xl shadow-sm transition-all duration-200 hover:scale-105`}
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
                    <EditTransactionBtn transaction={transaction} />
                    <div className="text-right text-sm sm:text-base">
                        <span
                            className={`${
                                transaction.transaction_type === "income"
                                    ? "text-[#79BAA8]"
                                    : "text-[#D46060]"
                            } font-bold`}
                        >
                            <span>
                                {transaction.transaction_type === "income"
                                    ? "+"
                                    : "-"}
                            </span>
                            <span>{formater.format(transaction.amount)}</span>
                        </span>
                        <p className="text-xs text-white opacity-60">
                            {transaction.transaction_date}
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    collapsed ? "max-h-0" : "max-h-40"
                }`}
            >
                <div className="px-5 pb-6">
                    <p>{transaction.transaction_description}</p>
                </div>
            </div>
        </div>
    );
}

export default TransactCat;
