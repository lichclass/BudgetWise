import GoalsItem from "./GoalsItem";
import AddGoalBtn from "./AddGoalBtn";
import { useState } from "react";

function GoalsCard({ goals, selectedLedger }) {
    const [filterState, setFilterState] = useState("all"); // "all", "completed", "incomplete"

    const daysRemaining = (deadline) => {
        const today = new Date();
        const target = new Date(deadline);
        const diffTime = target - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays < 0 ? 0 : diffDays;
    };


    const toggleGoalState = () => {
        setFilterState((currentState) => {
            const nextState =
                currentState === "all"
                    ? "completed"
                    : currentState === "completed"
                    ? "incomplete"
                    : "all";
    
            return nextState; 
        });
    };

    const filteredGoals = goals
    .filter((goal) => goal.ledger_id === selectedLedger.ledger_id)
    .filter((goal) => {
        if (filterState === "completed") {
            return Math.round(goal.target_income - goal.current_saving) <= 0;
        } else if (filterState === "incomplete") {
            return Math.round(goal.target_income - goal.current_saving) > 0;
        }
        return true;
    });

    return (
        <div className="bg-[#174A65D1] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto max-h-[570px]">
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between bg-[#195676] rounded-t-lg px-4 py-3">
                <h1
                    className="text-white text-2xl font-bold"
                    style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}
                >
                    Goals
                </h1>
                <div className="flex flex-row gap-2">
                    <AddGoalBtn />
                    <button
                        onClick={toggleGoalState}
                        className="text-white bg-transparent text-sm font-bold flex items-center justify-center px-4 py-2 rounded-lg border hover:bg-white hover:text-slate-700 transition h-8"
                    >
                        <span>
                            {filterState.charAt(0).toUpperCase() + filterState.slice(1)}
                        </span>
                    </button>

                </div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-3 px-4 py-5 overflow-y-auto flex-grow">
                {filteredGoals.length === 0 ? (
                    <p className="text-white text-opacity-70 text-center">
                        No goals set yet.
                    </p>
                ) : (
                    filteredGoals.map((goal) => (
                        <GoalsItem
                            key={goal.goal_id}
                            id={goal.goal_id}
                            title={goal.title}
                            target={goal.target_income}
                            current={goal.current_saving}
                            targetDate={goal.target_date}
                            deadline={daysRemaining(goal.target_date)}
                            isDeadlineSet={goal.target_date !== null}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default GoalsCard;
