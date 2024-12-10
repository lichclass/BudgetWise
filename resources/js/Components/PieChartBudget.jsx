import ReactECharts from "echarts-for-react";
import LegendBtn from '@/Components/BudgetLegendList';

function PieChartBudget({ budgets }) {


    const totalAmount = budgets.reduce((acc, budget) => acc + parseFloat(budget.amount_limit), 0);

    const data = budgets.map((budget) => ({
        value: budget.amount_limit,
        name: budget.category_name,
    }));

    const colorPalette = [
        '#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
    ];

    const option = {
        color: colorPalette,
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: "Expense",
                type: "pie",
                radius: ["50%", "85%"],
                avoidLabelOverlap: false,
                padAngle: 5,
                itemStyle: {
                    borderRadius: 10,
                },
                label: {
                    show: false,
                    position: "center",
                },
                labelLine: {
                    show: false,
                },
                data: data,
            },
        ],
    };

    return (
        <>
            <div className="flex flex-col justify-center" style={{ width: "40%", height: "100%" }}>
                <ReactECharts option={option} />
            </div>
            {/* Legend */}
            <div className="w-3/5 lg:w-2/5 flex flex-wrap">
                <LegendBtn
                    categories={budgets.map((budget, index) => ({ 
                        category_name: budget.category_name,
                        color: colorPalette[index % colorPalette.length],
                        percentage: ((parseInt(budget.amount_limit) / parseInt(totalAmount)) * 100), // Calculate percentage
                    }))}
                />
            </div>
        </>
    );
}

export default PieChartBudget;
