import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function Users() {
    return (
        <>
            <Head title="Users" />

            <Main navbarMsg={'Users'} isAdmin={true}> 
                test2
            </Main>
        </>

    );
}

export default Users;