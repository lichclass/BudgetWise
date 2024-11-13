function MonthlyBudgetCard({monthlyBudget, dailyBudget}){

    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    return(
        <>
            <div className={`h-20 w-full py-6 px-4 xl:px-8 text-2l md:text-2xl flex flex-row justify-between items-center rounded-xl bg-gradient-to-r from-[#7FC7B3] to-[#084A73]`}>
                <h1 className="font-extrabold">Monthly Budget</h1>
                <div className="flex flex-row gap-2">
                    <h1 className="text-[#91D7C3] font-bold">{formaterr.format(monthlyBudget)}</h1>
                    <p className="text-xs self-end">~ {formaterr.format(dailyBudget)}/day</p>
                </div>
            </div>
        </>
        
    );

}

export default MonthlyBudgetCard;