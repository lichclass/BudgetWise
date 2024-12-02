import Main from '@/Layouts/Main';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainInputField from '@/Components/MainInputField';
import ChangePassBtn from '@/Components/ChangePassBtn';
import GreenBtnMed from '@/Components/GreenBtnMed';
import { useForm } from "@inertiajs/react";
import DeleteAccountBtn from '@/Components/DeleteAccountBtn';

function Settings() {

    const { auth } = usePage().props;
    const [email, setEmail] = useState(auth.user.email);
    const [username, setUsername] = useState(auth.user.username);
    const [editEmail, setEditEmail] = useState(false);
    const [editUsername, setEditUsername] = useState(false);

    const [isDeleteAccModalOpen, setIsDeleteAccModalOpen] = useState(false);
    const showDeleteAccModal = () => setIsDeleteAccModalOpen(true);
    const handleCancelDeleteAccModal = () => setIsDeleteAccModalOpen(false);
    // const handleEmailChange = (e) => setEmail(e.target.value);
    // const handleUsernameChange = (e) => setUsername(e.target.value);

    const { data, setData, put } = useForm({
        username: auth.user.username,
        email: auth.user.email,
    });

    function submit(e) {
        e.preventDefault();
        // console.log(data);
        put(route("user.update", auth.user.user_id));
    }

    
    const handleEmailEdit = () => {
        if(editEmail) {
            setEmail(auth.user.email);
            setData("email", auth.user.email);
        }
        setEditEmail(!editEmail);
    }

    const handleUsernameEdit = () => {
        if(editUsername) {
            setUsername(auth.user.username);
            setData("username", auth.user.username);
        }
        setEditUsername(!editUsername);
    }



    return (
        <>
        
            <Head title="Settings" />

            {/* Main Settings Content */}
            <Main isSettings={true}>

                {/* Account Settings Header */}
                <h1 className='text-4xl font-bold mb-10' style={{ color: "rgba(229, 239, 221, 0.95)" }}>Account Settings</h1>

                {/* Account Settings Section */}
                <div className='flex flex-col space-y-7'>
                    
                    {/* Email */}
                    <div className='flex items-end'>
                        <div className='w-full'>
                            <MainInputField 
                                label="Email"
                                htmlFor="email"
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                errorDisplay=""
                                isReadOnly={!editEmail}
                            />
                        </div>
                        <button 
                            className='p-4 mx-10 text-slate-300 transition hover:text-white hover:underline'
                            onClick={handleEmailEdit}
                        >
                            Change
                        </button>
                    </div>

                    <div className='flex items-end'>
                        <div className='w-full'>
                            <MainInputField 
                                label="Username"
                                htmlFor="username"
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={(e) => setData("username", e.target.value)}
                                errorDisplay=""
                                isReadOnly={!editUsername}
                            />
                        </div>
                        <button 
                            className='p-4 mx-10 text-slate-300 transition hover:text-white hover:underline'
                            onClick={handleUsernameEdit}
                        >
                            Change
                        </button>
                    </div>

                </div>
                
                <div className='py-10 mr-44 flex justify-between'>
                    <ChangePassBtn></ChangePassBtn>
                    <GreenBtnMed text="Save" width={"w-44"} onClick={submit}/>
                </div>

                <div className='py-10 mr-44 flex justify-between'>
                    <DeleteAccountBtn />
                </div>


            </Main>
        
        </>
    )
}

export default Settings;