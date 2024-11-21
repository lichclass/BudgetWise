import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateCategoryModal from "./CreateCategoryModal";

function AddCategoryBtn({ type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <>
            <button
                className="text-white text-opacity-70 bg-transparent text-xs flex items-center justify-center rounded-lg shadow-sm 
                            border border-white border-opacity-30 px-5 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1
                            whitespace-nowrap"
                onClick={showModal}
            >
                <FaPlus className="text-xs" />
                <p className={`font-thin`}>Add Category</p>
            </button>

            <CreateCategoryModal
                type={type}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            />
        </>
    );
}

export default AddCategoryBtn;
