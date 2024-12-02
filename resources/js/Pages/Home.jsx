import { usePage, useForm } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";
import BalanceCard from "@/Components/BalanceCard";
import Main from "@/Layouts/Main";
import GoalsCardList from "@/Components/GoalsCardList";
import CategoryList from "@/Components/CategoryList";
import LedgersDropdown from "@/Components/LedgersDropdown";
import SearchBar from "@/Components/SearchBar";
import CreateLedgerBtn from "@/Components/CreateLedgerBtn";

function Home() {
    const { auth, ledger, transactions, categories, goals, ledgers, flash } =
        usePage().props;
    const [searchTerm, setSearchTerm] = useState("");
    const [activeLedger, setActiveLedger] = useState(ledger);
    const isInitialRender = useRef(true);

    const { data, setData, post } = useForm({
        ledger: activeLedger,
    });

    // Run this effect only when `activeLedger` changes after the initial render
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false; // Set initial render flag to false
        } else {
            // Only post if it's not the initial render
            post(route("set-current-ledger"));
        }
    }, [activeLedger]);

    // Check for the reload flash message and reload the page if it exists
    useEffect(() => {
        if (flash.reload) {
            console.log('reload');
            window.location.reload();
        }
    }, [flash.reload]);

    const handleSearch = (value) => setSearchTerm(value);

    const handleLedgerChange = (ledger) => {
        setData("ledger", ledger);
        setActiveLedger(ledger);
    };

    return (
        <>
            {/* Home */}
            <Head title="Home" />

            <Main navbarMsg={`Welcome back, ${auth.user.username[0].toUpperCase() + auth.user.username.slice(1)}!`}>
                <div className="flex flex-col h-full gap-3 px-4">
                    {/* Top */}
                    <div className="flex flex-col items-center lg:flex-row justify-between gap-10 lg:gap-3 mb-3">
                        <SearchBar onSearch={handleSearch} />

                        <div className="flex justify-center md:justify-end gap-4">
                            <CreateLedgerBtn />
                            <LedgersDropdown
                                activeLedger={activeLedger}
                                onLedgerChange={handleLedgerChange}
                            />
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
                            <BalanceCard balance={ledger.balance} />
                            <GoalsCardList
                                goals={goals}
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
