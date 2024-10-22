import AuthLogo from '../../../public/build/assets/SignIn_Logo-White-SVG.svg';
import GoBackBtn from '@/Components/GoBackBtn';
import AuthBtn from '@/Components/AuthBtn';
import { useRoute } from "../../../vendor/tightenco/ziggy"

function AuthLayout({ children, isSignIn }) {

    const config = [
        {
            signInPage: true,
            state1: 'active',
            state2: 'inactive',
            heading: 'Welcome Back!',
            body: 'Let\'s dive back into your journey to smarter saving!',
        },
        {
            signInPage: false,
            state1: 'inactive',
            state2: 'active',
            heading: 'Welcome!',
            body: 'Already have an account? ',
        }
    ];

    const route = useRoute();


    const { signInPage, heading, body, state1, state2 } = config[isSignIn ? 0 : 1];
    

    return (
        <div className="auth-bg h-dvh flex items-center justify-center">
            
            {/* Authentication Container */}
            <div className='container max-w-5xl p-3 bg-lime-50 flex rounded-2xl'>

                <div className='w-full lg:w-1/2'>
                    {children}
                </div>

                {/* Welcome Message */}
                <div className='hidden lg:block md:w-1/2 auth-welcome-bg p-7 rounded-2xl items-center justify-center'>

                    {/* Heading */}
                    <div className='flex justify-between'>
                        <GoBackBtn />
                        <a href={route('landing')}><img src={AuthLogo} className='w-28'/></a>
                    </div>

                    {/* Body */}
                    <div className='flex flex-col items-center space-y-5 py-20 rounded-2xl px-20'>
                        <div className='text-4xl text-lime-50 text-center font-bold pb-4'>{heading}</div>
                        <AuthBtn state={state1} text='Sign-in' to={route('login')}/>
                        <AuthBtn state={state2} text='Register'to={route('register')}/>
                        <hr className='border border-white w-full opacity-70' />
                        <div className='text-center text-white text-sm w-5/6 font-medium'>
                            {body}
                            {signInPage ? "" : <a href={route('login')} className='text-lime-50 text-sm'>Sign-in</a> }
                        </div>
                    </div>


                </div>
                
            </div>

        </div>
    );
}

export default AuthLayout;