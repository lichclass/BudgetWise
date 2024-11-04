import Main from "@/Layouts/Main";
import { usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';

import BudgetTable from '@/Components/BudgetTable';
import ExpensesCard from '@/Components/ExpensesCard';
import LegendBtn from '@/Components/LegendBtn';
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
            {
                 <div className="h-full w-full flex flex-row">   
             
                     {/*Main Content*/}   
                 <div className="h-full w-full m-0 relative flex flex-col rounded-xl">
             
                     <div className="h-7 flex flex-row text-white justify-between pt-3 px-8">
                         <h1>-Expenses-</h1>
                         <h1>-Budget-</h1>
                         <h1>-Personal- -Date-</h1>
                     </div>
             
                 {/* Top */}
                     <div className="h-64 border border-gray-600 flex flex-row m-6 pt-2 px-0 rounded-t-xl">
                         
                     {/* Left */}
                         <div className="w-1/2 border border-gray-600 border-l-0 border-t-0 border-b-0 border-r-1 flex flex-row justify-between -mt-2 pt-3 px-6">
                         
                          {/* Meter */}
                             <div>
                                 <h1>-----Meter-----</h1>
                             </div>
             
                          {/* Legend */}
                             <div>
                                 <LegendBtn></LegendBtn>
                             </div>
             
                         </div>
             
                       {/* Right */}
                         <div className="w-1/2 flex flex-col -mt-2 pt-4 px-5 rounded-tr-xl"
                         style={{
                            backgroundColor: "rgba(26, 66, 87, 0.28)"
                        }}>
                              {/* Monthly Budget Card */}
                             <MonthlyBudget></MonthlyBudget>
             
                                  {/* Expenses Overview */}
                             <div className="h-full w-full pt-2 flex flex-col">
                                 <BudgetCat category="Food" amount={1000} isSet={true} />
                             </div>
             
                         </div>
             
                     </div>
             
                     {/* Bottom */}
                     <div className="h-72 border border-gray-600 flex -mt-6 mb-6 mx-6 pt-1 px-2 rounded-b-xl">    
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