import EditBudgetModal from "@/Layouts/ModalC";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { FaEdit } from "react-icons/fa";
import InputField from "@/Components/MainInputField";
import DeleteBudgetBtn from "./DeleteBudgetBtn";

function EditBudgetBtn({ budget }){

    const {data, setData, put} = useForm({
        amount_limit: budget.amount_limit,
        category_id: budget.category_id   
    });

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const showEditModal = () => {
        setIsEditModalOpen(true);
    }
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
    }

    const submit = (e) => {
        e.preventDefault();
        put(route("budget.update", budget.budget_id));
    };

    return(
        <>
            <button onClick={showEditModal}>
                <FaEdit className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110" />
            </button>

            {/* Edit Modal */}
            <EditBudgetModal
                title="Edit Budget"
                subtitle={budget.category_name}
                isModalOpen={isEditModalOpen}
                handleCancel={handleEditCancel}
                deleteRender={<DeleteBudgetBtn budget_id={budget.budget_id} />}
                onClick={submit}
            >
                <div className="flex flex-col pt-3 pb-7">
                    <InputField
                        label="Amount Limit"
                        htmlFor="budget_amount"
                        type="number"
                        name="budget_amount"
                        placeholder={data.amount_limit}
                        value={data.amount_limit}
                        onChange={(e) => setData('amount_limit', e.target.value)}
                    />                                    
                </div>

            </EditBudgetModal>
        </>
    )

}

export default EditBudgetBtn;