import Main from "@/Layouts/Main";
import { usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import MonthlyBudget from "@/Components/MonthlyBudgetCard";
import PieChartBudget from "@/Components/PieChartBudget";

// Temporary
import BudgetCat from "@/Components/BudgetCat";

function Budget() {
    const { budgets, categories, ledger } = usePage().props;

    const expenses = categories.filter((category) => {
        return (
            category.category_type === "expense" &&
            category.ledger_id === ledger.ledger_id
        );
    });

    const { budgetedExpenses, nonBudgetedExpenses } = expenses.reduce(
        (acc, category) => {
            const budget = budgets.find(
                (budget) => budget.category_id === category.category_id
            );
            if (budget) {
                acc.budgetedExpenses.push(budget);
            } else {
                acc.nonBudgetedExpenses.push(category);
            }
            return acc;
        },
        { budgetedExpenses: [], nonBudgetedExpenses: [] }
    );

    return (
        <>
            <Head title="Budget" />

            <Main navbarMsg={"Budget"}>
                {/*Main Content*/}
                <div className="h-full w-full flex flex-col gap-4 lg:gap-0 overflow-auto">
                    {/* Top */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-0">
                        {/* Left */}
                        <div className="flex flex-col gap-5 lg:flex-row w-full lg:w-1/2 lg:border-r-0 border border-gray-600 rounded-xl lg:rounded-r-none lg:rounded-b-none justify-evenly py-4 items-center">
                            {/* Meter */}
                            <PieChartBudget budgets={budgetedExpenses} />
                        </div>

                        {/* Right */}
                        <div className="flex flex-col h-96 w-full lg:w-1/2 border border-gray-600 rounded-xl lg:rounded-l-none lg:rounded-b-none px-6 py-6 gap-4 bg-[#143445] overflow-auto">
                            {/* Monthly Budget Card */}
                            <MonthlyBudget
                                budgetedExpenses={budgetedExpenses}
                            />

                            {/* Expenses Overview */}
                            <div className="h-full md:w-full flex flex-col gap-2">
                                {budgetedExpenses.map((budget) => (
                                    <BudgetCat
                                        key={budget.category_id}
                                        category={{
                                            category_name: budget.category_name,
                                        }}
                                        budget={budget}
                                        isSet={true}
                                    />
                                ))}
                                {nonBudgetedExpenses.map((category) => (
                                    <BudgetCat
                                        key={category.category_id}
                                        category={category}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
}

export default Budget;
