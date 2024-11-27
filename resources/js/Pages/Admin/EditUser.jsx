import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function EditUser() {
    return (
        <>
            <Head title="Edit User" />

            <Main isSettings={true} isAdmin={true}> 
            </Main>
        </>

    );
}

export default EditUser;