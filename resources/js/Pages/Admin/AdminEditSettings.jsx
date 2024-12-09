import Main from '@/Layouts/Main';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainInputField from '@/Components/MainInputField';
import AdminChangePassBtn from '@/Components/AdminChangePassBtn';
import GreenBtnMed from '@/Components/GreenBtnMed';
import { useForm } from "@inertiajs/react";
import AdminDeleteAccountBtn from '@/Components/AdminDeleteAccountBtn';

function AdminEditSettings({ user }) {

    const [email, setEmail] = useState(user.email);
    const [username, setUsername] = useState(user.username);
    const [editEmail, setEditEmail] = useState(false);
    const [editUsername, setEditUsername] = useState(false);

    const [isDeleteAccModalOpen, setIsDeleteAccModalOpen] = useState(false);

    const { data, setData, put } = useForm({
        username: user.username,
        email: user.email,
    });

    function submit(e) {
        e.preventDefault();
        put(route("user.update", user.user_id), {
            onSuccess: () => {
                setEditEmail(false);
                setEditUsername(false);
            }
        });
    }

    
    const handleEmailEdit = () => {
        if(editEmail) {
            setEmail(user.email);
            setData("email", user.email);
        }
        setEditEmail(!editEmail);
    }

    const handleUsernameEdit = () => {
        if(editUsername) {
            setUsername(user.username);
            setData("username", user.username);
        }
        setEditUsername(!editUsername);
    }



    return (
        <>
        
            <Head title="Edit Admin" />

            {/* Main Settings Content */}
            <Main isSettings={true} isAdmin={true}>

                {/* Account Settings Header */}
                <h1 className='text-4xl font-bold mb-10' style={{ color: "rgba(229, 239, 221, 0.95)" }}>Admin Edit</h1>

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
                    <AdminChangePassBtn user={user} />
                    <GreenBtnMed text="Save" width={"w-44"} onClick={submit}/>
                </div>

                <div className='py-10 mr-44 flex justify-between'>
                    <AdminDeleteAccountBtn user={user} />
                </div>


            </Main>
        
        </>
    )
}

export default AdminEditSettings;