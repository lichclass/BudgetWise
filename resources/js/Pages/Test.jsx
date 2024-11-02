import { usePage } from '@inertiajs/react'
import { useState } from 'react'
import BalanceCard from '@/Components/BalanceCard';
import Main from '@/Layouts/Main'
import { Head } from '@inertiajs/react'
import GoalsCard from '@/Components/GoalsCardList';
import CategoryList from '@/Components/CategoryList';
import LedgersDropdown from '@/Components/LedgersDropdown';
import SearchBar from "@/Components/SearchBar";
import CreateLedgerBtn from '@/Components/CreateLedgerBtn';
import DateBtn from '@/Components/DateBtn';

function Test() {

    const { auth } = usePage().props
    const [searchTerm, setSearchTerm] = useState('');

    // Array for now
    const goals = [
        { title: "Buy Christmas Gifts", completion: 100, deadline: 30, isDeadlineSet: true },
        { title: "Save for a new phone", completion: 50, deadline: 30, isDeadlineSet: true },
        { title: "Buy a new coffee machine", completion: 25, deadline: 0, isDeadlineSet: false },
        { title: "Save for new charger", completion: 13, deadline:999 , isDeadlineSet: true },
        { title: "Responsiveness Check", completion: 13, deadline:999 , isDeadlineSet: true },
        { title: "Responsiveness Check", completion: 13, deadline: 999, isDeadlineSet: true },
    ];

    const categories = [

        { isExpense: true, category: "Food", amount: 500 },
        { isExpense: true, category: "Transportation", amount: 300 },
        { isExpense: true, category: "Personal Care", amount: 200 },
        { isExpense: true, category: "Entertainment", amount: 100 },
        { isExpense: true, category: "Health", amount: 50 },
        { isExpense: true, category: "Miscellaneous", amount: 50 },
        { isExpense: false, category: "Salary", amount: 1000 },
        { isExpense: false, category: "Gifts", amount: 500 },
        { isExpense: false, category: "Savings", amount: 200 },
    ];

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    return (
        <>
            {/* Home */}
            <Head title="Home" />

            <Main navbarMsg={`Welcome back, ${auth.user.username}`}>
                <div className="flex flex-col h-full gap-3 px-4">
                    {/* Top */}
                    <div className='flex justify-between'>
                        <SearchBar onSearch={handleSearch} />

                        <div className='flex justify-end gap-4'>
                            <DateBtn />
                            <CreateLedgerBtn />
                            <LedgersDropdown />
                        </div> 
                    </div>
                    
                    {/* Bottom */}
                    <div className='flex flex-row h-full overflow-auto gap-10'>
                        {/* Left Side */}
                        <div className='flex flex-col'>
                            {/* Categories */}
                            <CategoryList
                                isExpense={true}
                                categories={categories}
                                searchTerm={searchTerm}
                            />
                            <CategoryList
                                isExpense={false}
                                categories={categories}
                                searchTerm={searchTerm}
                            />
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col gap-3 flex-grow py-3">
                            <BalanceCard balance={1000} />
                            <GoalsCard goals={goals} />
                        </div>
                    </div>
                    
                </div>
            </Main>


        </>
    );

}

export default Test;