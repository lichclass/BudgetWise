import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

// Custom plugin to draw background behind each bar
const backgroundPlugin = {
    id: 'backgroundPlugin',
    beforeDatasetsDraw: (chart) => {
        const { ctx, chartArea: { left, right, top, bottom }, scales: { x, y } } = chart;
        ctx.save();
        chart.data.datasets.forEach((dataset, datasetIndex) => {
            chart.getDatasetMeta(datasetIndex).data.forEach((bar, index) => {
                const barWidth = bar.width;
                const barX = bar.x - barWidth / 2;
                const backgroundColor = dataset.label === "Expenses" ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)';
                ctx.fillStyle = backgroundColor; // Conditional background color
                ctx.fillRect(barX, top, barWidth, bottom - top);
            });
        });
        ctx.restore();
    }
};

const transactionData = [
    {
        category_id: 1,
        amount: 1000,
        transaction_description: "Groceries",
        transaction_date: "2024-11-01",
        transaction_type: "expense",
    },
    {
        category_id: 2,
        amount: 500,
        transaction_description: "Utilities",
        transaction_date: "2024-11-02",
        transaction_type: "expense",
    },
    {
        category_id: 4,
        amount: 1500,
        transaction_description: "Mom's Money",
        transaction_date: "2024-11-02",
        transaction_type: "income",
    },
    {
        category_id: 3,
        amount: 2000,
        transaction_description: "Rent",
        transaction_date: "2024-11-03",
        transaction_type: "expense",
    },
    {
        category_id: 4,
        amount: 5000,
        transaction_description: "Freelance",
        transaction_date: "2024-11-04",
        transaction_type: "income",
    },
    {
        category_id: 5,
        amount: 1000,
        transaction_description: "Salary",
        transaction_date: "2024-11-05",
        transaction_type: "income",
    },
];

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
    date: new Date(item.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    }),
}));

function TransactionChart() {
    const data = {
        labels: groupedArray.map(item => item.date),
        datasets: [
            {
                label: "Expenses",
                data: groupedArray.map(item => item.total_expenses),
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 1,
            },
            {
                label: "Income",
                data: groupedArray.map(item => item.total_income),
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins:  {
            legend: {
                position: "top",
                align: "end",
                labels: {
                    color: "white", // Set legend text color to white
                },
            },
            datalabels: {
                color: "white", // Set data label text color to white
                anchor: 'end',
                align: function(contxet) {
                    return contxet.dataset.data[contxet.dataIndex] > 0 ? 'bottom' : 'top';
                },
                formatter: function(value) {
                    return value.toLocaleString();
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "white", // Set x-axis label text color to white
                },
            },
            y: {
                ticks: {
                    color: "white", // Set y-axis label text color to white
                },
            },
        },
    };

    return (
        <div className="relative w-full h-80">
            <Bar data={data} options={options} plugins={[backgroundPlugin]}/>
        </div>
    );
}

export default TransactionChart;