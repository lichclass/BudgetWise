import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import { useForm, usePage } from "@inertiajs/react";

function AddExpensesModal({ name, cat_id, isModalOpen, setIsModalOpen, handleCancel }) {
    const { ledger } = usePage().props;
    
    const { data, setData, post } = useForm({
        ledger_id: ledger.ledger_id,
        category_id: cat_id,
        amount: "",
        transaction_description: "",
        transaction_date: "",
        transaction_type: "expense",
    });

    function submit(e) {
        e.preventDefault();
        // console.log(data);
        post(route("transaction.store"));
        data.amount = "";
        data.transaction_description = "";
        data.transaction_date = "";
        setIsModalOpen(false);
    }

    return (
        <ModalB
            title="Add Expense"
            subtitle={name}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            large="true"
            onSubmit={submit}
        >
            <div className="flex flex-row">
                <div className="w-1/2 flex flex-col pl-2">
                    <div className="h-1/2">
                        <h1 className="text-xl text-gray-50">Budget</h1>
                    </div>
                    <div className="h-1/2">
                        <h1 className="text-xl text-gray-50">Spent</h1>
                        <h1 className="text-4xl text-green-300">
                            ₱ 900 / ₱ 1,000
                        </h1>
                    </div>
                </div>

                <div className="w-1/2 space-y-4 > *">
                    <MainInputField
                        label="Amount"
                        htmlFor="input-amount"
                        type="number"
                        name="input-amount"
                        placeholder="Enter Amount"
                        value = {data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                    />

                    <MainInputField
                        label="Description"
                        htmlFor="description"
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value = {data.transaction_description}
                        onChange={(e) =>
                            setData("transaction_description", e.target.value)
                        }
                    />

                    <MainInputField
                        label="Date"
                        sub_label="*leave blank to set it to today"
                        htmlFor="input-date"
                        type="date"
                        name="input-date"
                        placeholder="Enter the Date"
                        value = {data.transaction_date}
                        onChange={(e) =>
                            setData("transaction_date", e.target.value)
                        }
                    />
                </div>
            </div>
        </ModalB>
    );

}

export default AddExpensesModal;
