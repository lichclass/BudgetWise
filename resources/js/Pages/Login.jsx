import AuthLayout from '@/Layouts/AuthLayout'
import GreenBtnLg from '@/Components/GreenBtnLg';
import AuthInputField from '@/Components/AuthInputField';
import { useForm, usePage } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy'
import { Checkbox } from 'antd';

function Login() {

    const { flash } = usePage().props;

    const { data, setData, post, errors, processing  } = useForm({
        email: '',
        password: '',
    });

    const route = useRoute();
    

    function submit(e) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <AuthLayout isSignIn={true}>

            <div className='p-9 py-16 my-4'>

                {/* Sign-In Field Header */}
                <div className='flex items-center justify-between mb-1'>
                    <div>
                        <h1 className='text-3xl sm:text-5xl font-black tracking-tighter text-teal-800 drop-shadow-md'>
                            Sign-In
                        </h1>
                    </div>
                    <div className='pl-4 md:px-0 w-1/2'>
                        <hr className='border-gray-500 text-opacity-50 border shadow-sm w-full' />
                    </div>
                </div>


                {/* Sign-In Form */}
                <form onSubmit={submit} method="POST" className='flex flex-col space-y-4 mt-8'>

                    {/* Error Message */}
                    {flash.message && <div className='text-red-500 text-md'>*{flash.message}</div>}

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
                    

                    {/* Password */}
                    <AuthInputField 
                        label='Password' 
                        htmlFor='password' 
                        type='password' 
                        name='password' 
                        placeholder='Enter your password'
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                        
                    {/* Remember Me */}
                    <div className='flex items-center space-x-2'>
                        <Checkbox
                            name='remember'
                            className='text-md font-semibold text-teal-800'
                        >
                            Remember Me
                        </Checkbox>
                    </div>

                    {/* Submit Button */}
                    <GreenBtnLg text='Sign-In' />

                </form>

            </div>

        </AuthLayout>
    );
}

export default Login;