import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import LedgersList from "@/Components/AdminUserLedgersList";
import DeletedLedgers from"@/Components/AdminUserDeletedLedgers";
import TransactList from "@/Components/AdminUserTransactList";
import LedgerItem from "@/Components/AdminLedgerItem";
import TransactItem from "@/Components/AdminTransactionsItem";

function UserProfile({ user }) {

    const isDeleted = 1;

    // const transactions = [
    //     {
    //         id: 1,
    //         category_name: "Food & Dining",
    //         transaction_type: "income",
    //         amount: 1200.5,
    //         transaction_date: "2024-11-27",
    //         transaction_description: "Lunch at a restaurant",
    //     },
    //     {
    //         id: 2,
    //         category_name: "Salary",
    //         transaction_type: "expense",
    //         amount: 50000.0,
    //         transaction_date: "2024-11-25",
    //         transaction_description: "Monthly salary credited to bank account",
    //     },
    //     {
    //         id: 3,
    //         category_name: "Transportation",
    //         transaction_type: "income",
    //         amount: 750.0,
    //         transaction_date: "2024-11-26",
    //         transaction_description: "Gas for car",
    //     },
    // ];

    const ledgers = [
        {
            id: 1,
            ledger_name: "Personal"
        },
        {
            id: 2,
            ledger_name: "Business"
        }
    ]

    const deleted = [
        {
            id: 3,
            ledger_name: "Entertainment"
        },
        {
            id: 4,
            ledger_name: "Confidential Funds"
        }
    ]

    return (
        <>
            <Head title="Dashboard" />

            <Main isSettings={true} isAdmin={true}>

                <div className="h-full w-full flex flex-col gap-6">

                    <div
                        className="flex flex-col md:flex-row shadow-xl w-full justify-between items-center rounded-xl text-white border border-white/40 py-12 px-24
                            hover:border-white/60 transition-all duration-300"
                        style={{
                            background:
                                "linear-gradient(259deg, rgba(74, 167, 200, 0.12) -9.8%, rgba(13, 33, 47, 0.12) 119.45%)",
                        }}
                    >

                        <div className="text-3xl font-bold">
                            <h1>Username</h1>
                            <h1>Email Address</h1>
                        </div>

                        <div className="flex flex-col">
                            <a href={route('admin.edit-user')} className="bg-[#2D7E9BBD] text-center my-4 md:mt-0 py-4 px-14 rounded-xl hover:bg-[#2d7e9b91] transition-all duration-200">
                                Edit
                            </a>
                            {isDeleted === 1 && (
                                <a className="bg-[#2D7E9BBD] my-4 md:mt-0 py-4 px-14 rounded-xl hover:bg-[#2d7e9b91] transition-all duration-200">
                                    Restore
                                </a>
                            )}
                        </div>

                    </div>
                    
                    <div className="flex flex-col lg:flex-row h-full max-h-full overflow-auto gap-6">
                        <LedgersList className="w-1/2"
                            ledgers={ledgers}
                        />

                        <DeletedLedgers className="w-1/2"
                            ledgers={deleted}
                        />

                    </div>

                </div>

            </Main>
        </>

    );
}

export default UserProfile;