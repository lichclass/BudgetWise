import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Welcome back, Admin'} isAdmin={true}> 
            </Main>
        </>

    );
}

export default Dashboard;