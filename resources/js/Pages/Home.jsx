import { usePage, useForm } from "@inertiajs/react";
import { useState, useEffect, useRef, createContext } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
import BalanceCard from "@/Components/BalanceCard";
import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import GoalsCardList from "@/Components/GoalsCardList";
import CategoryList from "@/Components/CategoryList";
import LedgersDropdown from "@/Components/LedgersDropdown";
import SearchBar from "@/Components/SearchBar";
import CreateLedgerBtn from "@/Components/CreateLedgerBtn";

const goals_sample = [
    {
        goal_id: 1,
        ledger_id: 1,
        user_id: 1,
        title: "Buy a new phone",
        target_income: 20000,
        current_saving: 10000,
        target_date: "2024-11-30",
        created_at: "2021-09-15T07:00:00.000000Z",
        updated_at: "2021-09-15T07:00:00.000000Z"
    },
    {
        goal_id: 2,
        ledger_id: 1,
        user_id: 1,
        title: "Buy a coffee machine",
        target_income: 5000,
        current_saving: 3500,
        target_date: null,
        created_at: "2021-09-15T07:00:00.000000Z",
        updated_at: "2021-09-15T07:00:00.000000Z"
    }
];

export const LedgerContext = createContext();
export const CategoryContext = createContext();
export const TransactionsContext = createContext();


function Home({ transactions, categories, goals, ledgers }) {
    
    const { auth, ledger } = usePage().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [activeLedger, setActiveLedger] = useState(ledger);
    const route = useRoute();
    const isInitialRender = useRef(true);

    const { data, setData, post } = useForm({
        ledger: activeLedger,
    });

    // Run this effect only when `activeLedger` changes after the initial render
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false; // Set initial render flag to false
            console.log("Ledgers: ", ledgers);
            console.log("Transactions: ", transactions);
            console.log("Categories: ", categories);
            console.log("Goals: ", goals);
        } else {
            // Only post if it's not the initial render
            post(route('set-current-ledger'));
        }
    }, [activeLedger]);

    const handleSearch = (value) => setSearchTerm(value);

    const handleLedgerChange = (ledger) => {
        setData('ledger', ledger);
        setActiveLedger(ledger);
    };

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
                            <LedgerContext.Provider value={ledgers}>
                            <CategoryContext.Provider value={categories}>
                                <CreateLedgerBtn />
                                <LedgersDropdown 
                                    activeLedger={activeLedger}
                                    onLedgerChange={handleLedgerChange}
                                />
                            </CategoryContext.Provider>
                            </LedgerContext.Provider>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col lg:flex-row h-full overflow-auto gap-3 lg:gap-10">
                        {/* Left Side */}
                        <div className="flex flex-col lg:w-2/3">
                            {/* Categories */}
                            <CategoryList
                                type="expense"
                                categories={categories}
                                searchTerm={searchTerm}
                                selectedLedger={activeLedger}
                            />
                            <CategoryList
                                type="income"
                                categories={categories}
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
