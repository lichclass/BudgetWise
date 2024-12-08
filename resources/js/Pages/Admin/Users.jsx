import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import UserList from "@/Components/AdminUsersList";

function Users({ users }) {

    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Users'} isAdmin={true}>

                <div className="h-full w-full flex flex-col lg:flex-row gap-6">

                    <UserList className="w-1/2"
                        users={users.filter((u) => u.role === 'admin')}
                        title="Admin Accounts"
                    />
                    <UserList className="w-1/2"
                        users={users.filter((u) => u.role === 'user')}
                        title="User Accounts"
                    />

                </div>

            </Main>
        </>

    );
}

export default Users;