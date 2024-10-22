import Main from '@/Layouts/Main';
import { usePage } from '@inertiajs/react';

function Home() {

    const { auth } = usePage().props;

    return (
        <Main>
            <div className='text-4xl text-white'>
                <h1>Welcome, {auth.user.first_name}</h1>
            </div>
        </Main>
    )

}

export default Home;