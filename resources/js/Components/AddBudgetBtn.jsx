import SetBudgetModal from "@/Layouts/ModalB";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputField from "@/Components/MainInputField";

function AddBudgetBtn({ category }){

    const {data, setData, post} = useForm({
        budget_amount: "",
        category_id: category.category_id   
    });

    const [isSetBudgetModalOpen, setisSetBudgetModalOpen] = useState(false);

    const showSetBudgetModal = () => setisSetBudgetModalOpen(true);
    const handleSetBudgetCancel = () => setisSetBudgetModalOpen(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("budget.store"));
    };

    return (
        <>
         <button
            className="border border-[#A9ADAE] text-xs text-[#E8EAE6] text-opacity-75 rounded-full px-2 py-1 transition-all duration-200 ease-in-out hover:border-white hover:text-white"
            onClick={showSetBudgetModal}
        >
            + Add Budget
        </button>

        <SetBudgetModal
                title="Set Budget"
                subtitle={category.category_name}
                isModalOpen={isSetBudgetModalOpen}
                handleCancel={handleSetBudgetCancel}
                large={false}
                onSubmit={submit}
            >
                <div className="flex flex-col pt-3 pb-7">
                    <InputField
                        label="Amount Limit"
                        htmlFor="budget_amount"
                        type="number"
                        name="budget_amount"
                        placeholder="Enter Amount"
                        value={data.budget_amount}
                        onChange={(e) => setData('budget_amount', e.target.value)}
                    />                                    
                </div>
            </SetBudgetModal>
        </>
    )
}

export default AddBudgetBtn;