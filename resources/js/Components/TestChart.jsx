import ReactECharts from 'echarts-for-react';

function TestChart({ transactionData }) {

    const groupedData = transactionData.reduce((acc, transaction) => {
        const date = transaction.transaction_date;
        if (!acc[date]) {
            acc[date] = { date, total_expenses: 0, total_income: 0 };
        }
        if (transaction.transaction_type === "expense") {
            acc[date].total_expenses += transaction.amount;
        } else if (transaction.transaction_type === "income") {
            acc[date].total_income += transaction.amount;
        }
        return acc;
    }, {});
    
    const groupedArray = Object.values(groupedData).map(item => ({
        ...item,
        date: item.date,
    }));

    const expenseData = groupedArray.length > 0 
        ? groupedArray.map((transaction) => [transaction.date, transaction.total_expenses])
        : [];
    
    const incomeData = groupedArray.length > 0 
        ? groupedArray.map((transaction) => [transaction.date, transaction.total_income])
        : [];

    const option = {
        title: {
            text: 'Transaction History',
            textStyle: {
                color: '#fff',
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                const label = new Date(params[0].axisValueLabel).toLocaleDateString("en-us", {
                    weekday: "short",
                     month: "short",
                    day: "numeric",
                }); 
                let tooltipContent = `${label}<br/>`; // Date label
                params.forEach((item) => {
                    tooltipContent += `${item.marker} ${item.seriesName}: ${item.value[1]}<br/>`; // Series name and value
                });
                return tooltipContent;
            },
        }, 
        legend: {
            data: ['Expenses', 'Income'],
            textStyle: {
                color: '#fff',
            },
            right: 0,
            align: 'right',
        },
        xAxis: {
            type: 'time',
            color: '#fff',
        },
        yAxis: {
            type: 'value',
            color: '#fff',
        },
        series: [
            {
                name: 'Expenses',
                data: expenseData,
                type: 'line',
                itemStyle: {
                    color: 'red',  // Line color for expense series
                },
                lineStyle: {
                    color: 'red',  // Ensure the line itself is also red
                },
            },
            {   
                name: 'Income',
                data: incomeData,
                type: 'line',
                itemStyle: {
                    color: '#00FF00',  // You can set a different color for income
                },
                lineStyle: {
                    color: '#00FF0',  // Color for income line
                },
            }
        ]
      };

    return (
        <>
            <ReactECharts option={option} />
        </>
    );
}

export default TestChart;