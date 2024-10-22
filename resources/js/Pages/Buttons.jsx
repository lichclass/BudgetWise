import { Head } from "@inertiajs/react";
import GreenBtnMed from "@/Components/GreenBtnMed";
import GreenBtnLg from "@/Components/GreenBtnLg";
import GreenBtnCancel from "@/Components/GreenBtnCancel";
import DeleteBtn from "@/Components/DeleteBtn";
import AuthBtn from "@/Components/AuthBtn";
import GetStartBtnCont from "@/Components/GetStartBtnCont";
import GetStartBtnBack from "@/Components/GetStartBtnBack";
import GoBackBtn from "@/Components/GoBackBtn";
import LedgersDropdown from "@/Components/LedgersDropdown";
import CreateLedgerBtn from "@/Components/CreateLedgerBtn";
// import MonthPickerBtn from "@/Components/MonthPickerBtn";
import AddCatBtn from "@/Components/AddCatBtn"
import EditCatBtn from "@/Components/EditCatBtn"
import ChangePassBtn from "@/Components/ChangePassBtn";

function Buttons() {
    return (
        <>
        <Head title="Buttons" />
        <div className="p-10 bg-teal-900 flex justify-end space-x-4">
            <DeleteBtn text="Delete"/>
            <GreenBtnCancel text="Submit"/>
            <GreenBtnLg text="Submit"/>
            <GreenBtnMed text="Submit"/>
        </div>
        <div className="p-10 bg-teal-700 flex justify-end space-x-4">
            <AuthBtn state="active" text="Sign-in"/>
            <AuthBtn state="inactive" text="Sign-up"/>
        </div>
        <div className="p-10 bg-lime-50 flex justify-end space-x-4">
            <GetStartBtnBack />
            <GetStartBtnCont />
        </div>
        <div className="p-10 bg-teal-600 flex justify-end space-x-4">
            <GoBackBtn />
        </div>
        <div className="p-10 bg-lime-500 flex justify-end space-x-4">
            {/* <MonthPickerBtn /> */}
            <LedgersDropdown />
            <CreateLedgerBtn />
        </div>
        <div className="p-10 bg-slate-800 flex justify-end space-x-4">
            <EditCatBtn />
            <AddCatBtn />
        </div>
        <div className="p-10 bg-teal-800 flex justify-end space-x-4">
            <ChangePassBtn />
        </div>
        
        </>
    );
}

export default Buttons;
