// I made another one as to not disrupt the original GoalsCard.jsx file

import GoalsItem from "./GoalsItem";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { Checkbox } from 'antd';
import CreateGoalsModal from "@/Layouts/ModalB";
import InputField from "@/Components/MainInputField";

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


    const [isCreateGoalsModalOpen, setIsCreateGoalsModalOpen] = useState(false);
    const [goalName, setGoalName] = useState('');
    const [goalLimit, setGoalLimit] = useState('');
    const [goalDate, setGoalDate] = useState('');
    const [isDeadlineSet, setDeadlineEnable] = useState(false);

    const showCreateGoalsModal = () => {
        setIsCreateGoalsModalOpen(true);
    }

    const handleCreateGoalsCancel = () => {
        setIsCreateGoalsModalOpen(false);
    }

    return (
        <div className="bg-[#174A65D1] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto max-h-[570px]">
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between bg-[#195676] rounded-t-lg px-4 py-3">
                <h1 className="text-white text-2xl font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}>
                    Goals
                </h1>
                <button className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border hover:bg-white hover:text-slate-700 transition h-8" onClick={showCreateGoalsModal}>
                    <IoIosAdd className="text-xl" />
                    Add Goal
                </button>

                {/* Create Goals Modal */}
                <CreateGoalsModal
                    title="Create a Goal"
                    subtitle="Ex. Save for Tuition"
                    isModalOpen={isCreateGoalsModalOpen}
                    handleCancel={handleCreateGoalsCancel}
                    large={false}
                >

                    <div className="flex flex-col gap-4 pb-5">
                        <InputField
                            label="Goal Name"
                            htmlFor="goal_name"
                            type="text"
                            name="goal_name"
                            placeholder="Enter a goal name"
                            value={goalName}
                            onChange={(e) => setGoalName(e.target.value)}
                        />

                        <InputField
                            label="Amount Limit"
                            htmlFor="goal_limit"
                            type="number"
                            name="goal_limit"
                            placeholder="Set amount limit"
                            value={goalLimit}
                            onChange={(e) => setGoalLimit(e.target.value)}
                        />

                        <div className="flex flex-col gap-2">
                            <InputField
                                label="Date"
                                htmlFor="goal_date"
                                type="date"
                                name="goal_date"
                                placeholder="dd/mm/yy"
                                value={goalDate}
                                onChange={(e) => setGoalDate(e.target.value)}
                                isReadOnly={!isDeadlineSet}
                            />

                            <Checkbox
                                name='setDeadline'
                                className='text-md font-semibold text-gray-300'
                                onChange={(e) => setDeadlineEnable(e.target.checked)}
                            >
                                Set Deadline
                            </Checkbox>
                        </div>

                    </div>


                </CreateGoalsModal>

            </div>

            {/* Items */}
            <div className="flex flex-col gap-3 px-4 py-5 overflow-y-auto flex-grow">
                {filteredGoals.length === 0 ? (
                    <p className="text-white text-opacity-70 text-center">No goals set yet.</p>
                ) : (
                    filteredGoals.map((goal) => (
                        <GoalsItem
                            key={goal.goal_id} 
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