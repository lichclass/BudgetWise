import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import ProgressBar from "@/Components/ExpenseProgressBar";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function AddExpensesModal({
    name,
    cat_id,
    isModalOpen,
    setIsModalOpen,
    handleCancel,
    total_amount,
    budget,
    completion,
}) {
    const { ledger } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        ledger_id: ledger.ledger_id,
        category_id: cat_id,
        amount: "",
        transaction_description: "",
        transaction_date: "",
        transaction_type: "expense",
    });

    function submit(e) {
        e.preventDefault();
        post(route("transaction.store"), {
            onSuccess: () => {
                setIsModalOpen(false);
            },
        });
        data.amount = "";
        data.transaction_description = "";
        data.transaction_date = "";
    }

    const formaterr = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    return (
        <ModalB
            title="Add Expense"
            subtitle={name}
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            large="true"
            onSubmit={submit}
            disabledBtn={processing}
        >
            <div className="flex flex-row">
                <div className="w-1/2 flex flex-col pl-2">
                    <div className="h-1/2">
                        <h1 className="text-xl text-gray-50 font-bold">Budget</h1>
                        <div className="h-3/4 flex flex-col justify-center pr-8"><ProgressBar completion={completion} budget={budget} /></div>
                    </div>
                    <div className="h-1/2">
                        <h1 className="text-xl text-gray-50 font-bold">Spent</h1>
                        {budget == 0 &&
                            <p className={`h-3/4 flex flex-col justify-center text-xl font-bold text-[#51657d]`}>
                                * Your budget has not been set
                            </p>
                        }
                        {budget != 0 &&
                            <p className={`h-3/4 flex flex-col justify-center text-4xl font-bold ${completion > 100 ? "text-[#D46060]" : "text-[#79BAA8]"}`}>
                                {formaterr.format(total_amount)} / {formaterr.format(budget)}
                            </p>
                        }
                    </div>
                </div>

                <div className="w-1/2 space-y-4 > *">
                    <MainInputField
                        label="Amount"
                        htmlFor="input-amount"
                        type="number"
                        name="input-amount"
                        placeholder="Enter Amount"
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                        min={1}
                        errorDisplay={errors.amount}
                    />

                    <MainInputField
                        label="Description"
                        htmlFor="description"
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value={data.transaction_description}
                        onChange={(e) =>
                            setData("transaction_description", e.target.value)
                        }
                        errorDisplay={errors.transaction_description}
                    />

                    <MainInputField
                        label="Date"
                        sub_label="*leave blank to set it to today"
                        htmlFor="input-date"
                        type="date"
                        name="input-date"
                        placeholder="Enter the Date"
                        value={data.transaction_date}
                        onChange={(e) =>
                            setData("transaction_date", e.target.value)
                        }
                        errorDisplay={errors.transaction_date}
                    />
                </div>
            </div>
        </ModalB>
    );
}

export default AddExpensesModal;
