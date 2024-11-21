import { FaRegEdit } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import EditCatModal from "./EditCatModal";
import ModalA from "@/Layouts/ModalA";
import { useForm } from "@inertiajs/react";

function CategoryItemV2({ category }) {
    const [isEditModalOpen, setisEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);

    const showEditModal = () => setisEditModalOpen(true);
    const handleEditCancel = () => setisEditModalOpen(false);
    const showDeleteModal = () => setisDeleteModalOpen(true);
    const handleDeleteCancel = () => setisDeleteModalOpen(false);

    const { data } = useForm({
        category_id: category.category_id,
    });

    const handleDelSubmit = (e) => {
        e.preventDefault();
        console.log("Data to delete (Category): " + data.category_id);
    }

    return (
        <>
            <div className="flex items-center justify-between border-b p-2">
                <h2 className="text-md text-slate-100">
                    {category.category_name}
                </h2>
                <div className="flex items-center space-x-2">
                    <button onClick={showEditModal}>
                        <FaRegEdit className="text-xl text-slate-100" />
                    </button>
                    <button onClick={showDeleteModal}>
                        <IoCloseOutline className="text-2xl text-slate-100" />
                    </button>
                </div>
            </div>

            <EditCatModal
                isModalOpen={isEditModalOpen}
                handleCancel={handleEditCancel}
                category={category}
                isEditLedger={true}
            />

            <ModalA
                title="Delete Category"
                content="Are you sure you want to delete this category?"
                isModalOpen={isDeleteModalOpen}
                handleCancel={handleDeleteCancel}
                onSubmit={handleDelSubmit}
            />
        </>
    );
}

export default CategoryItemV2;
