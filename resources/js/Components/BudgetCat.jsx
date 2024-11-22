import AddBudgetBtn from "./AddBudgetBtn";
import EditBudgetBtn from "./EditBudgetBtn";

function BudgetCat({ category, budget, isSet=false }) {
    const formaterr = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    return (
        <>
            <div className="flex gap-2 justify-between items-center bg-[#102734] rounded-xl px-4 py-2 shadow-sm h-11 sm:px-6 lg:px-8">
                {/* Category Name */}
                <span className="text-white text-sm sm:text-base lg:text-lg whitespace-nowrap">
                    {category.category_name}
                </span>

                {isSet ? (
                    <div className="flex gap-2 items-center text-xs sm:text-sm">
                        
                        <EditBudgetBtn budget={budget} />

                        <div className="flex gap-1 items-center">
                            <span className="text-[#79BAA8] font-bold text-base lg:text-lg">
                                {formaterr.format(budget.amount_limit)}
                            </span>
                            <p className="font-thin text-xs sm:text-sm text-[#FFFFFFB2] whitespace-nowrap">
                                Monthly
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Set Budget Modal */}
                        <AddBudgetBtn category={category}></AddBudgetBtn>
                    </div>
                )}
            </div>
        </>
    );
}

export default BudgetCat;
