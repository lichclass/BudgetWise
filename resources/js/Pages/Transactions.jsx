import Main from '@/Layouts/Main'
import { usePage } from '@inertiajs/react'
import { Head } from '@inertiajs/react'

function Transactions() {

    const { auth } = usePage().props;
    const { transactions } = usePage().props;

    return (
        <>
        <Head title="Transactions" />

        <Main navbarMsg={`Transactions`}>
            
        </Main>
        </>
    )

}

export default Transactions;