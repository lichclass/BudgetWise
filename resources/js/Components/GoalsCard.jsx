import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import { downscale } from "@/utilityFunctions";

function GoalsCard({ goals }) {

    return (
        <div
        className="shadow-xl m-4 h-96 w-80 rounded-lg hover:transform space-y-2
                   hover:scale-105 transition-transform duration-300 flex-col items-start"
        style={{
            background:
                "#055474",
        }}
        >
            <div
            className="h-12 w-full rounded-t-lg text-white text-3xl font-extrabold py-2 px-6"
            style={{
                background:
                    "#11698d",
            }}>
                <h1>Goals</h1>
            </div>

            <div className="object-center text-center text-white py-2">
                    <p>No Goals Set</p>
            </div>
       
        </div>
    );
}

export default GoalsCard;