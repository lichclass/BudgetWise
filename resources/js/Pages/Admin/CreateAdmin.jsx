import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import GreenBtnLg from '@/Components/GreenBtnLg';
import { useForm } from '@inertiajs/react'
import MainInputField from "@/Components/MainInputField";

function CreateAdmin() {

    const { data, setData, post, errors, processing  } = useForm({
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
    });   

    function submit(e) {
        e.preventDefault();
        post(route('admin.registerAdmin'));
    }

    return (
        <>
        <Head title="Create Admin" />

        <Main isAdmin={true}>

            <div className='h-full w-full py-5 overflow-auto'>

                {/* Sign-In Field Header */}
                <div className='w-full flex items-center justify-between mb-8'>
                    <div>
                        <h1 className='w-full text-3xl sm:text-4xl font-black tracking-tighter text-white drop-shadow-md whitespace-nowrap'>
                            Create Admin
                        </h1>
                    </div>
                    <div className='w-full pl-8'>
                        <hr className='border-gray-500 text-opacity-50 border shadow-sm w-full' />
                    </div>
                </div>


                {/* Sign-In Form */}
                <form onSubmit={submit} className='h-full flex flex-col gap-20'>

                    <div className="w-full flex flex-col gap-4">
                        {/* Email */}
                        <MainInputField 
                            label='Email' 
                            htmlFor='email' 
                            type='text' 
                            name='email' 
                            placeholder='Enter your email'
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            errorDisplay={errors.email}
                        />

                        {/* Username */}
                        <MainInputField 
                            label='Username' 
                            htmlFor='username' 
                            type='text' 
                            name='username' 
                            placeholder='Enter your username'
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            errorDisplay={errors.username}
                        />

                        {/* Password */}
                        <MainInputField 
                            label='Password' 
                            htmlFor='password' 
                            type='password' 
                            name='password' 
                            placeholder='Enter your password'
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            errorDisplay={errors.password}
                        />

                        {/* Confirm Password */}
                        <MainInputField 
                            label='Confirm Password' 
                            htmlFor='confirm-password' 
                            type='password' 
                            name='password_confirmation' 
                            placeholder='Confirm your password'
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}  
                            errorDisplay={errors.password_confirmation}
                        />
                    </div>

                    {/* Submit Button */}
                    <GreenBtnLg 
                        text='Create' 
                        type="submit" 
                        disabled={processing} 
                    />

                </form>

            </div>
            
            </Main>
        </>
    );
}

export default CreateAdmin;