import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import AddCatBtn from "./AddCatBtn";
import EditCatBtn from "./EditCatBtn";
import { downscale } from "@/utilityFunctions";

function CategoryCard({ category, amount }) {

    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    const [fontSize, setFontSize] = useState();

    useEffect(() => {
        const expectedMaxLength = 6; // Example expected maximum length
        const baseFontSize = 64; // Example base font size
        const minFontSize = 16; // Example minimum font size

        const newFontSize = downscale(amount.toString().length, expectedMaxLength, baseFontSize, minFontSize);
        setFontSize(newFontSize);
    }, [amount]);

    return (
        <Card
            title={
                <div className="text-center text-white text-xl font-bold">
                    {category}
                </div>
            }
            className="shadow-xl m-4 rounded-2xl w-48 text-white p-2 px-3"
            hoverable
            bordered
            style={{
                width: 240,
                background:
                    "linear-gradient(147deg, rgba(71, 255, 148, 0.99) -144.14%, #195676 34.46%, rgba(92, 22, 103, 0.58) 214.5%)",
            }}
        >
            <p
                className="text-center text-4xl font-bold text-white break-words py-10 overflow-hidden whitespace-normal"
                style={{
                    fontSize: `${fontSize}px`,
                }}
            >
                {formaterr.format(amount)}
            </p>
            <Space className="flex flex-shrink-0 flex-grow-0 space-x-2">
                <AddCatBtn />
                <EditCatBtn />
            </Space>
        </Card>
    );
}

export default CategoryCard;
