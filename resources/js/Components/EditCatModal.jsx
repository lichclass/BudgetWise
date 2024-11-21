import ModalC from "@/Layouts/ModalC";
import MainInputField from "@/Components/MainInputField";
import DeleteCatBtn from "./DeleteCatBtn";
import { useForm } from "@inertiajs/react";

function EditCatModal({ category, isModalOpen, handleCancel, isEditLedger=false }) {
    const { data, setData, put} = useForm({
        category_name: "",
    });

    function submitEdit(e) {
        e.preventDefault();
        //console.log(data);
        //console.log("Category ID: ", category.category_id);
        put(route("category.update", category.category_id));
    }

    return (
        <ModalC
            title="Edit Category"
            subtitle="Food & Drink"
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
                    placeholder="Food & Drink"
                    onChange={(e) => setData("category_name", e.target.value)}
                />
            </div>
        </ModalC>
    );
}

export default EditCatModal;
