import { usePage } from '@inertiajs/react'
import BalanceCard from '@/Components/BalanceCard';
import CategoryCard from '@/Components/CategoryCard';

function Test() {

    const { auth } = usePage().props

    return (
        <>
            <div className='text-4xl text-white text-center'>
                {
                    auth.user 
                        ? <h1>Is Logged in</h1>
                        : <h1>Is not Logged in</h1>
                }
            </div>

            <BalanceCard balance={1000} />
            <CategoryCard
                 category="Food"
                 amount={500}
            />
        </>
    );

}

export default Test;