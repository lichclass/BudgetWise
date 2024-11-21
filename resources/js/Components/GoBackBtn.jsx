import { FaArrowLeft } from "react-icons/fa6";

function GoBackBtn() {
    return (
        <button 
            onClick={() => window.history.back()}
            className="flex items-center border-2 rounded-lg py-1 px-2 font-bold shadow-lg text-lime-50 hover:bg-lime-50 hover:text-teal-800 hover:bg-opacity-80 hover:border-transparent transition"
        >
            <FaArrowLeft />
            Go Back
        </button>
    );
}

export default GoBackBtn