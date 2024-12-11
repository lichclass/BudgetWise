import Main from "@/Layouts/Main";
import { Head, usePage } from "@inertiajs/react";
import TransactionCalendar from "@/Components/TransactionCalendar";
import TransactionList from "@/Components/TransactionList";
import TransactionChart from "@/Components/TransactionChart";
import { useState, useEffect } from "react";
import TestChart from "@/Components/TestChart";

function LedgerTransactions({ ledger, transactions }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const transactionData = transactions.filter(
        (transaction) => transaction.ledger_id !== ledger.id
    );

    const expenses = transactionData.filter(
        (transaction) => transaction.transaction_type === "expense"
    );
    const total_expenses = expenses.reduce(
        (acc, curr) => acc + parseFloat(curr.amount),
        0
    );

    const incomes = transactionData.filter(
        (transaction) => transaction.transaction_type === "income"
    );
    const total_income = incomes.reduce(
        (acc, curr) => acc + parseFloat(curr.amount),
        0
    );

    const balance = parseFloat(ledger.balance);

    const handleDateChange = (date) => setSelectedDate(date);

    return (
        <>
            {/* This is for the page title */}
            <Head title="Transactions" />

            {/* Modify the navbarMsg, use the one from Figma */}
            <Main
                navbarMsg={`(${ledger.ledger_name}) Transactions`}
                isAdmin={true}
            >
                <div className="flex flex-col h-full gap-y-3 py-3 overflow-y-auto ">
                    <div className="flex gap-x-3 flex-col gap-y-3 md:flex-row">
                        {/* Calendar Card */}
                        <div
                            className="border border-slate-500 rounded-lg md:w-4/6 py-3 px-6 flex flex-col"
                            style={{
                                background:
                                    "linear-gradient(259deg, rgba(74, 167, 200, 0.19) -9.8%, rgba(13, 33, 47, 0.19) 119.45%)",
                            }}
                        >
                            {/* Calendar */}
                            <TransactionCalendar
                                transactions={transactionData}
                                onDateChange={handleDateChange}
                            />

                            {/* Summary */}
                            <div className="flex justify-between py-2 px-16">
                                <div className="text-center">
                                    <p className="text-sm text-slate-300 font-bold">
                                        Income
                                    </p>
                                    <p className="text-green-500 font-bold text-lg">
                                        ₱
                                        {total_income.toLocaleString("en-CA", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-300 font-bold">
                                        Expenses
                                    </p>
                                    <p className="text-red-500 font-bold text-lg">
                                        ₱
                                        {total_expenses.toLocaleString(
                                            "en-CA",
                                            {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }
                                        )}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-300 font-bold">
                                        Balance
                                    </p>
                                    <p className="font-bold text-lg">
                                        ₱
                                        {balance.toLocaleString("en-CA", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Transactions Card */}
                        <div
                            className="border py-8 px-3 border-slate-500 rounded-lg md:w-2/6"
                            style={{
                                backgroundColor: "#195676",
                            }}
                        >
                            <TransactionList
                                transactionData={transactionData}
                                selectedDate={selectedDate}
                            />
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div
                        className="border border-slate-500 rounded-lg w-full p-5"
                        style={{
                            backgroundColor: "#143445",
                        }}
                    >
                        {/* <TransactionChart /> */}
                        <TestChart transactionData={transactionData} />
                    </div>
                </div>
            </Main>
        </>
    );
}

export default LedgerTransactions;
