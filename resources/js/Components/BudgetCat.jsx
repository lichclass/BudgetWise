import { FaEdit } from "react-icons/fa";

function BudgetCat({ category, amount, isSet }) {

    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    return (

        <>
            
            <div className="flex justify-between items-center bg-[#102734] rounded-xl px-8 py-2 shadow-sm h-11">
                {FaEdit}
                <span className="text-white">{category}</span>

                {isSet &&
                    <div className="flex gap-3 items-center">
                        <button><FaEdit className="text-white text-opacity-80 text-sm transition-all duration-500 ease-in-out hover:scale-110" /></button>
                        <div className="flex gap-1">
                            <span className="text-[#79BAA8] font-bold">{formaterr.format(amount)}</span>
                            <p className="font-thin">Monthly</p>
                        </div>
                    
                    </div>
                }
                
                {!isSet &&
                <div className="">
                    <button className="border border-[#A9ADAE] text-xs text-[#E8EAE6] text-opacity-75 rounded-full px-6 py-1 transition-all duration-500 ease-in-out hover:scale-105">
                        + Add Budget
                    </button>
                </div>
                }

            </div>
            

        </>
    );
}

export default BudgetCat;