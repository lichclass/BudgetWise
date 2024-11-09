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
import BudgetCat  from '@/Components/BudgetCat';

function Test() {

    return (
        <>
            <BudgetCat category="Food" amount={1000} isSet={true} />
        </>
    )

}

export default Test;