import { useState, useEffect, useRef } from "react";
import AddCatBtn from "./AddCatBtn";
import EditCatBtn from "./EditCatBtn";


function CategoryCard({ category, currSym, amount }) {

    return (
        <div
            className="card w-52 card-bordered shadow-xl m-4"
            style={{
                background:
                    "linear-gradient(147deg, rgba(71, 255, 148, 0.99) -144.14%, #195676 34.46%, rgba(92, 22, 103, 0.58) 214.5%)",
            }}
        >
            <div className="card-body p-3 py-4 pb-8 items-center text-center">
                <h2 className="card-title text-white font-bold text-2xl">
                    {category}
                </h2>
                <hr className="border-[0.5] border-white opacity-55 w-full mt-2" />
                <div className="py-6">
                    <p
                        className="font-bold text-white break-words overflow-hidden whitespace-normal"
                    >
                        {currSym}
                        {amount}
                    </p>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0 space-x-2">
                    <AddCatBtn />
                    <EditCatBtn />
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;
