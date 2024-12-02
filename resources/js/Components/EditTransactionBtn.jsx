import ModalC from "@/Layouts/ModalC";
import MainInputField from "@/Components/MainInputField";
import DeleteTransactionBtn from "./DeleteTransactionBtn";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function EditTransactionBtn({ transaction }) {
    const { data, setData, put, processing } = useForm({
        amount: transaction.amount,
        transaction_description: transaction.transaction_description,
        transaction_date: transaction.transaction_date,
        transaction_type: transaction.transaction_type,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(data);
        put(route("transaction.update", { id: transaction.reference_id, ...data }));
    };

    return (
        <>
            <button onClick={showModal}>
                <FaEdit className="text-white text-xs sm:text-base text-opacity-80 transition-all duration-500 ease-in-out hover:scale-110" />
            </button>
            <ModalC
                title="Edit Transaction"
                subtitle="Salary"
                deleteRender={
                    <DeleteTransactionBtn
                        transaction_id={transaction.reference_id}
                    />
                }
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onClick={handleSubmit}
                disableBtn={processing}
            >
                <div className="space-y-5 > *">
                    <MainInputField
                        label="Amount"
                        htmlFor="input-amount"
                        type="number"
                        name="input-amount"
                        placeholder="Enter Amount"
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                    />

                    <MainInputField
                        label="Description"
                        htmlFor="description"
                        type="text"
                        name="description"
                        placeholder="Enter Description (Optional)"
                        value={data.desc}
                        onChange={(e) => setData("desc", e.target.value)}
                    />

                    <MainInputField
                        label="Date"
                        sub_label="*leave blank to set it to today"
                        htmlFor="input-date"
                        type="date"
                        name="input-date"
                        placeholder="Enter the Date"
                        value={data.date}
                        onChange={(e) => setData('date', e.target.value)}
                    />
                </div>
            </ModalC>
        </>
    );
}

export default EditTransactionBtn;
