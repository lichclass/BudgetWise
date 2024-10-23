import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { downscale } from '@/utilityFunctions';

function BalanceCard({ balance }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    const [fontSize, setFontSize] = useState();

    useEffect(() => {
        const expectedMaxLength = 7; // Example expected maximum length
        const baseFontSize = 64; // Example base font size
        const minFontSize = 16; // Example minimum font size

        const newFontSize = downscale(balance.toString().length, expectedMaxLength, baseFontSize, minFontSize);
        setFontSize(newFontSize);
    }, [balance]);

    return (
        <div
            className="shadow-xl m-4 w-72 rounded-2xl text-white p-6 pb-7 hover:transform space-y-2
                       hover:scale-105 transition-transform duration-300"
            style={{
                border: "1px solid rgba(255, 255, 255, 0.4)",
                background:
                    "linear-gradient(259deg, rgba(74, 167, 200, 0.12) -9.8%, rgba(13, 33, 47, 0.12) 119.45%)",
            }}
        >
            <h1 className='font-bold text-2xl'>
                Balance: 
            </h1>
            <p
                className="text-center font-bold text-6xl text-white break-words"
                style={{ 
                    color: "#79BAA8",
                    fontSize: `${fontSize}px` 
                }}
            >
                {formatter.format(balance)}
            </p>
        </div>
    );
}

export default BalanceCard;