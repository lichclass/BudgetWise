import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Admin Dashboard'} isAdmin={true}> 
                test
            </Main>
        </>

    );
}

export default Dashboard;