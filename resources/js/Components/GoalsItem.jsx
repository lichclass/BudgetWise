import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// I made another one as to not disrupt the original GoalsCard.jsx file

function GoalsItem({ title, completion, isDeadlineSet, deadline }) {

    const buttonStyle = "text-white text-opacity-70 bg-transparent text-xs flex items-center justify-center rounded-md border border-white border-opacity-30 px-2 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1 whitespace-nowrap";

    return (
        <>
            <div className="bg-[#0F3A51] rounded-lg px-8 pb-5 pt-3 flex flex-col gap-y-2 border border-transparent hover:border-white/30 transition-all duration-200 ease-in-out shadow-sm">

                {/* Header */}
                <div className="flex justify-between gap-1">
                    <h1 className="">{title}</h1>
                    <button><FaEdit className="text-white text-opacity-80 transition-all duration-500 ease-in-out hover:scale-110" /></button>
                </div>
                

                {/* Progress Bar */}
                <div className="w-full h-6 rounded-full bg-[#0A1C29] bg-opacity-25 flex items-center">
                    <div className={`h-6 bg-blue-600 ${completion < 100 ? "rounded-l-full" : "rounded-full"} bg-gradient-to-r from-[#79BAA8] to-[#195676]`} style={{ width: `${completion}%` }}></div>
                    {/* <p className="absolute">{completion}%</p> */}
                </div>

                {/* Deadline, Add, & Withdraw */}
                <div className="flex flex-row-reverse justify-between items-center gap-2 flex-nowrap">

                    <div className="flex gap-1">
                        <button className={`${buttonStyle}`}>
                            <FaPlus className="text-xs" />
                            <p className={`font-thin`}>Add Money</p>
                        </button>

                        <button className={`${buttonStyle}`}>
                            <FaMinus className="text-xs" />
                            <p className={`font-thin`}>Withdraw</p>
                        </button>
                    </div>

                    <p className="text-[#E8EAE69E] font-thin text-sm">
                        {completion < 100
                            ? (isDeadlineSet ? "Days Remaining: " + deadline : "No Deadline Set")
                            : "Goal Completed!"}
                    </p>

                </div>

                {/* 
                <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-2">

                    <div className="flex gap-2">
                        <button className={`text-white text-opacity-70 bg-transparent text-xs sm:text-sm flex items-center justify-center rounded-md border border-white border-opacity-30 px-2 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1`}>
                            <FaPlus className="text-xs" />
                            <p className={`font-thin`}>Add Money</p>
                        </button>

                        <button className={`text-white text-opacity-70 bg-transparent text-xs sm:text-sm flex items-center justify-center rounded-md border border-white border-opacity-30 px-2 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1`}>
                            <FaMinus className="text-xs" />
                            <p className={`font-thin`}>Withdraw</p>
                        </button>
                    </div>

                    <p className="text-[#E8EAE69E] font-thin text-xs sm:text-sm">
                        {isDeadlineSet ? "Days Remaining: " + deadline : "No Deadline Set"}
                    </p> 

                </div> */}



            </div>
        </>
    );

}

export default GoalsItem;