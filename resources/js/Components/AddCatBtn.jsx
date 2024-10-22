import { IoIosAdd } from "react-icons/io";

function AddCatBtn() {
    return (
        <button className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border hover:bg-white hover:text-slate-700 transition">
            <IoIosAdd className="text-xl" />
            Add
        </button>
    );
}

export default AddCatBtn;
