import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function EditAdmin() {
    return (
        <>
            <Head title="Edit Admin" />

            <Main isSettings={true} isAdmin={true}> 
            </Main>
        </>

    );
}

export default EditAdmin;