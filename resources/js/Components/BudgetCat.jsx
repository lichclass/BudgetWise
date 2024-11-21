import AddBudgetBtn from "./AddBudgetBtn";
import EditBudgetBtn from "./EditBudgetBtn";

function BudgetCat({ category, budget=null }) {
    const formaterr = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    return (
        <>
            <div className="flex justify-between items-center bg-[#102734] rounded-xl px-4 py-2 shadow-sm h-11 sm:px-6 lg:px-8">
                {/* Category Name */}
                <span className="text-white text-sm sm:text-base lg:text-lg">
                    {category.category_name}
                </span>

                {budget != null ? (
                    <div className="flex gap-2 items-center text-xs sm:text-sm">
                        
                        <EditBudgetBtn category={category}></EditBudgetBtn>

                        <div className="flex gap-1">
                            <span className="text-[#79BAA8] font-bold text-sm sm:text-base lg:text-lg">
                                {formaterr.format(budget.amount_limit)}
                            </span>
                            <p className="hidden sm:block self-center sm:show font-thin text-xs sm:text-sm">
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
