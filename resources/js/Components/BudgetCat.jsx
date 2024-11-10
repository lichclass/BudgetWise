import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import DeleteBudgetModal from "@/Layouts/ModalA";
import SetBudgetModal from "@/Layouts/ModalB";
import EditBudgetModal from "@/Layouts/ModalC";
import InputField from "@/Components/MainInputField";

function BudgetCat({ category, amount, isSet }) {
    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    const [isSetBudgetModalOpen, setisSetBudgetModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Set Budget Modal
    const showSetBudgetModal = () => {
        setisSetBudgetModalOpen(true);
    }
    const handleSetBudgetCancel = () => {
        setisSetBudgetModalOpen(false);
    }

    // Edit Modal
    const showEditModal = () => {
        setIsEditModalOpen(true);
    }
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
    }

    return (
        <>
            <div className="flex justify-between items-center bg-[#102734] rounded-xl px-4 py-2 shadow-sm h-11 sm:px-6 lg:px-8">

                {/* Category Name */}
                <span className="text-white text-sm sm:text-base lg:text-lg">{category}</span>

                {isSet ? (
                    <div className="flex gap-2 items-center text-xs sm:text-sm">
                        <button onClick={showEditModal}>
                            <FaEdit className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110" />
                        </button>

                        {/* Edit Modal */}
                        <EditBudgetModal
                            title="Edit Budget"
                            subtitle={category}
                            isModalOpen={isEditModalOpen}
                            handleCancel={handleEditCancel}
                            deleteContent="Are you sure you want to delete this budget category?"
                        >
                             <div className="flex flex-col pt-3 pb-7">
                                <InputField
                                    label="Amount Limit"
                                    htmlFor="budget_amount"
                                    type="number"
                                    name="budget_amount"
                                    placeholder="Enter Amount"
                                    value={amount}
                                    onChange=""
                                    errorDisplay=""
                                />                                    
                            </div>
                        </EditBudgetModal>

                        <div className="flex gap-1">
                            <span className="text-[#79BAA8] font-bold text-sm sm:text-base lg:text-lg">{formaterr.format(amount)}</span>
                            <p className="hidden sm:block self-center sm:show font-thin text-xs sm:text-sm">Monthly</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button className="border border-[#A9ADAE] text-xs text-[#E8EAE6] text-opacity-75 rounded-full px-2 py-1 transition-all duration-200 ease-in-out hover:border-white hover:text-white" onClick={setisSetBudgetModalOpen}>
                        + Add Budget
                        </button>
                            
                        {/* Set Budget Modal */}
                        <SetBudgetModal
                            title="Set Budget"
                            subtitle={category}
                            isModalOpen={isSetBudgetModalOpen}
                            handleCancel={handleSetBudgetCancel}
                            large={false}
                        >
                            <div className="flex flex-col pt-3 pb-7">
                                <InputField
                                    label="Amount Limit"
                                    htmlFor="budget_amount"
                                    type="number"
                                    name="budget_amount"
                                    placeholder="Enter Amount"
                                    value=""
                                    onChange=""
                                    errorDisplay=""
                                />                                    
                            </div>

                        </SetBudgetModal>
                                
                    </div>
                )}
            </div>
        </>
    );
}

export default BudgetCat;
