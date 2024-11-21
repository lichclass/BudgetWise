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

    function submitEdit(e) {
        e.preventDefault();
        //console.log(data);
        //console.log("Category ID: ", category.category_id);
        put(route("category.update", category.category_id));
    }

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
                title="Edit Category"
                subtitle={category.category_name}
                deleteRender={isEditLedger ? null : <DeleteCatBtn cat_id={category.category_id} />}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onClick={submitEdit}
            >
                <div className="space-y-5 > * mb-8">
                    <MainInputField
                        label="Name"
                        htmlFor="category_name"
                        type="text"
                        name="cat-name"
                        placeholder={data.category_name || category.category_name}
                        onChange={(e) => setData("category_name", e.target.value)}
                    />
                </div>
            </EditCatModal>


        </>
    );
}

export default EditCatBtn;
