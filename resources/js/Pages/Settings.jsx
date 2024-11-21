import Main from '@/Layouts/Main';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainInputField from '@/Components/MainInputField';
import ChangePassBtn from '@/Components/ChangePassBtn';
import GreenBtnMed from '@/Components/GreenBtnMed';
import ModalA from '@/Layouts/ModalA';
import { useForm } from "@inertiajs/react";

function Settings() {

    const { auth } = usePage().props;
    const [email, setEmail] = useState(auth.user.email);
    const [username, setUsername] = useState(auth.user.username);
    const [editEmail, setEditEmail] = useState(false);
    const [editUsername, setEditUsername] = useState(false);

    const [isDeleteAccModalOpen, setIsDeleteAccModalOpen] = useState(false);
    const showDeleteAccModal = () => setIsDeleteAccModalOpen(true);
    const handleCancelDeleteAccModal = () => setIsDeleteAccModalOpen(false);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);

    const { data, setData, put } = useForm({
        user_id: auth.user.user_id,
        username,
        email,
    });

    function submit(e) {
        e.preventDefault();
        // console.log(data);
        put(route("user.update", auth.user.user_id));
    }

    
    const handleEmailEdit = () => {
        if(editEmail) {
            setEmail(auth.user.email);
        }
        setEditEmail(!editEmail);
    }

    const handleUsernameEdit = () => {
        if(editUsername) {
            setUsername(auth.user.username);
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
                                value={email}
                                onChange={handleEmailChange}
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
                                value={username}
                                onChange={handleUsernameChange}
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

                {/* Currency Preference Header */}
                <h1 className='text-4xl font-bold mt-10' style={{ color: "rgba(229, 239, 221, 0.95)" }}>Currency Preference</h1>
                <div className='py-10 mr-44 flex justify-between'>
                    {/* Dropdown */}
                    <select 
                        className='py-3 px-8 rounded-lg shadow-sm w-44 main-input-field' 
                        style={{
                            color: "#ffffff",
                            backgroundColor: "#2C3B4B"
                        }}
                    >   
                        <option value="php">PHP</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                    <button
                        className={`text-white py-3 px-4 rounded text-md w-44 text-center hover:scale-105 transition-transform duration-300`}
                        style={{
                            background: '#D44242',
                        }}
                        onClick={showDeleteAccModal}
                    >
                        Delete Account
                    </button>
                </div>

                {/* Delete Account Modal */}
                <ModalA
                    title='Delete Account'
                    content='Are you sure you want to delete your account? All your data will be lost'
                    isModalOpen={isDeleteAccModalOpen}
                    handleCancel={handleCancelDeleteAccModal}
                />


            </Main>
        
        </>
    )
}

export default Settings;