import { useState } from 'react';
import ModalB from '@/Layouts/ModalB';
import MainInputField from '@/Components/MainInputField';

function CreateLedgerModal({ categories }) {

    const [isCreateLedgerModalOpen, setIsCreateLedgerModalOpen] = useState(false);

    const showCreateLedgerModal = () => {
        setIsCreateLedgerModalOpen(true);
    }

    const handleCancelCreateLedgerModal = () => {
        setIsCreateLedgerModalOpen(false);
    }

    const handleBtnClick = (e, type) => {
        e.preventDefault();
        setCurrentTabArray(type);
    };

    const btnActive = "border border-teal-700 bg-teal-700 text-white py-3 px-11 rounded-xl shadow-sm";
    const btnInactive = "border border-teal-700 text-teal-700 text-md py-3 px-11 rounded-xl shadow-sm transition duration-150 hover:bg-teal-700 hover:text-white";
    const checkboxLabelStyle = "size-label px-4 py-2 border text-slate-800 border-gray-600 font-normal rounded-2xl cursor-pointer shadow-sm transition-colors peer-checked:bg-teal-700 peer-checked:border-teal-700 peer-checked:text-white";

    const [defaultCategories, setCategories] = useState(categories);
    const [currentTabArray, setCurrentTabArray] = useState('expense');

    return (
        <>

            <button className="btn" onClick={showCreateLedgerModal}>
                Create Ledger
            </button>
            
            <ModalB
                title="Create Ledger"
                isModalOpen={isCreateLedgerModalOpen}
                handleCancel={handleCancelCreateLedgerModal}
                large={true}
            >
                <div className="space-y-3">   
                    <MainInputField 
                        label="Ledger Name"
                        type="text"
                        placeholder="Enter Ledger Name"
                    />
                    
                    <p className="text-lg font-bold" style={{ color: "rgba(229, 239, 221, 0.95)"}}>Add Categories</p>

                    {/* Category List Section */}
                    <div>

                        {/* Buttons for choosing either "expenses" or "category" */}
                        <div className="py-3 space-x-4 flex">
                            <button
                                className={currentTabArray === 'expense' ? btnActive : btnInactive}
                                onClick={(e) => handleBtnClick(e, 'expense')}
                            >
                                Expenses
                            </button>
                            <button
                                className={currentTabArray === 'income' ? btnActive : btnInactive}
                                onClick={(e) => handleBtnClick(e, 'income')}
                            >
                                Income
                            </button>
                        </div>

                        {/* Category Lists */}
                        <div className="my-2 p-8 flex flex-wrap gap-x-5 gap-y-6 border rounded-md shadow-sm border-slate-400">

                            {/* Insert the thing for listing all the default categories */}

                            <div className="flex-shrink-0 flex-grow-0 hover:scale-105 transition-transform">
                                <button
                                    type="button"
                                    className="size-label px-10 pb-1 border-2 border-dashed text-xl text-slate-300 border-gray-300 font-bold rounded-2xl cursor-pointer"
                                    // onClick={handleAddCategoryClick}
                                >
                                    +
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </ModalB>
        
        </>
    )
}

export default CreateLedgerModal;