import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import UserItem from "@/Components/AdminUsersItem";

function Dashboard() {

    const user = [
        {
            id: 1,
            email: 'john@gmail.com',
            isAdmin: true
        },
        {
            id: 2,
            email: 'jane@gmail.com',
            isAdmin: false
        }
    ];

    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Welcome back, Admin'} isAdmin={true}> 
                <div className="flex flex-col bg-[#143445] rounded p-9 gap-3">
                    {user.map((user) => (
                        <UserItem key={user.id} users={user} />
                    ))}
                </div>
            </Main>
        </>

    );
}

export default Dashboard;