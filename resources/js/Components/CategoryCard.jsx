import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import AddTransactionBtn from "./AddTransactionBtn";
import EditCatBtn from "./EditCatBtn";
import { downscale } from "@/utilityFunctions";
import { usePage } from "@inertiajs/react";

function CategoryCard({ category, budget, selectedMonth }) {
    
    const { transactions, ledger } = usePage().props;

    const [fontSize, setFontSize] = useState();

    const total_amount = transactions.filter(
        (transaction) =>
            transaction.ledger_id === ledger.ledger_id 
        && transaction.category_id === category.category_id
        && new Date(transaction.transaction_date).getMonth() === selectedMonth.getMonth()
        && new Date(transaction.transaction_date).getFullYear() === selectedMonth.getFullYear()
    )
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const formaterr = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    useEffect(() => {
        const expectedMaxLength = 6; // Example expected maximum length
        const baseFontSize = 48; // Example base font size
        const minFontSize = 16; // Example minimum font size

        const newFontSize = downscale(
            total_amount.toString().length,
            expectedMaxLength,
            baseFontSize,
            minFontSize
        );
        setFontSize(newFontSize);
    }, [total_amount]);

    const completion = budget && (total_amount / budget.amount_limit) * 100;


    return (
        <Card
            title={
                <div
                    className="text-center text-xl text-[#E8EAE6DB] font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]"
                    style={{
                        fontSize: category.length > 10 ? "1rem" : "1.25rem",
                        whiteSpace: "nowrap",
                    }}
                    title={category.category_name}
                >
                    {category.category_name}
                </div>
            }
            className={`w-[194px] h-[249px] shadow-xl rounded-2xl px-3 border border-white/40 ${completion > 100 ? "hover:border-[#ab2511bc]" : "hover:border-white"} transition-all duration-300`}
            style={{
                background:
                    "linear-gradient(147deg, rgba(71, 255, 148, 0.99) -144.14%, #195676 34.46%, rgba(92, 22, 103, 0.58) 214.5%)",
            }}
        >
            {/* Body content */}
            <div className="flex flex-col justify-between items-center h-full">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <p
                        className={`${completion > 100 ? "text-[#9c0505c2] pt-1" : "text-[#E8EAE6DB] py-5"} text-center text-4xl font-bold pb-9`}
                        style={{
                            fontSize: `${fontSize}px`,
                        }}
                    >
                        {completion > 100 &&
                            <h1 className="text-[#861f0f] text-sm font-semibold">
                                Exceeding Budget
                            </h1>
                        }
                        {formaterr.format(total_amount)}
                    </p>
                </div>

                {/* Buttons */}
                <Space className="flex flex-shrink-0 justify-between flex-grow-0 px-1">
                    <AddTransactionBtn
                        cat_id={category.category_id}
                        type={category.category_type}
                        name={category.category_name}
                        total_amount={total_amount}
                        budget={budget ? budget.amount_limit : 0}
                        completion={completion}
                    />
                    <EditCatBtn category={category} />
                </Space>
            </div>
        </Card>
    );
}

export default CategoryCard;
