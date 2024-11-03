import Main from "@/Layouts/Main";
import { Head, usePage } from "@inertiajs/react";
import TransactionCalendar from "@/Components/TransactionCalendar";
import TransactionList from "@/Components/TransactionList";
import TransactionChart from "@/Components/TransactionChart";


function Transactions() {
    // Disregard this lang sa
    const { auth } = usePage().props;
    const { transactions } = usePage().props;

    const total_expenses = 1000;
    const total_income = 1000;
    const balance = 1000;

    return (
        <>
            {/* This is for the page title */}
            <Head title="Transactions" />

            {/* Modify the navbarMsg, use the one from Figma */}
            <Main navbarMsg={`Transactions`}>
                <div className="flex flex-col gap-y-3">
                    
                    <div className="flex gap-x-3 flex-col gap-y-3 md:flex-row">

                        {/* Calendar Card */}
                        <div 
                            className="border border-slate-500 rounded-lg md:w-4/6 py-3 px-6 flex flex-col"
                            style={{ 
                                background: "linear-gradient(259deg, rgba(74, 167, 200, 0.19) -9.8%, rgba(13, 33, 47, 0.19) 119.45%)"
                            }}
                        >
                            {/* Calendar */}
                            <TransactionCalendar />

                            {/* Summary */}
                            <div className="flex justify-between py-2 px-16">
                                <div className="text-center">
                                    <p className="text-sm text-slate-300 font-bold">Income</p>
                                    <p className="text-green-500 font-bold text-lg">₱{total_income.toLocaleString('en-CA')}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-300 font-bold">Expenses</p>
                                    <p className="text-red-500 font-bold text-lg">₱{total_expenses.toLocaleString('en-CA')}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-slate-300 font-bold">Balance</p>
                                    <p className="font-bold text-lg">₱{balance.toLocaleString('en-CA')}</p>
                                </div>
                            </div>

                        </div>

                        {/* Transactions Card */}
                        <div 
                            className="border py-8 px-3 border-slate-500 rounded-lg md:w-2/6"
                            style={{
                                backgroundColor: "#195676"
                            }}
                        >
                            <TransactionList />
                        </div>

                    </div>

                    {/* Bar Chart */}
                    <div 
                        className="border border-slate-500 rounded-lg w-full p-5"
                        style={{
                            backgroundColor: "#143445"
                        }}
                    >
                        <TransactionChart />
                    </div>

                </div>
            </Main>
        </>
    );
}

export default Transactions;
