function ExpenseProgressBar({ completion = 0 }) {
    
    completion = completion.toFixed(2);

    return (
        <div className="w-full h-12 rounded-lg bg-[#37474F] bg-opacity-25 flex items-center">
            <div className={`h-12 flex items-center ${completion < 100 ? "bg-[#2E7C99]" : "bg-[#9E4242]"} ${
                completion < 100 ? "rounded-l-lg" : "rounded-full"
                    }`}
                    style={{ width: `${completion}%` }}
            >
                <h1 className="text-white whitespace-nowrap px-5 font-semibold">{completion}% {completion > 100 ? "Exceeding" : "Spent"}</h1>
            </div>
        </div>
    );
}

export default ExpenseProgressBar;