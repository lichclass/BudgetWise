import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditCatModal from "@/Components/EditCatModal";

function EditCatBtn({ category }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <>
            <button
                className="text-white bg-transparent text-sm font-bold flex items-center justify-center px-3 py-2 rounded-lg border border-white border-opacity-60 hover:bg-white hover:text-slate-700 transition"
                onClick={showModal}
            >
                <FaRegEdit className="text-md text-opacity-90 mr-1" />
                Edit
            </button>

            <EditCatModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                category={category}
            />
        </>
    );
}

export default EditCatBtn;
