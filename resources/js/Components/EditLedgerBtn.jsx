import { useState, useContext, useEffect } from "react";
import { usePage, useForm } from "@inertiajs/react";
import { FaRegEdit } from "react-icons/fa";
import MainInputField from "@/Components/MainInputField";
import ModalC from "@/Layouts/ModalC";
import AddCategoryBtn from "./AddCategoryBtn";
import CategoryItemV2 from "./CategoryItemV2";
import { CategoryContext } from "@/Pages/Home";

function EditLedgerBtn(){
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ledger } = usePage().props;

    const [defaultLedger, setDefaultLedger] = useState(ledger);
    const categories = useContext(CategoryContext);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
    const handleLedgerChange = (e) => {
        setDefaultLedger({
            ...defaultLedger,
            ledger_name: e.target.value
        });
    };

    useEffect(() => {
        console.log("Ledger: ", ledger);
        console.log("Categories: ", categories);
    }, []);

    return (
        <>
                
            <button className="sub-bg-select-btn p-2 rounded-lg" onClick={showModal}>
                <FaRegEdit />
            </button>

            <ModalC
                title="Edit Ledger"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                large={true}
            >
                <MainInputField 
                    label="Ledger Name"
                    placeholder="Enter Ledger Name"
                    type="text"
                    value={defaultLedger.ledger_name || ''}
                    onChange={handleLedgerChange}
                />
                <div className="flex justify-between items-center py-5">
                    <h1 className="text-lg font-bold" style={{ color: "rgba(229, 239, 221, 0.95)" }}>Edit Categories</h1>
                    <div><AddCategoryBtn /></div>
                </div>
                <div className="border border-slate-400 rounded-lg min-h-96 flex flex-row">
                    <div className="w-1/2 border-r border-slate-400 p-5">
                        <h1 className="text-center text-lg text-slate-100">Expenses</h1>
                        {categories
                            .filter((category) => category.category_type === "expense")
                            .map((category) => (
                            <CategoryItemV2 key={category.cateogory_id} category={category} />
                        ))}
                    </div>
                    <div className="w-1/2 border-r border-slate-400 p-5">
                        <h1 className="text-center text-lg text-slate-100">Income</h1>
                        {categories
                            .filter((category) => category.category_type === "income")
                            .map((category) => (
                            <CategoryItemV2 key={category.cateogory_id} category={category} />
                        ))}
                    </div>
                </div>
            </ModalC>     
        </>
    );
}

export default EditLedgerBtn;