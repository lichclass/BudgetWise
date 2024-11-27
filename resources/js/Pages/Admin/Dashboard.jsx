import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import UserItem from "@/Components/AdminUsersItem";

function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Welcome back, Admin'} isAdmin={true}> 
                <div className="">
                    <UserItem 
                        id={1}
                        name={'John Doe'}
                        isAdmin={true}
                    />
                    <UserItem 
                        id={2}
                        name={'Jane Doe'}
                        isAdmin={false}
                    />
                </div>
            </Main>
        </>

    );
}

export default Dashboard;