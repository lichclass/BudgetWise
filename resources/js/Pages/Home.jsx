import { usePage, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
import BalanceCard from "@/Components/BalanceCard";
import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import GoalsCardList from "@/Components/GoalsCardList";
import CategoryList from "@/Components/CategoryList";
import LedgersDropdown from "@/Components/LedgersDropdown";
import SearchBar from "@/Components/SearchBar";
import CreateLedgerBtn from "@/Components/CreateLedgerBtn";


const cat_sample = [
    { // First Ledger
        ledger_id: 1,
        ledger_owner: 1,
        user_id: 1,
        category_id: 16,
        category_name: "Allowance",
        is_default: 0,
        category_type: "income"
    },
    {
        ledger_id: 1,
        ledger_owner: 1,
        user_id: null,
        category_id: 1,
        category_name: "Food & Drinks",
        is_default: 1,
        category_type: "expense"
    },
    {
        ledger_id: 1,
        ledger_owner: 1,
        user_id: null,
        category_id: 2,
        category_name: "Groceries",
        is_default: 1,
        category_type: "expense"
    },
    { // Second Ledger
        ledger_id: 2,
        ledger_owner: 1,
        user_id: 1,
        category_id: 16,
        category_name: "Salary",
        is_default: 0,
        category_type: "income"
    },
    {
        ledger_id: 2,
        ledger_owner: 1,
        user_id: null,
        category_id: 1,
        category_name: "Goof & Drinks",
        is_default: 1,
        category_type: "expense"
    },
    {
        ledger_id: 2,
        ledger_owner: 1,
        user_id: null,
        category_id: 2,
        category_name: "Skincare",
        is_default: 1,
        category_type: "expense"
    }
];
const goals_sample = [
    {
        goal_id: 1,
        ledger_id: 1,
        user_id: 1,
        title: "Buy a new phone",
        target_income: 20000,
        current_saving: 0,
        target_date: "2024-11-30",
        created_at: "2021-09-15T07:00:00.000000Z",
        updated_at: "2021-09-15T07:00:00.000000Z"
    }
];
const ledgers_sample = [
    {
        ledger_id: 1,
        user_id: 1,
        ledger_name: "Personal",
        total_income: 0,
        total_expenses: 0,
        balance: 200,
        created_at: "2021-09-15T07:00:00.000000Z",
        updated_at: "2021-09-15T07:00:00.000000Z"
    },
    {
        ledger_id: 2,
        user_id: 1,
        ledger_name: "School",
        total_income: 0,
        total_expenses: 0,
        balance: 500,
        created_at: "2021-09-15T07:00:00.000000Z",
        updated_at: "2021-09-15T07:00:00.000000Z"
    }
];


function Home({ categories, goals, ledgers }) {
    const { auth, ledger } = usePage().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [activeLedger, setActiveLedger] = useState(ledgers_sample[0]);
    const route = useRoute();

    const { data, setData, post } = useForm({
        ledger_id: activeLedger.ledger_id,
    });
    
    console.log("Ledger ID (current)", data.ledger_id);
    console.log("Ledger ID: ", ledger);

    console.log(ledgers);

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    const handleLedgerChange = (ledger) => {
        setActiveLedger(ledger);
        setData('ledger_id', ledger.ledger_id);
        post(route('set-current-ledger'));
    }

    return (
        <>
            {/* Home */}
            <Head title="Home" />

            <Main navbarMsg={`Welcome back, ${auth.user.username}`}>
                <div className="flex flex-col h-full gap-3 px-4">
                    {/* Top */}
                    <div className="flex flex-col items-center lg:flex-row justify-between gap-10 lg:gap-3 mb-3">
                        <SearchBar onSearch={handleSearch} />

                        <div className="flex justify-center md:justify-end gap-4">
                            {/* <DateBtn />
                            <div className="flex gap-4"> */}
                                <CreateLedgerBtn />
                                <LedgersDropdown 
                                    ledgers={ledgers_sample}
                                    activeLedger={activeLedger}
                                    onLedgerChange={handleLedgerChange}
                                />
                            {/* </div> */}
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex flex-col lg:flex-row h-full overflow-auto gap-3 lg:gap-10">
                        {/* Left Side */}
                        <div className="flex flex-col lg:w-2/3">
                            {/* Categories */}
                            <CategoryList
                                type="expense"
                                categories={cat_sample}
                                searchTerm={searchTerm}
                                selectedLedger={activeLedger}
                            />
                            <CategoryList
                                type="income"
                                categories={cat_sample}
                                searchTerm={searchTerm}
                                selectedLedger={activeLedger}
                            />
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col gap-10 lg:gap-3 flex-grow py-3">
                            <BalanceCard balance={activeLedger.balance} />
                            <GoalsCardList 
                                goals={goals_sample} 
                                selectedLedger={activeLedger}
                            />
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
}

export default Home;
