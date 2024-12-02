import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import { Checkbox } from "antd";
import DropDownField from "@/Components/DropDownField";
import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { set } from "date-fns";

function CreateCategoryModal({
    type = null,
    isModalOpen,
    handleCancel,
    locked = false,
}) {
    const { default_cat, categories } = usePage().props;
    const [isCustom, setIsCustom] = useState(false);
    const [selectedType, setSelectedType] = useState(type || "");

    const filteredDefaultCat = selectedType
        ? default_cat.filter(
              (cat) =>
                  cat.category_type === selectedType &&
                  !categories.some(
                      (existingCat) =>
                          existingCat.category_id === cat.category_id
                  )
          )
        : [];

    const initialDefCat =
        filteredDefaultCat.length > 0 ? filteredDefaultCat[0].category_id : "";

    const { data, setData, post, errors, processing } = useForm({
        category_type: selectedType,
        custom_name: "",
        def_cat: initialDefCat,
    });

    useEffect(() => {
        setData("category_type", selectedType);
        if (!isCustom) {
            setData("def_cat", initialDefCat);
        }
    }, [selectedType, isCustom]);

    const handleIsCustomChange = (e) => {
        const isChecked = e.target.checked;
        setIsCustom(isChecked);
        
        if (isChecked) {
            // When checking custom category
            setData("def_cat", "");
            setData("custom_name", ""); // Ensure custom_name is cleared when first checking
        } else {
            // When unchecking custom category
            setData("custom_name", ""); // Explicitly clear custom_name
            setData("def_cat", initialDefCat);
        }
    };

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setData("category_type", newType);
    };

    function submit(e) {
        e.preventDefault();
        post(route("ledger-category.store"));
    }

    return (
        <ModalB
            title="Create Category"
            subtitle={
                selectedType &&
                (selectedType === "expense" ? "Expense" : "Income")
            }
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            onSubmit={submit}
            disabledBtn={processing}
        >
            <div className="space-y-4 > *">
                <DropDownField
                    label="Select Category Type"
                    htmlFor="category_type"
                    name="category-type"
                    placeholder="Select a Category"
                    value={selectedType || ""}
                    options={[
                        { label: "Income", value: "income" },
                        { label: "Expense", value: "expense" },
                    ]}
                    onChange={handleTypeChange}
                    isReadOnly={locked}
                />

                <MainInputField
                    label="Custom Name"
                    htmlFor="custom_name"
                    type="text"
                    name="custom-name"
                    placeholder="Enter Category Name"
                    value={data.custom_name}
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
                    value={data.def_cat || ""}
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