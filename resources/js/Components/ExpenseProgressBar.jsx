function ExpenseProgressBar({ completion = 0, budget }) { 

    return (
        <div className="w-full h-12 rounded-lg bg-[#37474F] bg-opacity-25 flex items-center">
            <div className={`h-12 flex items-center ${completion < 100 ? "bg-[#2E7C99]" : "bg-[#9E4242]"} ${
                completion < 100 ? "rounded-l-lg" : "rounded-lg"
                    }`}
                    style={{ width: `${completion}%` }}
            >

                {budget == 0 &&
                    <h1 className="text-white whitespace-nowrap px-5 font-semibold">N/A</h1>
                }

                {budget != 0 && 
                    <h1 className="text-white whitespace-nowrap px-5 font-semibold">{completion.toFixed(2)}% {completion > 100 ? "exceeding" : "spent"}</h1>
                }

                
            </div>
        </div>
    );
}

export default ExpenseProgressBar;