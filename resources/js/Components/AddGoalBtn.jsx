import { IoIosAdd } from "react-icons/io";
import CreateGoalsModal from "@/Layouts/ModalB";
import InputField from "@/Components/MainInputField";
import { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useForm } from "@inertiajs/react";

function AddGoalBtn() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        target_income: "",
        target_date: "",
    });

    const [isDeadlineSet, setDeadlineEnable] = useState(false);
    const [isCreateGoalsModalOpen, setIsCreateGoalsModalOpen] = useState(false);

    const showCreateGoalsModal = () => {
        setIsCreateGoalsModalOpen(true);
    };

    const handleCreateGoalsCancel = () => {
        setIsCreateGoalsModalOpen(false);
        setDeadlineEnable(false);
    };

    function submitAddGoal(e) {
        e.preventDefault();
        
        // Collect current form data with target date
        const submissionData = {
            ...data,
            target_date: isDeadlineSet
                ? document.querySelector('input[name="goal_date"]').value
                : null
        };

        post(route("goals.store"), {
            data: submissionData,
            onSuccess: () => {
                // Explicit reset of form fields
                setData({
                    title: "",
                    target_income: "",
                    target_date: "",
                });
                setDeadlineEnable(false);
                setIsCreateGoalsModalOpen(false);
            },
        });
    }

    return (
        <div>
            <button
                className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border hover:bg-white hover:text-slate-700 transition h-8"
                onClick={showCreateGoalsModal}
            >
                <IoIosAdd className="text-xl" />
                Add Goal
            </button>

            <CreateGoalsModal
                title="Create a Goal"
                subtitle="Ex. Save for Tuition"
                isModalOpen={isCreateGoalsModalOpen}
                handleCancel={handleCreateGoalsCancel}
                large={false}
                onSubmit={submitAddGoal}
                disabledBtn={processing}
            >
                <div className="flex flex-col gap-4 pb-5">
                    <InputField
                        label="Goal Name"
                        htmlFor="goal_name"
                        type="text"
                        name="goal_name"
                        placeholder="Enter a goal name"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        errorDisplay={errors.title}
                    />

                    <InputField
                        label="Amount Limit"
                        htmlFor="goal_limit"
                        type="number"
                        name="goal_limit"
                        placeholder="Set amount limit"
                        value={data.target_income}
                        onChange={(e) =>
                            setData("target_income", e.target.value)
                        }
                        min={1}
                        errorDisplay={errors.target_income}
                    />

                    <div className="flex flex-col gap-2">
                        <InputField
                            label="Date"
                            htmlFor="goal_date"
                            type="date"
                            name="goal_date"
                            placeholder="dd/mm/yy"
                            value={data.target_date}
                            onChange={(e) =>
                                setData("target_date", e.target.value)
                            }
                            isReadOnly={!isDeadlineSet}
                            errorDisplay={errors.target_date}
                        />

                        <Checkbox
                            name="setDeadline"
                            checked={isDeadlineSet}
                            className="text-md font-semibold text-gray-300"
                            onChange={(e) =>
                                setDeadlineEnable(e.target.checked)
                            }
                        >
                            Set Deadline
                        </Checkbox>
                    </div>
                </div>
            </CreateGoalsModal>
        </div>
    );
}

export default AddGoalBtn;