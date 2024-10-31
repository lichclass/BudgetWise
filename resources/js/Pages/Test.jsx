import { usePage } from '@inertiajs/react'
import BalanceCard from '@/Components/BalanceCard';
import CategoryCard from '@/Components/CategoryCard';
import TransactCat from '@/Components/TransactCat';
import BudgetCat from '@/Components/BudgetCat';
import ArrayTest from '@/Components/ArrayTest';
import Navbar from '@/Components/Navbar';

function Test() {

    const { auth } = usePage().props

    return (
        <>
            {/* <div className='text-4xl text-white text-center'>
                {
                    auth.user 
                        ? <h1>Is Logged in</h1>
                        : <h1>Is not Logged in</h1>
                }
            </div> */}

            {/* <BalanceCard balance={1000} />
            <CategoryCard
                 category="Food"
                 amount={500}
            />

            <div className='flex flex-col bg-sky-900 rounded-2xl p-8 w-1/2 gap-2 m-4 h-52 overflow-auto'>
                <TransactCat
                    category="Food"
                    amount={500}
                    time="10/23/2024"
                    description="This is a test description"
                    isIncome={true}
                />
                
                <TransactCat
                    category="Salary"
                    amount={500}
                    time="10/23/2024"
                    description="This is a test description"
                    isIncome={false}
                />
            </div>

            <div className='flex flex-col bg-sky-900 rounded-2xl p-8 w-1/2 gap-2 m-4'>
                <BudgetCat
                    category={"Food & Drinks"}
                    amount={500}
                    isSet={true}
                />

                <BudgetCat
                    category={"Personal Care"}
                    amount={500}
                    isSet={false}
                />
            </div>  */}


            {/* <ArrayTest />                    */}
            <Navbar />


        </>
    );

}

export default Test;