import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import AddTransactionBtn from "./AddTransactionBtn";
import EditCatBtn from "./EditCatBtn";
import { downscale } from "@/utilityFunctions";

function CategoryCard({ category, amount }) {
    const formaterr = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    const [fontSize, setFontSize] = useState();

    useEffect(() => {
        const expectedMaxLength = 6; // Example expected maximum length
        const baseFontSize = 48; // Example base font size
        const minFontSize = 16; // Example minimum font size

        const newFontSize = downscale(
            amount.toString().length,
            expectedMaxLength,
            baseFontSize,
            minFontSize
        );
        setFontSize(newFontSize);
    }, [amount]);

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
            className="w-[194px] h-[249px] shadow-xl rounded-2xl px-3 border border-white/40 hover:border-white transition-all duration-300"
            style={{
                background:
                    "linear-gradient(147deg, rgba(71, 255, 148, 0.99) -144.14%, #195676 34.46%, rgba(92, 22, 103, 0.58) 214.5%)",
            }}
        >
            {/* Body content */}
            <div className="flex flex-col justify-between items-center h-full">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <p
                        className="text-center text-4xl font-bold text-[#E8EAE6DB] py-5 pb-9"
                        style={{
                            fontSize: `${fontSize}px`,
                        }}
                    >
                        {formaterr.format(amount)}
                    </p>
                </div>

                {/* Buttons */}
                <Space className="flex flex-shrink-0 justify-between flex-grow-0 px-1 mb-2">
                    <AddTransactionBtn
                        type={category.category_type}
                        name={category.category_name}
                    />
                    <EditCatBtn />
                </Space>
            </div>
        </Card>
    );
}

export default CategoryCard;
