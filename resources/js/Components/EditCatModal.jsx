// delete when ready
import ModalC from "@/Layouts/ModalC";
import MainInputField from "@/Components/MainInputField";
import DeleteCatBtn from "./DeleteCatBtn";
import { useForm } from "@inertiajs/react";

function EditCatModal({
    category,
    isModalOpen,
    handleCancel,
    isEditLedger = false,
}) {
    const { data, setData, put, processing } = useForm({
        category_name: "",
    });

    function submitEdit(e) {
        e.preventDefault();
        put(route("ledger-category.update", category.category_id), {
            onSuccess: () => {
                handleCancel();
            }
        });
    }

    return (
        <ModalC
            title="Edit Category"
            subtitle="Food & Drink"
            deleteRender={
                isEditLedger ? null : (
                    <DeleteCatBtn cat_id={category.category_id} />
                )
            }
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            onClick={submitEdit}
            isEditLedger={isEditLedger}
            disableBtn={category.is_default || processing}
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
                    placeholder="Food & Drink"
                    value={data.category_name || category.category_name}
                    onChange={(e) => setData("category_name", e.target.value)}
                    isReadOnly={category.is_default}
                />
            </div>
        </ModalC>
    );
}

export default EditCatModal;
