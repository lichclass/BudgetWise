import { useState, useContext } from "react";
import { CategoryContext } from "@/Pages/Home";
import { IoIosAdd } from "react-icons/io";
import CreateLedgerModal from "./CreateLedgerModal";

function CreateLedgerBtn() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const categories = useContext(CategoryContext);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <>
            <button
                className="rounded-xl bg-select-btn py-1 px-1 pr-3 text-lime-50 flex items-center"
                onClick={showModal}
            >
                <IoIosAdd className="text-3xl" />
                Create Ledger
            </button>

            <CreateLedgerModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                categories={categories}
            />
        </>
    );
}

export default CreateLedgerBtn;
