import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import UserList from "@/Components/AdminUsersList";

function Dashboard() {

    const users = [
        {
            user_id: 1,
            email: 'john@gmail.com',
            is_admin: true
        },
        {
            user_id: 2,
            email: 'jane@gmail.com',
            is_admin: false
        },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Welcome back, Admin'} isAdmin={true}> 

                <div className="h-full w-full flex flex-col lg:flex-row gap-6">
                    
                    <UserList className="w-1/2"
                        users={users.filter((u) => u.is_admin)}
                        title="Admin Accounts"
                    />
                    <UserList className="w-1/2"
                        users={users.filter((u) => !u.is_admin)}
                        title="User Accounts"
                    />
                </div>
                
                
                
            </Main>
        </>

    );
}

export default Dashboard;