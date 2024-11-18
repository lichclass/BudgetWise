import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import AddExpensesModal from "@/Components/AddExpensesModal";
import AddIncomeModal from "@/Components/AddIncomeModal";

function AddCatBtn({ name, cat_id, type }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <>  

            <button 
                className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border border-white border-opacity-60 hover:bg-white hover:text-slate-700 transition"
                onClick={showModal}
            >
                <IoIosAdd className="text-xl text-opacity-90" />
                Add
            </button>

            {
                type === "expense" 
                ? <AddExpensesModal 
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                    name={name}
                    cat_id = {cat_id}
                  />
                : <AddIncomeModal 
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                    name={name}
                    cat_id = {cat_id}
                  />
            }


        </>
    );
}

export default AddCatBtn;
