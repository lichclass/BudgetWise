import StarterLayout from "@/Layouts/StarterLayout";
import StarterLogo from "../../../public/build/assets/StarterHeaderLogo.svg";
import ProgressBar from "@/Components/ProgressBar";
import GetStartBtnBack from "@/Components/GetStartBtnBack";
import GetStartBtnCont from "@/Components/GetStartBtnCont";
import { useState } from "react";
import AuthInputField from "@/Components/AuthInputField";
import { useForm } from '@inertiajs/react'

const config = {
    step1: {
        title: "Let's get you started",
        desc: "We're excited to help you begin your BudgetWise journey! Tell us about your financial goals, and we'll personalize your experience to make budgeting easier",
        step: 1,
        stepName: "step1",
    },
    step2: {
        title: "Let's create your first ledger",
        desc: "Let's get started by setting up your first ledger. This will help you track your finances efficiently and keep things simple and organized.",
        step: 2,
        stepName: "step2",
    },
    step3: {
        title: "Choose your categories",
        desc: "You’re almost there! Pick a category—‘Expenses’ or ‘Income’—and explore the subcategories to get started.",
        step: 3,
        stepName: "step3",
    },
    step4: {
        title: "Welcome to BudgetWise",
        desc: "You’re all set! Click the continue button to explore the features and kick off your journey to wiser budgeting.",
        step: 4,
        stepName: "step4",
    },
};

const btnActive = "border border-teal-700 bg-teal-700 text-white text-md py-3 px-11 rounded-xl shadow-sm";
const btnInactive = "border border-teal-700 text-teal-700 text-md py-3 px-11 rounded-xl shadow-sm transition duration-150 hover:bg-teal-700 hover:text-white";
const checkboxLabelStyle = "size-label px-4 py-2 border text-slate-800 border-gray-600 font-normal rounded-2xl cursor-pointer shadow-sm transition-colors peer-checked:bg-teal-700 peer-checked:border-teal-700 peer-checked:text-white";

function Starter({ categories }) {

    // Store the current step
    const [step, setStep] = useState(1);
    
    // Store the default categories
    const [defaultCategories, setCategories] = useState(categories);

    // Store the new categories
    const [newCategories, setNewCategories] = useState([]);

    // Store the current tab array
    const [currentTabArray, setCurrentTabArray] = useState('expense');

    // Store the modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Store the new category name
    const [newCategoryName, setNewCategoryName] = useState('');


    const { data, setData, post, processing } = useForm({
        ledgerName: '',
        selectedCategories: [],
        newCategoriesSelected: [],
    });


    // Handles the change of ledger name
    const handleLedgerNameChange = (e) => {
        setData('ledgerName', e.target.value);
    };

    // Handles the change of category type
    const handleBtnClick = (e, type) => {
        e.preventDefault();
        setCurrentTabArray(type);
    };

    const handleAddCategoryClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    // Handles the change of new category
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        console.log("Checkbox value:", value);
        if (e.target.checked) {
            setData('selectedCategories', [...data.selectedCategories, value]);
            const newCategory = newCategories.find((category) => category.category_id === value);
            if (newCategory) {
                setData('newCategoriesSelected', [...data.newCategoriesSelected, newCategory]);
            }
        } else {
            const updatedSelectedCategories = data.selectedCategories.filter((category) => category !== value);
            const updatedNewCategoriesSelected = data.newCategoriesSelected.filter((category) => category.category_id !== value);
            setData('selectedCategories', updatedSelectedCategories);
            setData('newCategoriesSelected', updatedNewCategoriesSelected);
        }
    };

    // Handles the change of new category
    const handleAddCategory = (e) => {
        if (newCategoryName.trim() === '') {
            return;
        }
        e.preventDefault();
        const newCategoryObject = {
            category_id: `new-${newCategories.length + 1}`,
            category_name: newCategoryName,
            category_type: currentTabArray,
            is_default: false,
            user_id: null,
        };
        setCategories((prev) => [...prev, newCategoryObject]);
        setNewCategories((prev) => [...prev, newCategoryObject]);
        setNewCategoryName('');
        setIsModalOpen(false);
    };

    const handleDeleteItem = (id) => {
        setCategories((prev) => prev.filter((category) => category.category_id !== id));
        setNewCategories((prev) => prev.filter((category) => category.category_id !== id));
        setData('selectedCategories', data.selectedCategories.filter((category) => category !== id));
        setData('newCategoriesSelected', data.newCategoriesSelected.filter((category) => category.category_id !== id));
    }
    
    const currentStep = config[`step${step}`];

    // Handles the next button click
    const handleNext = (e) => {
        e.preventDefault();
        if (step < 4) {
            setStep(step + 1);
        }
    };

    // Handles the back button click
    const handleBack = (e) => {
        e.preventDefault();
        if (step > 1) {
            setStep(step - 1);
        }
    };

    // Handles the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ledger Name: ", data.ledgerName);
        console.log("Selected Categories: ", data.selectedCategories);
        console.log("New Selected Categories: ", data.newCategoriesSelected);
        // Handle form submission logic here
    };

    return (
        <StarterLayout step={currentStep.step}>

            {/* Header */}
            <div className="flex flex-col space-y-10">
                <img src={StarterLogo} alt="Starter Logo" className="w-56" />
                <ProgressBar progress={currentStep.stepName} />
            </div>

            {/* Title and Description */}
            <div className="py-10 space-y-5 w-full md:w-4/6">
                <h1 className="text-5xl font-black text-slate-900">{currentStep.title}</h1>
                <p className="text-black text-lg">{currentStep.desc}</p>
            </div>

            <form className="h-auto mb-36" onSubmit={handleSubmit}>
                {/* Forms */}
                {step === 2 && (
                    <div>
                        <AuthInputField
                            label="Ledger Name"
                            htmlFor="ledger-name"
                            type="text"
                            name="ledger-name"
                            placeholder="Enter your ledger name"
                            value={data.ledgerName}
                            onChange={handleLedgerNameChange}
                        />
                    </div>
                )}
                {step === 3 && (
                    <>
                    {/* Choose your categories section */}
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
                            {defaultCategories
                                .filter(category => category.category_type === currentTabArray)
                                .map((category) => (
                                    <div key={category.category_id} className="flex-shrink-0 flex-grow-0 hover:scale-105 transition-transform duration-150">
                                        <input
                                            type="checkbox"
                                            value={category.category_id}
                                            id={`checkbox-${category.category_id}`}
                                            className="hidden peer"
                                            onChange={handleCategoryChange}
                                        />
                                        {
                                            category.is_default ? null : (
                                                <button
                                                    className="btn"
                                                    onClick={() => handleDeleteItem(category.category_id)}
                                                >
                                                    Delete
                                                </button>
                                            )
                                        }
                                        <label htmlFor={`checkbox-${category.category_id}`} className={checkboxLabelStyle}>
                                            {category.category_id}. {category.category_name}
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
                )}

                {/* Back and Continue */}
                <div className="space-x-3 flex relative mb-8 lg:fixed lg:bottom-14 lg:mb-0">
                    <GetStartBtnBack
                        onClick={handleBack}
                        {...(step === 1 && { disabled: true })}
                    />
                    <GetStartBtnCont
                        onClick={handleNext}
                        isLast={step === 4}
                        disabled={
                            processing 
                            || (step === 2 && data.ledgerName.trim() === '') 
                            || (step === 3 
                                && (data.selectedCategories.length === 0 
                                    && data.newCategoriesSelected.length === 0))} 
                    />
                </div>
            </form>
        </StarterLayout>
    );
}

export default Starter;