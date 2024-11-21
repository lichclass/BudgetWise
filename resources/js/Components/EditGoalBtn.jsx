import { FaEdit } from "react-icons/fa";
import EditGoalsModal from "@/Layouts/ModalC";
import InputField from "@/Components/MainInputField";
import { useState } from "react";
import { Checkbox } from 'antd';
import { useForm } from "@inertiajs/react";
import DeleteGoalBtn from "./DeleteGoalBtn";

function EditGoalModal({ id, title, target, targetDate, isDeadlineSet }) {

    const [isEditGoalsModalOpen, setIsEditGoalsModalOpen] = useState(false);
    const showEditGoalsModal = () => setIsEditGoalsModalOpen(true);
    const handleEditGoalsCancel = () => setIsEditGoalsModalOpen(false);

    const [isDeadlineInputSet, setDeadlineInputEnable] =
        useState(isDeadlineSet);
        
    const { data, setData, put } = useForm({
        goal_id: id,
        goal_name: title,
        goal_limit: target,
        goal_date: targetDate,
    });

    function submitEdit(e) {
        data.goal_date = isDeadlineInputSet
            ? document.querySelector('input[name="goal_date"]').value
            : null;
        e.preventDefault();
        // console.log(data);
        put(route("goals.update", id));
    }

    return (
        <>
            <button onClick={showEditGoalsModal}>
                <FaEdit className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110" />
            </button>

            <EditGoalsModal
                title="Edit Goal"
                isModalOpen={isEditGoalsModalOpen}
                handleCancel={handleEditGoalsCancel}
                deleteRender={<DeleteGoalBtn goal_id={id} />}
                onClick={submitEdit}
            >

            <div className="flex flex-col gap-4 pb-5">
                
                    <InputField
                        label="Goal Name"
                        htmlFor="goal_name"
                        type="text"
                        name="goal_name"
                        placeholder={title}
                        value={data.goal_name || title}
                        onChange={(e) =>
                            setData("goal_name", e.target.value)
                        }
                    />

                    <InputField
                        label="Amount Limit"
                        htmlFor="goal_limit"
                        type="number"
                        name="goal_limit"
                        placeholder={target}
                        value={data.goal_limit || target}
                        onChange={(e) =>
                            setData("goal_limit", e.target.value)
                        }
                    />

                    <div className="flex flex-col gap-2">
                        <InputField
                            label="Date"
                            htmlFor="goal_date"
                            type="date"
                            name="goal_date"
                            value={data.goal_date || targetDate}
                            onChange={(e) =>
                                setData("goal_date", e.target.value)
                            }
                            isReadOnly={!isDeadlineInputSet}
                        />

                        <Checkbox
                            name="setDeadline"
                            className="text-md font-semibold text-gray-300"
                            checked={isDeadlineInputSet}
                            onChange={(e) =>
                                setDeadlineInputEnable(e.target.checked)
                            }
                        >
                            Set Deadline
                        </Checkbox>
                    </div>
                
                </div>

            </EditGoalsModal>
            
        </>
    );
    
}

export default EditGoalModal;
