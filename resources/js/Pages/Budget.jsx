import Main from "@/Layouts/Main";
import { useEffect } from "react";
import { usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';

import BudgetTable from '@/Components/BudgetTable';
import ExpensesCard from '@/Components/ExpensesCard';
import LegendBtn from '@/Components/LegendBtn';
import MonthlyBudget from '@/Components/MonthlyBudgetCard';

// Temporary
import BudgetCat from "@/Components/BudgetCat";

function Budget({ budgets, expenses }){

    useEffect(() => {
        console.log("Budgets: ", budgets);
        console.log("Expenses: ", expenses);
    }, []);

    return (
        <>
            <Head title="Budget"/>

            <Main navbarMsg={'Budget'}>
                {
                    <div className="h-full md:w-full flex flex-row">   
                
                        {/*Main Content*/}   
                    <div className="h-full w-full m-0 relative flex flex-col rounded-xl">
                
                        <div className="h-7 flex flex-row text-white justify-between pt-3 px-8">
                            <h1>-Expenses-</h1>
                            <h1>-Budget-</h1>
                            <h1>-Personal- -Date-</h1>
                        </div>
                
                    {/* Top */}
                        <div className="h-64 md:border md:border-gray-600 flex flex-col md:flex-row m-6 pt-2 px-0 rounded-t-xl">
                            
                        {/* Left */}
                            <div className="w-full md:w-1/2 border border-gray-600 md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-1 rounded-none flex flex-row justify-between pt-3 px-6">
                            
                            {/* Meter */}
                                <div>
                                    <h1>-----Meter-----</h1>
                                </div>
                
                            {/* Legend */}
                                <div className="w-1/2 flex flex-wrap">
                                    <LegendBtn></LegendBtn>
                                </div>
                
                            </div>
                
                        {/* Right */}
                            <div className="w-full md:w-1/2 border border-gray-600 md:border-0 flex flex-col mt-9 md:-mt-2 pt-4 px-5 rounded-none md:rounded-tr-xl"
                            style={{
                                backgroundColor: "rgba(26, 66, 87, 0.28)"
                            }}>
                                {/* Monthly Budget Card */}
                                <MonthlyBudget></MonthlyBudget>
                
                                    {/* Expenses Overview */}
                                <div className="h-full md:w-full pt-2 flex flex-col">
                                        <BudgetCat category="Food" amount={1000} isSet={true} />
                                        <BudgetCat category="Transportation" amount={0} isSet={false} />
                                </div>
                
                            </div>
                
                        </div>
                
                        {/* Bottom */}
                        <div className="h-72 w-full md:w-auto border border-gray-600 flex flex-col md:flex-row mt-40 md:-mt-6 mb-6 mx-6 pt-1 px-2 rounded-none md:rounded-b-xl">    
                            <BudgetTable></BudgetTable>
                        </div>
                
                            
                        </div>
                
                    </div>
                
                }
            </Main>

        </>
    );
}

export default Budget;