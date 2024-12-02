import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import { useForm, usePage } from "@inertiajs/react";
import { set } from "date-fns";

function AddIncomeModal({ name, cat_id, isModalOpen, setIsModalOpen, handleCancel }) {
    const { ledger } = usePage().props;

    const { data, setData, post, processing } = useForm({
        ledger_id: ledger.ledger_id,
        category_id: cat_id,
        amount: "",
        transaction_description: "",
        transaction_date: "",
        transaction_type: "income",
    });

    function submit(e) {
        e.preventDefault();
        // console.log(data);
        post(route('transaction.store'));
        data.amount = "";
        data.transaction_description = "";
        data.transaction_date = "";
        setIsModalOpen(false);
    }

    return (
        <ModalB
            title="Add Income"
            subtitle={name}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            onSubmit={submit}
            disabledBtn={processing}
        >
            <div className="space-y-5 > *">
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
                    placeholder="Enter Description (Optional)"
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
        </ModalB>
    );
}

export default AddIncomeModal;
