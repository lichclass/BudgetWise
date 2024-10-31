import { FaEdit } from "react-icons/fa";

function BudgetCat({ category, amount, isSet }) {
    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    return (
        <>
            <div className="flex justify-between items-center bg-[#102734] rounded-xl px-4 py-2 shadow-sm h-11 sm:px-6 lg:px-8">

                {/* Category Name */}
                <span className="text-white text-sm sm:text-base lg:text-lg">{category}</span>

                {isSet ? (
                    <div className="flex gap-2 items-center text-xs sm:text-sm">
                        <button>
                            <FaEdit className="text-white text-opacity-80 transition-all duration-500 ease-in-out hover:scale-110" />
                        </button>
                        <div className="flex gap-1">
                            <span className="text-[#79BAA8] font-bold text-sm sm:text-base lg:text-lg">{formaterr.format(amount)}</span>
                            <p className="hidden sm:block self-center sm:show font-thin text-xs sm:text-sm">Monthly</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button className="border border-[#A9ADAE] text-xs text-[#E8EAE6] text-opacity-75 rounded-full px-2 py-1 transition-all duration-500 ease-in-out hover:scale-105">
                            + Add Budget
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default BudgetCat;
