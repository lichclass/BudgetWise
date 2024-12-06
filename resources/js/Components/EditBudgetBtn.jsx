import EditBudgetModal from "@/Layouts/ModalC";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { FaEdit } from "react-icons/fa";
import InputField from "@/Components/MainInputField";
import DeleteBudgetBtn from "./DeleteBudgetBtn";

function EditBudgetBtn({category, budget={ budget_id: 1, amount_limit: 100 }}){

    const {data, setData, put} = useForm({
        budget_amount: budget.amount_limit,
        category_id: category.category_id   
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
                subtitle={category.category_name}
                isModalOpen={isEditModalOpen}
                handleCancel={handleEditCancel}
                deleteRender={<DeleteBudgetBtn budget_id={1} />}
                onClick={submit}
            >
                <div className="flex flex-col pt-3 pb-7">
                    <InputField
                        label="Amount Limit"
                        htmlFor="budget_amount"
                        type="number"
                        name="budget_amount"
                        placeholder={data.budget_amount}
                        value={data.budget_amount}
                        onChange={(e) => setData('budget_amount', e.target.value)}
                    />                                    
                </div>

            </EditBudgetModal>
        </>
    )

}

export default EditBudgetBtn;