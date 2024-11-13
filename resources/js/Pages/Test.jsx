import Main from "@/Layouts/Main";
import { usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import BudgetTable from '@/Components/BudgetTable';
import ExpensesCard from '@/Components/ExpensesCard';
import LegendCard from '@/Components/LegendBtn';
import MonthlyBudget from '@/Components/MonthlyBudgetCard';

// Temporary
import BudgetCat from "@/Components/BudgetCat";

function Budget(){
    const { auth } = usePage().props;
    const { budget } = usePage().props;

return (
    <>
        <Head title="Budget"/>

        <Main navbarMsg={'Budget'}>
            <div className="flex flex-col gap-3 lg:gap-0 h-full px-4 overflow-auto">
                {/* Top */}
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0">
                    {/* Pie */}
                    <div className="flex flex-col md:flex-row gap-3 justify-evenly items-center px-12 py-16 w-full lg:w-1/2 border lg:rounded-tl-xl">
                        <h1 className="text-xl font-bold"> Pie Graph Here </h1>
                        <div className="w-4/5 md:w-2/5"><LegendCard /></div>
                    </div>

                    {/* Monthly Budget */}
                    <div className="flex flex-col gap-2 w-full lg:w-1/2 p-7 border lg:rounded-tr-xl overflow-auto bg-[#143445]">
                        <MonthlyBudget
                            monthlyBudget = {90000}
                            dailyBudget = {20}
                         />
             
                        {/* Expenses Overview */}
                        <div className="h-full md:w-full pt-2 flex flex-col gap-3">
                                <BudgetCat category="Food" amount={1000} isSet={true} />
                                <BudgetCat category="Transportation" amount={0} isSet={false} />
                                <BudgetCat category="Utilities" amount={0} isSet={false} />
                                <BudgetCat category="Rent" amount={0} isSet={false} />
                                <BudgetCat category="Health" amount={0} isSet={false} />
                                <BudgetCat category="Education" amount={0} isSet={false} />
                                <BudgetCat category="Entertainment" amount={0} isSet={false} />
                         </div>
                    </div>
                </div>

                {/* Bottom */}

                {/* Table */}
                <div className="border lg:rounded-b-xl p-7">
                    <BudgetTable budget={budget}/>
                </div>

            </div>

                
            
        </Main>

    </>
);
}

export default Budget;