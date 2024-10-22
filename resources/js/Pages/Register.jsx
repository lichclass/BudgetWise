import AuthLayout from '@/Layouts/AuthLayout'
import GreenBtnLg from '@/Components/GreenBtnLg';
import AuthInputField from '@/Components/AuthInputField';
import { useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy'

function Login() {

    const { data, setData, post, errors, processing  } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
    });   

    const route = useRoute();

    function submit(e) {
        e.preventDefault();
        post(route('register'));
    }

    return (
        <AuthLayout isSignIn={false}>

        <div className='px-2 py-5 m-4'>

            {/* Sign-In Field Header */}
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-black tracking-tighter text-teal-800 drop-shadow-md'>
                        Register
                    </h1>
                </div>
                <div className='pl-4 md:px-0 w-1/2'>
                    <hr className='border-gray-500 text-opacity-50 border shadow-sm w-full' />
                </div>
            </div>


            {/* Sign-In Form */}
            <form onSubmit={submit} method="POST" className='flex flex-col space-y-4'>

                {/* First Name and Last Name */}
                <div className='flex w-full space-x-3'>
                    <AuthInputField 
                        label='First Name' 
                        htmlFor='first-name' 
                        type='text' 
                        name='first-name' 
                        placeholder='Enter your first name'
                        className='w-1/2'
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        errorDisplay={errors.first_name}
                    />
                    <AuthInputField 
                        label='Last Name' 
                        htmlFor='last-name' 
                        type='text' 
                        name='last-name' 
                        placeholder='Enter your last name'
                        className='w-1/2'
                        value={data.last_name}
                        onChange={(e) => setData('last_name', e.target.value)}
                        errorDisplay={errors.last_name}
                    />
                </div>

                {/* Email */}
                <AuthInputField 
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
                <AuthInputField 
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
                <AuthInputField 
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
                <AuthInputField 
                    label='Confirm Password' 
                    htmlFor='confirm-password' 
                    type='password' 
                    name='password_confirmation' 
                    placeholder='Confirm your password'
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}  
                    errorDisplay={errors.password_confirmation}
                />

                {/* Submit Button */}
                <GreenBtnLg 
                    text='Sign-up' 
                    type="submit" 
                    disabled={processing} 
                />

            </form>

        </div>
            
        </AuthLayout>
    );
}

export default Login;