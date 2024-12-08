import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { TiDelete } from "react-icons/ti";
import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import AuthInputField from "@/Components/AuthInputField";

const btnActive =
    "border border-teal-700 bg-teal-700 text-white py-3 px-11 rounded-xl shadow-sm";
const btnInactive =
    "border border-teal-700 text-teal-700 text-md py-3 px-11 rounded-xl shadow-sm transition duration-150 hover:bg-teal-700 hover:text-white";
const checkboxLabelStyle =
    "size-label px-4 py-2 border text-white border-gray-600 font-normal rounded-2xl cursor-pointer shadow-sm transition-colors peer-checked:bg-teal-700 peer-checked:border-teal-700 peer-checked:text-white";

function CreateLedgerModal({ isModalOpen, handleCancel }) {
    const { categories, default_cat } = usePage().props;

    const combinedCategoriesMap = new Map();
    [...categories, ...default_cat].forEach((category) => {
        combinedCategoriesMap.set(category.category_id, category);
    });
    const combinedCategories = Array.from(combinedCategoriesMap.values());

    const [currentTabArray, setCurrentTabArray] = useState("expense");
    const [isAddCatModalOpen, setIsAddCatModalOpen] = useState(false);

    const [defaultCategories, setCategories] = useState(combinedCategories);
    const [newCategories, setNewCategories] = useState([]);
    const [newCategoryName, setNewCategoryName] = useState("");

    const { data, setData, post, processing } = useForm({
        ledgerName: "",
        selectedCategories: [],
        newCategoriesSelected: [],
    });

    const handleBtnClick = (e, type) => {
        e.preventDefault();
        setCurrentTabArray(type);
    };

    const handleLedgerNameChange = (e) => setData("ledgerName", e.target.value);
    const handleAddCategoryClick = () => setIsAddCatModalOpen(true);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            if (
                data.selectedCategories.includes(value) ||
                data.newCategoriesSelected.find(
                    (category) => category.category_id === value
                )
            ) {
                return;
            }
            setData("selectedCategories", [...data.selectedCategories, value]);
            const newCategory = newCategories.find(
                (category) => category.category_id === value
            );
            if (newCategory) {
                setData("newCategoriesSelected", [
                    ...data.newCategoriesSelected,
                    newCategory,
                ]);
            }
        } else {
            const filteredSelectedCategories = data.selectedCategories.filter(
                (category) => category !== value
            );
            const filteredNewCategoriesSelected =
                data.newCategoriesSelected.filter(
                    (category) => category.category_id !== value
                );

            setData((prev) => ({
                ...prev,
                selectedCategories: filteredSelectedCategories,
                newCategoriesSelected: filteredNewCategoriesSelected,
            }));
        }
    };

    const handleAddCategory = (e) => {
        if (newCategoryName.trim() === "") {
            return;
        }
        e.preventDefault();
        const newCategory = {
            category_id: `new-${newCategories.length + 1}`,
            category_name: newCategoryName,
            category_type: currentTabArray,
            is_default: false,
        };
        setCategories((prev) => [...prev, newCategory]);
        setNewCategories((prev) => [...prev, newCategory]);
        setNewCategoryName("");
        setIsAddCatModalOpen(false);
    };

    const handleDeleteItem = (id) => {
        setCategories((prev) =>
            prev.filter((category) => category.category_id !== id)
        );
        setNewCategories((prev) =>
            prev.filter((category) => category.category_id !== id)
        );

        const filteredSelectedCategories = data.selectedCategories.filter(
            (category) => category !== id
        );
        const filteredNewCategoriesSelected = data.newCategoriesSelected.filter(
            (category) => category.category_id !== id
        );

        setData((prev) => ({
            ...prev,
            selectedCategories: filteredSelectedCategories,
            newCategoriesSelected: filteredNewCategoriesSelected,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("create-new-ledger"), {
            onSuccess: () => {
                handleCancel();
            }
        });
    };

    return (
        <ModalB
            title="Create Ledger"
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            large={true}
            onSubmit={handleSubmit}
            disabledBtn={
                data.ledgerName.trim() === "" ||
                (data.selectedCategories.length === 0 &&
                    data.newCategoriesSelected.length === 0 &&
                    !processing)
            }
        >
            <div className="space-y-3">
                <MainInputField
                    label="Ledger Name"
                    type="text"
                    placeholder="Enter Ledger Name"
                    value={data.ledgerName}
                    onChange={handleLedgerNameChange}
                />

                <p
                    className="text-lg font-bold"
                    style={{ color: "rgba(229, 239, 221, 0.95)" }}
                >
                    Add Categories
                </p>

                {/* Category List Section */}
                <div>
                    {/* Buttons for choosing either "expenses" or "category" */}
                    <div className="py-3 space-x-4 flex">
                        <button
                            className={
                                currentTabArray === "expense"
                                    ? btnActive
                                    : btnInactive
                            }
                            onClick={(e) => handleBtnClick(e, "expense")}
                        >
                            Expenses
                        </button>
                        <button
                            className={
                                currentTabArray === "income"
                                    ? btnActive
                                    : btnInactive
                            }
                            onClick={(e) => handleBtnClick(e, "income")}
                        >
                            Income
                        </button>
                    </div>

                    {/* Category Lists */}
                    <div className="my-2 p-8 flex flex-wrap gap-x-5 gap-y-6 border rounded-md shadow-sm border-slate-400">
                        {/* NOTE: Make this into a component */}
                        {defaultCategories.map((category) => (
                            <div
                                key={category.category_id}
                                className={`flex-shrink-0 flex-grow-0 hover:scale-105 transition-transform duration-150 ${
                                    category.category_type === currentTabArray
                                        ? "block"
                                        : "hidden"
                                }`}
                            >
                                <input
                                    type="checkbox"
                                    value={category.category_id}
                                    id={`checkbox-${category.category_id}`}
                                    className="hidden peer"
                                    onChange={handleCategoryChange}
                                />
                                <label
                                    htmlFor={`checkbox-${category.category_id}`}
                                    className={`${checkboxLabelStyle} flex justify-between space-x-2`}
                                >
                                    <span>{category.category_name}</span>
                                    {category.is_default ? null : (
                                        <button
                                            onClick={() =>
                                                handleDeleteItem(
                                                    category.category_id
                                                )
                                            }
                                        >
                                            <TiDelete className="text-2xl hover:text-slate-600 transition-colors" />
                                        </button>
                                    )}
                                </label>
                            </div>
                        ))}

                        {/* Add User Made Category Button */}
                        <div className="flex-shrink-0 flex-grow-0 hover:scale-105 transition-transform">
                            <button
                                type="button"
                                className="size-label px-10 pb-1 border-2 border-dashed text-xl text-slate-300 border-gray-300 font-bold rounded-2xl cursor-pointer"
                                onClick={handleAddCategoryClick}
                            >
                                +
                            </button>
                        </div>

                        {/* Add Category Modal */}
                        {isAddCatModalOpen && (
                            <dialog
                                id="add-category"
                                className="modal modal-open"
                            >
                                <div className="modal-box bg-lime-50">
                                    <h3 className="font-extrabold text-3xl text-teal-800">
                                        Add a Category
                                    </h3>
                                    <div className="divider before:bg-black before:opacity-30 after:bg-black after:opacity-30"></div>
                                    <div className="space-y-5">
                                        <AuthInputField
                                            label="Category Name"
                                            htmlFor="category-name"
                                            type="text"
                                            name="category-name"
                                            placeholder="Enter category name"
                                            value={newCategoryName}
                                            onChange={(e) =>
                                                setNewCategoryName(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="modal-action">
                                        <div className="flex space-x-5">
                                            <button
                                                className="text-teal-800 font-bold px-5 py-2 rounded-xl bo</div>rder border-teal-800 hover:scale-110 transition"
                                                onClick={handleAddCategory}
                                            >
                                                Add
                                            </button>
                                            <button
                                                className="text-lime-50 font-bold px-5 py-2 rounded-xl border border-teal-800 bg-teal-800 hover:scale-110 transition"
                                                onClick={() =>
                                                    setIsAddCatModalOpen(false)
                                                }
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                        )}
                    </div>
                </div>
            </div>
        </ModalB>
    );
}

export default CreateLedgerModal;
