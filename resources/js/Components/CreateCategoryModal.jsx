import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import { Checkbox } from "antd";
import DropDownField from "@/Components/DropDownField";
import { useForm } from "@inertiajs/react";

function CreateCategoryModal({ type, isModalOpen, handleCancel }) {
    const { data, setData, post, errors, processing } = useForm({
        category_type: "",
        custom_name: "",
        def_cat: "",
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <ModalB
            title="Create Category"
            subtitle={type && (type === "expense" ? "Expense" : "Income")}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            onSubmit={submit}
        >
            <div className="space-y-4 > *">
                <DropDownField
                    label="Select Category Type"
                    htmlFor="category_type"
                    name="category-type"
                    placeholder="Select a Category"
                    options={[
                        { label: "Income", value: "income" },
                        { label: "Expense", value: "expense" },
                    ]}
                    onChange={(e) => setData("category_type", e.target.value)}
                />

                <MainInputField
                    label="Custom Name"
                    htmlFor="custom_name"
                    type="text"
                    name="custom-name"
                    placeholder="Enter Category Name"
                    onChange={(e) => setData("custom_name", e.target.value)}
                />

                <Checkbox
                    name="custom-cat"
                    className="text-md font-extralight text-white"
                >
                    Custom Category
                </Checkbox>

                <DropDownField
                    label="Default Categories"
                    htmlFor="def_cat"
                    name="def-cat"
                    placeholder="Select a Category"
                    options={[
                        { label: "Option 1", value: "option1" },
                        { label: "Option 2", value: "option2" },
                        { label: "Option 3", value: "option3" },
                    ]}
                    onChange={(e) => setData("def_cat", e.target.value)}
                />
            </div>
        </ModalB>
    );
}

export default CreateCategoryModal;
