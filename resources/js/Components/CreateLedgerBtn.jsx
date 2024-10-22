import '../../css/btncolors.css'
import { IoIosAdd } from "react-icons/io";

function CreateLedgerBtn() {
    return (
        <button className="rounded-xl bg-select-btn py-1 px-1 pr-3 text-lime-50 flex items-center">
            <IoIosAdd className='text-3xl'/>
            Create Ledger
        </button>
    )
}

export default CreateLedgerBtn;
