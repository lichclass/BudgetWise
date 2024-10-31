import React, { useState } from 'react';
import AuthInputField from '@/Components/AuthInputField';

function CategoryDialog({ categories, selectedCategories, newCategories, newCategoriesSelected, onCategoryChange,  }) {
    const [currentTabArray, setCurrentTabArray] = useState('expense');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');

    const btnActive = "border border-teal-700 bg-teal-700 text-white text-md py-3 px-11 rounded-xl shadow-sm";
    const btnInactive = "border border-teal-700 text-teal-700 text-md py-3 px-11 rounded-xl shadow-sm transition duration-150 hover:bg-teal-700 hover:text-white";
    const checkboxLabelStyle = "size-label px-4 py-2 border text-slate-800 border-gray-600 font-normal rounded-2xl cursor-pointer shadow-sm transition-colors peer-checked:bg-teal-700 peer-checked:border-teal-700 peer-checked:text-white";

    const handleBtnClick = (e, type) => {
        e.preventDefault();
        setCurrentTabArray(type);
    };

    const handleAddCategoryClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        const newCategoryObject = {
            id: `new-${newCategories.length + 1}`,
            name: newCategoryName,
            type: currentTabArray,
            is_default: false,
            user_id: null,
        };
        setCategories((prev) => [...prev, newCategoryObject]);
        setNewCategories((prev) => [...prev, newCategoryObject]);
        setNewCategoryName('');
    }; 

    return (
        <>
            <div className="w-50 p-3">
                <div className="py-3 space-x-4 flex">
                    <button
                        className={currentTabArray === 'expense' ? btnActive : btnInactive}
                        onClick={(e) => handleBtnClick(e, 'expense')}
                    >
                        Expenses
                    </button>
                    <button
                        className={currentTabArray === 'income' ? btnActive : btnInactive}
                        onClick={(e) => handleBtnClick(e, 'income')}
                    >
                        Income
                    </button>
                </div>

                {/* Category List */}
                <div className="my-2 p-8 flex flex-wrap gap-x-5 gap-y-6 border rounded-md shadow-sm border-slate-400">
                    {categories
                        .filter(category => category.category_type === currentTabArray)
                        .map((category) => (
                            <div key={category.category_id} className="flex-shrink-0 flex-grow-0 hover:scale-105 transition-transform duration-150">
                                <input
                                    type="checkbox"
                                    value={category.category_id}
                                    id={`checkbox-${category.category_id}`}
                                    className="hidden peer"
                                />
                                <label htmlFor={`checkbox-${category.category_id}`} className={checkboxLabelStyle}>
                                    {category.category_name}
                                </label>
                            </div>
                        ))}
                    <div className="flex-shrink-0 flex-grow-0 hover:scale-105 transition-transform">
                        <button
                            type="button"
                            className="size-label px-10 pb-1 border-2 border-dashed text-xl text-slate-800 border-gray-600 font-bold rounded-2xl cursor-pointer"
                            onClick={handleAddCategoryClick}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>


            {/* Adding a new category */}
            {isModalOpen && (
                <dialog id="add-category" className="modal modal-open">
                    <div className="modal-box bg-lime-50">
                        <h3 className="font-extrabold text-3xl text-teal-800">Add a Category</h3>
                        <div className='divider before:bg-black before:opacity-30 after:bg-black after:opacity-30'></div>
                        <div className='space-y-5'>
                            <AuthInputField
                                label="Category Name"
                                htmlFor="category-name"
                                type="text"
                                name="category-name"
                                placeholder="Enter category name"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                            />
                        </div>
                        <div className="modal-action">
                            <div className='flex space-x-5'>
                                <button
                                    className="text-teal-800 font-bold px-5 py-2 rounded-xl border border-teal-800 hover:scale-110 transition"
                                    onClick={handleAddCategory}
                                >
                                    Add
                                </button>
                                <button
                                    className="text-lime-50 font-bold px-5 py-2 rounded-xl border border-teal-800 bg-teal-800 hover:scale-110 transition"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}

export default CategoryDialog;