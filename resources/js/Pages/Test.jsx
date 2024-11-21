import Main from "@/Layouts/Main";
import { usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import BudgetTable from '@/Components/BudgetTable';
import ExpensesCard from '@/Components/ExpensesCard';
import LegendCard from '@/Components/LegendBtn';
import MonthlyBudget from '@/Components/MonthlyBudgetCard';
import { FaRegEdit } from "react-icons/fa";
import ModalC from "@/Layouts/ModalC";
import { useState } from "react";

// Temporary
import BudgetCat from "@/Components/BudgetCat";
import MainInputField from "@/Components/MainInputField";

import EditLedgerBtn from "@/Components/EditLedgerBtn";

function Test(){
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <>
            <Head title="Budget"/>

            <Main navbarMsg={'Budget'}>
                
                <EditLedgerBtn />
                
            </Main>
            
        </>
    );
}

export default Test;