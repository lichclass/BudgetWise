function MonthlyBudgetCard({ budgetedExpenses }){

    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    const monthlyBudget = budgetedExpenses.reduce((acc, budget) => 
        acc + parseFloat(budget.amount_limit), 0
    );

    const dailyBudget = monthlyBudget / 30;

    return(
        <>
            <div className={`w-full py-6 px-6 text-2xl xl:px-8 flex flex-col lg:flex-row gap-2 justify-between items-center rounded-xl bg-gradient-to-r from-[#7FC7B3A3] to-[#084A73A3]`}>
                <h1 className="font-extrabold">Monthly Budget</h1>
                <div className="flex flex-row gap-2">
                    <h1 className="text-[#91D7C3] font-bold">{formaterr.format(monthlyBudget)}</h1>
                    <p className="text-[#FFFFFFB2] font-extralight text-xs self-end whitespace-nowrap">~ {formaterr.format(dailyBudget)}/day</p>
                </div>
            </div>
        </>
        
    );

}

export default MonthlyBudgetCard;