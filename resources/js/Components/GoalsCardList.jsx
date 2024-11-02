// I made another one as to not disrupt the original GoalsCard.jsx file

import GoalsItem from "./GoalsItem";
import { IoIosAdd } from "react-icons/io";

function GoalsCard({ goals }) {
    return (
        <div className="bg-[#174A65D1] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between bg-[#195676] rounded-t-lg px-4 py-3">
                <h1 className="text-white text-2xl font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}>
                    Goals
                </h1>
                <button className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border hover:bg-white hover:text-slate-700 transition h-8">
                    <IoIosAdd className="text-xl" />
                    Add Goal
                </button>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-3 px-4 py-5 overflow-y-auto flex-grow">

                {goals.map((goal, index) => (
                    <GoalsItem
                        key={index}
                        title={goal.title}
                        completion={goal.completion}
                        deadline={goal.deadline}
                        isDeadlineSet={goal.isDeadlineSet}
                    />
                ))}
            </div>
        </div>
    );
}


export default GoalsCard;