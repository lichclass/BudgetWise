import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import GoalsItem from "@/Components/GoalsItem";
import { IoIosAdd } from "react-icons/io";
import { Checkbox } from 'antd';
import CreateGoalsModal from "@/Layouts/ModalB";
import InputField from "@/Components/MainInputField";

function Test({ ledgers }) {

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

    // const enableDeadline = () => {
    //     setDeadlineEnable(true);
    // }

    return (
        <>
            <Head title="Test" />

            <Main navbarMsg={"Test"}>

                <div className="flex flex-col gap-4 my-8">
                    <GoalsItem
                        title="Buy a new phone"
                        completion={45}
                        isDeadlineSet={true}
                        deadline="11/3/4"
                    />

                    <GoalsItem
                        title="Buy a coffee machine"
                        completion={70}
                        isDeadlineSet={false}
                    />

                    <button className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border hover:bg-white hover:text-slate-700 transition h-8" onClick={showCreateGoalsModal}>
                        <IoIosAdd className="text-xl" />
                        Add Goal
                    </button>

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
                                    isReadOnly={isDeadlineSet}
                                />

                                <Checkbox
                                    name='setDeadline'
                                    className='text-md font-light text-gray-100'
                                >
                                    Set Deadline
                                </Checkbox>
                            </div>

                        </div>


                    </CreateGoalsModal>

                </div>
            </Main>

        </>
    )

}

export default Test;