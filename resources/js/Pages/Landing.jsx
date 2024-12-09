import LandingLayout from '../Layouts/LandingLayout';
import { Link } from '@inertiajs/react';
import LandingHeaderLogo from '../../../public/build/assets/Landing-Page_Logo-Header-SVG.svg'
import LandingPageLogo from '../../../public/build/assets/Landing-Page_Logo-Big-SVG.svg'
import JoinBtnBg from '../../../public/build/assets/Join-Btn-SVG.svg'
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { usePage } from '@inertiajs/react';

function Landing() {

    const route = useRoute();

    const { auth } = usePage().props;

    console.log(auth);

    return (
        <LandingLayout>
            {/* Navigation Bar */}
            <nav 
                className='px-9 py-5
                           w-full bg-slate-900 absolute rounded-full inline-flex 
                           justify-between items-center
                           md:px-16 md:py-7 md:w-5/6'
            >
                <div>
                    <a href={route('landing')} className='text-white'>
                        <img src={LandingHeaderLogo} className='w-40 md:w-48' />
                    </a>
                </div>



                <div className='inline-flex items-center text-sm md:text-lg'>
                    {
                        auth.user 
                            ? <a href={(auth.user.role == 'admin')? route('admin.dashboard'):route('home')} className='text-white'>{auth.user.username}</a>
                            : (
                                <>
                                    <a href={route('login')} className='text-white'>Sign-in</a>
                                    <div className='divider divider-horizontal mx-0 before:bg-slate-500 after:bg-slate-500'></div>
                                    <a href={route('register')} className='text-white'>Register</a>
                                </>
                            )
                    }
                </div>
            </nav>

            {/* Body */}
            <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="text-5xl font-bold text-white text-center w-full md:w-5/12">Ready to take control of your money?</h1>
                <div className='flex w-5/6 md:w-2/5 py-5'>
                    <img src={LandingPageLogo} className='w-24 md:w-36' />
                    <div className='divider divider-horizontal before:bg-slate-500 after:bg-slate-500'></div>
                    <div className='flex flex-col justify-between'>
                        <p className='text-white'>BudgetWise is here to help you save smart, budget better, and reach your financial goals without all the fuss</p>
                        <Link 
                            href={route('register')}
                            className=' text-white text-center rounded-full px-5 py-2 mt-5 font-bold text-lg md:text-2xl'
                            style={{backgroundImage: `url(${JoinBtnBg})`, backgroundSize: 'cover'}}
                        >
                            JOIN NOW
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='md:absolute md:bottom-0 flex p-3'>
                <a href="">Facebook Page: BudgetWise</a>
                <div className='divider divider-horizontal before:bg-slate-500 after:bg-slate-500'></div>
                <a href="">Twitter: BudgetWise</a>
                <div className='divider divider-horizontal before:bg-slate-500 after:bg-slate-500'></div>
                <a href="">Instagram: BudgetWise</a>
            </footer>
        </LandingLayout>
    );
}

export default Landing;