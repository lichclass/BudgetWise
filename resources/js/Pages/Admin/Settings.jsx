import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function Settings() {
    return (
        <>
            <Head title="Edit User" />

            <Main isSettings={true} isAdmin={true}> 
            </Main>
        </>

    );
}

export default Settings;