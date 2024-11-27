import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';


function Dashboard() {


    const users = 10;
    const visitors = 25;
    const percentIncreaseUsers = 10;
    const percentIncreaseVisits = 20;
    const transactions = 300;


    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={'Welcome back, Admin'} isAdmin={true}> 

                <div
                    className="flex flex-row shadow-xl h-48 w-full justify-evenly rounded-xl text-white border border-white/40 p-6 pb-8
                            hover:border-white/80 transition-all duration-300 pr-20"
                    style={{
                        background:
                            "linear-gradient(259deg, rgba(74, 167, 200, 0.12) -9.8%, rgba(13, 33, 47, 0.12) 119.45%)",
                    }}
                >
                    <div className="flex flex-col text-center w-36">
                        <h1 className="font-extrabold text-3xl text-gray-400">Users</h1>
                        <h1 className="font-extrabold text-5xl">{users}</h1>
                        <h1>{percentIncreaseUsers}% increase from last month</h1>
                    </div>

                    <div className="flex flex-col text-center w-36">
                        <h1 className="font-extrabold text-3xl text-gray-400">Visits</h1>
                        <h1 className="font-extrabold text-5xl">{visitors}</h1>
                        <h1>{percentIncreaseVisits}% increase from last month</h1>
                    </div>

                    <div className="flex flex-col text-center w-36 pt-3">
                        <h1 className="font-extrabold text-3xl text-gray-400">Transactions</h1>
                        <h1 className="font-extrabold text-5xl pl-9">{transactions}</h1>
                    </div>

                </div>

                <div
                    className="shadow-xl w-full rounded-xl text-white border border-white/40 p-6 pb-8 space-y-2 mt-8
                            hover:border-white/80 transition-all duration-300"
                    style={{
                        background:
                            "linear-gradient(259deg, rgba(74, 167, 200, 0.12) -9.8%, rgba(13, 33, 47, 0.12) 119.45%)",
                    }}
                >
                            <h1>Graph Here...</h1>
                </div>

            </Main>
        </>

    );
}

export default Dashboard;