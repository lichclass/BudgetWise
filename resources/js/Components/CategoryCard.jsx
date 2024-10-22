import React, { useEffect, useRef } from "react";
import { Card, Space } from "antd";
import AddCatBtn from "./AddCatBtn";
import EditCatBtn from "./EditCatBtn";

// Function to format numbers as financial values
function formatFinancialNumber(amount) {
    // Convert the amount to a number
    const num = Number(amount);
    
    // If the input is not a number, return a default value
    if (isNaN(num)) return "0.00";

    // Format number with two decimal places for numbers less than or equal to 1000
    if (num <= 1000) {
        return num.toFixed(2);
    }

    // Format larger numbers using suffixes
    const suffixes = ["", "K", "M", "B"];
    let suffixIndex = 0;
    let formattedValue = num;

    // Divide by 1000 until the number is less than 1000
    while (formattedValue >= 1000 && suffixIndex < suffixes.length - 1) {
        formattedValue /= 1000;
        suffixIndex++;
    }

    // Return formatted value with one decimal place if there's a decimal part, otherwise as an integer
    return formattedValue % 1 !== 0
        ? `${formattedValue.toFixed(1)}${suffixes[suffixIndex]}` // One decimal place if it's not a whole number
        : `${formattedValue.toFixed(0)}${suffixes[suffixIndex]}`; // No decimal place if it's a whole number
}


function CategoryCard({ category, currSym, amount }) {

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
            >
                {currSym}
                {formatFinancialNumber(amount)}
            </p>
            <Space className="flex flex-shrink-0 flex-grow-0 space-x-2">
                <AddCatBtn />
                <EditCatBtn />
            </Space>
        </Card>
    );
}

export default CategoryCard;
