import Main from "@/Layouts/Main";
import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import UsersVisitsChart from "@/Components/UsersVisitsChart";
import { format, subMonths, getMonth, getYear } from "date-fns";

function Dashboard({ users, visits, transactions }) {
    const userCount = users.length;
    const visitorCount = visits.length;
    const transactionCount = transactions.length;

    const [percentUsers, setPercentUsers] = useState(0);
    const [percentVisits, setPercentVisits] = useState(0);

    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={"Welcome back, Admin"} isAdmin={true}>
                <div
                    className="flex flex-row shadow-xl h-48 w-full justify-evenly rounded-xl text-white border border-white/40 p-6 pb-8
                            hover:border-white/80 transition-all duration-300 pr-20"
                    style={{
                        background:
                            "linear-gradient(259deg, rgba(74, 167, 200, 0.12) -9.8%, rgba(13, 33, 47, 0.12) 119.45%)",
                    }}
                >
                    <div className="flex flex-col text-center w-36">
                        <h1 className="font-extrabold text-3xl text-gray-400">
                            Users
                        </h1>
                        <h1 className="font-extrabold text-5xl">{userCount}</h1>
                        <h1>
                            {percentUsers}% increase from last month
                        </h1>
                    </div>

                    <div className="flex flex-col text-center w-36">
                        <h1 className="font-extrabold text-3xl text-gray-400">
                            Visits
                        </h1>
                        <h1 className="font-extrabold text-5xl">
                            {visitorCount}
                        </h1>
                        <h1>
                            {percentVisits}% increase from last month
                        </h1>
                    </div>

                    <div className="flex flex-col text-center w-36 pt-3">
                        <h1 className="font-extrabold text-3xl text-gray-400">
                            Transactions
                        </h1>
                        <h1 className="font-extrabold text-5xl pl-9">
                            {transactionCount}
                        </h1>
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
                    <UsersVisitsChart users={users} visits={visits} />
                </div>
            </Main>
        </>
    );
}

export default Dashboard;
