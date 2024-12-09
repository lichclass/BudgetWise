import ReactECharts from "echarts-for-react";

function UsersVisitsChart({ users, visits }) {
    
    // const usersData = users.reduce((acc, user) => {
    //     const date = user.created_at;
    //     if (!acc[date]) {
    //         acc[date] = { date, total_users: 0, total_visits: 0 };
    //     }
    //     acc[date].total_users += 1;
    //     return acc;
    // }, {});
    
    

    const option = {
        title: {
            text: "Users and Visits Daily Data",
            textStyle: {
                color: "#fff",
            },
        },
        tooltip: {
            trigger: "axis",
            formatter: (params) => {
                const label = new Date(
                    params[0].axisValueLabel
                ).toLocaleDateString("en-us", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                });
                let tooltipContent = `${label}<br/>`; // Date label

                params.forEach((item) => {
                    const value = Array.isArray(item.value)
                        ? item.value[1]
                        : item.value;
                    tooltipContent += `${item.marker} ${item.seriesName}: ${
                        value || 0
                    }<br/>`;
                });
                return tooltipContent;
            },
        },
        legend: {
            data: ["Users", "Visits"],
            textStyle: {
                color: "#fff",
            },
            right: 0,
            align: "right",
        },
        xAxis: {
            type: "time",
            color: "#fff",
        },
        yAxis: {
            type: "value",
            color: "#fff",
        },
        series: [
            {
                name: "Users",
                // data: expenseData,
                type: "line",
                itemStyle: {
                    color: "red", // Line color for expense series
                },
                lineStyle: {
                    color: "red", // Ensure the line itself is also red
                },
            },
            {
                name: "Visits",
                // data: incomeData,
                type: "line",
                itemStyle: {
                    color: "#00FF00", // You can set a different color for income
                },
                lineStyle: {
                    color: "#00FF00", // Color for income line
                },
            },
        ],
    };

    return (
        <>
            <ReactECharts option={option} />
        </>
    );
}

export default UsersVisitsChart;
