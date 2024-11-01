import Main from '@/Layouts/Main'
import { usePage } from '@inertiajs/react'
import { Head } from '@inertiajs/react'

function Home() {

    const { auth } = usePage().props;

    return (
        <>
        <Head title="Home" />

        <Main navbarMsg={`Welcome back, ${auth.user.username}`}>
            
        </Main>
        </>
    )

}

export default Home;