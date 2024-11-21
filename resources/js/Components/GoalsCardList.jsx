import GoalsItem from "./GoalsItem";
import AddGoalBtn from "./AddGoalBtn";

function GoalsCard({ goals, selectedLedger }) {

    const daysRemaining = (deadline) => {
        const today = new Date();
        const target = new Date(deadline);
        const diffTime = target - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if(diffDays < 0) return 0;

        return diffDays;
    }

    const filteredGoals = goals.filter((goal) => goal.ledger_id === selectedLedger.ledger_id);

    return (
        <div className="bg-[#174A65D1] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto max-h-[570px]">
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between bg-[#195676] rounded-t-lg px-4 py-3">
                <h1 className="text-white text-2xl font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}>
                    Goals
                </h1>

                <div><AddGoalBtn /></div>
                
            </div>                    

            {/* Items */}
            <div className="flex flex-col gap-3 px-4 py-5 overflow-y-auto flex-grow">
                {filteredGoals.length === 0 ? (
                    <p className="text-white text-opacity-70 text-center">No goals set yet.</p>
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