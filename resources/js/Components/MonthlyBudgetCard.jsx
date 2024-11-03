function MonthlyBudgetCard(){

    return(
        <div className="h-16 w-full pt-3 px-8 text-2xl flex flex-row justify-between rounded-xl bg-gradient-to-r from-cyan-400 to-sky-900
        hover:transform hover:scale-105 transition-transform duration-300">
        <h1 className="font-extrabold">Monthly Budget</h1>
        <h1 className="flex flex-row">₱90,000<p className="text-xs pt-2.5">~₱2,000/day</p></h1>
        </div>
    );

}

export default MonthlyBudgetCard;