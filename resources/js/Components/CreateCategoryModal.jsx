import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import { Checkbox } from "antd";
import DropDownField from "@/Components/DropDownField";
import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

function CreateCategoryModal({ type, isModalOpen, handleCancel }) {
    const { default_cat, categories } = usePage().props;
    const [isCustom, setIsCustom] = useState(false);

    const filteredDefaultCat = default_cat.filter(
        (cat) => 
            cat.category_type === type && 
            !categories.some((existingCat) => existingCat.category_id === cat.category_id) 
    );

    const { data, setData, post, errors, processing } = useForm({
        category_type: type,
        custom_name: "",
        def_cat: filteredDefaultCat[0].category_id,
    });

    const handleIsCustomChange = (e) => { 
        setIsCustom(e.target.checked); 
        if(e.target.checked) {
            setData("def_cat", "");
        } else {
            setData("custom_name", "");
            setData("def_cat", filteredDefaultCat[0].category_id);
        }
    };

    function submit(e) {
        e.preventDefault();
        post(route("ledger-category.store"));
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
                    value={type}
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
                    isReadOnly={!isCustom}
                />

                <Checkbox
                    name="custom-cat"
                    className="text-md font-extralight text-white"
                    onChange={handleIsCustomChange}
                >
                    Custom Category
                </Checkbox>

                <DropDownField
                    label="Default Categories"
                    htmlFor="def_cat"
                    name="def-cat"
                    placeholder="Select a Category"
                    value={data.def_cat}
                    options={filteredDefaultCat.map((cat) => ({
                        label: cat.category_name,
                        value: cat.category_id,
                    }))}
                    onChange={(e) => setData("def_cat", e.target.value)}
                    isReadOnly={isCustom}
                />
            </div>
        </ModalB>
    );
}

export default CreateCategoryModal;
