import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import MonthPicker from "@/Components/MonthPicker";

function Dashboard() {
    const [selectedMonth, setSelectedMonth] = useState(new Date());

    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={"Welcome back, Admin"} isAdmin={true}>
                <MonthPicker selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            </Main>
        </>
    );
}

export default Dashboard;
