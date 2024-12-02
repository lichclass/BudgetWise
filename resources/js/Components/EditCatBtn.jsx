import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { FaRegEdit } from "react-icons/fa";
import MainInputField from "@/Components/MainInputField";
import EditCatModal from "@/Layouts/ModalC";
import DeleteCatBtn from "./DeleteCatBtn";

function EditCatBtn({ category, isEditLedger = false }) {
    const { data, setData, put } = useForm({
        category_name: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    function submitEdit(e) {
        e.preventDefault();
        setIsModalOpen(false);
        put(route("ledger-category.update", category.category_id));
    }

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
                title="Edit Category"
                subtitle={category.category_name}
                deleteRender={
                    isEditLedger ? null : (
                        <DeleteCatBtn cat_id={category.category_id} />
                    )
                }
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onClick={submitEdit}
                disableBtn={category.is_default}
            >
                <div className="space-y-5 > * mb-8">
                    <MainInputField
                        label="Name"
                        sub_label={
                            category.is_default
                                ? "*You cannot edit a default category"
                                : ""
                        }
                        htmlFor="category_name"
                        type="text"
                        name="cat-name"
                        value={data.category_name || category.category_name}
                        onChange={(e) =>
                            setData("category_name", e.target.value)
                        }
                        isReadOnly={category.is_default}
                    />
                </div>
            </EditCatModal>
        </>
    );
}

export default EditCatBtn;
