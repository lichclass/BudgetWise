import CreateGoalsModal from "@/Layouts/ModalB";
import InputField from "@/Components/MainInputField";
import { useState } from "react";
import { Checkbox } from 'antd';
import { useForm } from "@inertiajs/react";

function CreateGoalModal({ isModalOpen, handleCancel }) {

    const { data, setData, post} = useForm({
        goal_name: "",
        goal_limit: "",
        goal_date: "",
    });

    function submitAddGoal(e) {
        e.preventDefault();
        // console.log(data);
        post(route("goals.store"));
    }

    const [isDeadlineSet, setDeadlineEnable] = useState(false);

    
    return (
        <>
            <CreateGoalsModal
                title="Create a Goal"
                subtitle="Ex. Save for Tuition"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                large={false}
                onSubmit={submitAddGoal}
            >
                <div className="flex flex-col gap-4 pb-5">
                    <InputField
                        label="Goal Name"
                        htmlFor="goal_name"
                        type="text"
                        name="goal_name"
                        placeholder="Enter a goal name"
                        value={data.goalName}
                        onChange={(e) => setData('goal_name', e.target.value)}
                    />

                    <InputField
                        label="Amount Limit"
                        htmlFor="goal_limit"
                        type="number"
                        name="goal_limit"
                        placeholder="Set amount limit"
                        value={data.goalLimit}
                        onChange={(e) => setData('goal_limit', e.target.value)}
                    />

                    <div className="flex flex-col gap-2">
                        <InputField
                            label="Date"
                            htmlFor="goal_date"
                            type="date"
                            name="goal_date"
                            placeholder="dd/mm/yy"
                            value={data.goalDate}
                            onChange={(e) => setData('goal_date', e.target.value)}
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
        </>
    );
}

export default CreateGoalModal;