import TransactCat from "./TransactCat";
import { FaCalendarAlt } from "react-icons/fa";

function TransactionList({ transactionData, selectedDate }) {
    const formattedSelectedDate = new Date(selectedDate).toLocaleDateString(
        "en-CA"
    );

    const total_income = transactionData
        .filter((transaction) => {
            return (
                transaction.transaction_type === "income" &&
                new Date(transaction.transaction_date).toLocaleDateString(
                    "en-CA"
                ) === formattedSelectedDate
            );
        })
        .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

    const total_expenses = transactionData
        .filter((transaction) => {
            return (
                transaction.transaction_type === "expense" &&
                new Date(transaction.transaction_date).toLocaleDateString(
                    "en-CA"
                ) === formattedSelectedDate
            );
        })
        .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

    return (
        <div className="flex flex-col h-full space-y-2">
            {/* Date */}
            <div className="py-3 px-4 flex justify-between items-center">
                <span className="text-3xl font-extrabold">
                    {selectedDate.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                    })}
                </span>
                <FaCalendarAlt className="text-2xl opacity-70" />
            </div>

            {/* Day Summary */}
            <div
                className="rounded-2xl flex justify-center space-x-32 py-4 px-10"
                style={{
                    backgroundColor: "#174A65",
                }}
            >
                <div className="text-center">
                    <p className="text-sm font-bold">Income</p>
                    <p className="text-green-500 font-bold text-lg">₱{total_income.toLocaleString("en-CA")}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold">Expenses</p>
                    <p className="text-red-500 font-bold text-lg">₱{total_expenses.toLocaleString("en-CA")}</p>
                </div>
            </div>

            {/* Transactions */}
            <div
                className="rounded-2xl p-3 flex-grow"
                style={{
                    backgroundColor: "#174A65",
                }}
            >
                <div className="flex items-center px-2">
                    <span className="font-bold text-xl pr-4">Transactions</span>
                    <div className="w-full">
                        <hr className="border-gray-300 text-opacity-50 border shadow-sm w-full" />
                    </div>
                </div>

                {/* Transaction List */}
                <div className="flex flex-col py-2 space-y-2 overflow-y-auto max-h-[20vh]">
                    {transactionData &&
                        transactionData
                            .filter((transaction) => {
                                const transactionDate = new Date(
                                    transaction.transaction_date
                                ).toLocaleDateString("en-CA");
                                return (
                                    transactionDate === formattedSelectedDate
                                );
                            })
                            .map((transaction, index) => (
                                <TransactCat
                                    key={index}
                                    transaction={transaction}
                                />
                            ))}
                </div>
            </div>
        </div>
    );
}

export default TransactionList;
