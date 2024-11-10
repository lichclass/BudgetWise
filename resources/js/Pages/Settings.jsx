import Main from '@/Layouts/Main';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainInputField from '@/Components/MainInputField';
import ChangePassBtn from '@/Components/ChangePassBtn';
import GreenBtnMed from '@/Components/GreenBtnMed';
import DeleteBtn from '@/Components/DeleteBtn';
import ModalB from '@/Layouts/ModalB';

function Settings() {

    const { auth } = usePage().props;
    const [email, setEmail] = useState(auth.user.email);
    const [username, setUsername] = useState(auth.user.username);
    const [editEmail, setEditEmail] = useState(false);
    const [editUsername, setEditUsername] = useState(false);

    const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);

    const showChangePassModal = () => {
        setIsChangePassModalOpen(true);
    }

    const handleCancelChangePassModal = () => {
        setIsChangePassModalOpen(false);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
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
                    <ChangePassBtn onClick={showChangePassModal} />
                    <GreenBtnMed text="Save" width={"w-44"}/>
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
                    <DeleteBtn text="Delete Account" width={"w-44"}/>
                </div>

                {/* Change Password Modal */}
                <button onClick={showChangePassModal}>
                    Open Modal
                </button>
                <ModalB
                    title="Change Password"
                    isModalOpen={isChangePassModalOpen}
                    handleCancel={handleCancelChangePassModal}
                >
                    <MainInputField 
                        label="Current Password"
                        htmlFor="current-password"
                        type="password"
                        name="current-password"
                        placeholder="Enter your current password"
                    />

                    <MainInputField 
                        label="New Password"
                        htmlFor="New-password"
                        type="password"
                        name="current-password"
                        placeholder="Enter your current password"
                    />

                    <MainInputField 
                        label="Confirm Password"
                        sub_label='*Must be at least 8 characters long'
                        htmlFor="confirm-password"
                        type="password"
                        name="confirm-password"
                        placeholder="Enter your current password"
                    />

                </ModalB>

            </Main>
        
        </>
    )
}

export default Settings;