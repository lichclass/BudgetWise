function ExpenseProgressBar ({completion = 0}){

    return (
        <div className="w-full h-6 rounded-full bg-[#0A1C29] bg-opacity-25 flex items-center">
            <div className={`h-6 bg-blue-600 ${
                completion < 100 ? "rounded-l-full" : "rounded-full"
                    } bg-gradient-to-r from-[#79BAA8] to-[#195676]`}
                    style={{ width: `${completion}%` }}
            >
                <h1 className="">{completion}%</h1>
            </div>
        </div>
    );
}

export default ExpenseProgressBar;