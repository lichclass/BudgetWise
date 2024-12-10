import ReactECharts from "echarts-for-react";

function UsersVisitsChart({ users, visits }) {
    // Group users data by date
    const groupedUsersData = users.reduce((acc, user) => {
        const date = user.created_at.split("T")[0]; // Extract the date part
        if (!acc[date]) {
            acc[date] = { date, total_users: 0 };
        }
        acc[date].total_users++; // Count each user registration
        return acc;
    }, {});

    const groupedVisitsData = visits.reduce((acc, visit) => {
        const date = visit.visited_at.split(" ")[0];
        if (!acc[date]) {
            acc[date] = { date, total_visits: 0 };
        }
        acc[date].total_visits++; // Count each visit
        return acc;
    }, {});

    // Combine grouped data into a single array
    const groupedArrayUsers = Object.values(groupedUsersData).map((item) => ({
        ...item,
        date: item.date,
    }));

    const groupedArrayVisits = Object.values(groupedVisitsData).map((item) => ({
        ...item,
        date: item.date,
    }));

    // Sort the combined array by date
    groupedArrayUsers.sort((a, b) => new Date(a.date) - new Date(b.date));
    groupedArrayVisits.sort((a, b) => new Date(a.date) - new Date(b.date));

    const usersData =
        groupedArrayUsers.length > 0
            ? groupedArrayUsers.map((data) => [data.date, data.total_users])
            : [];

    const visitsData =
        groupedArrayVisits.length > 0
            ? groupedArrayVisits.map((data) => [data.date, data.total_visits])
            : [];

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
            axisLine: {
                lineStyle: { color: "#fff" },
            },
            axisLabel: {
                color: "#fff",
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                lineStyle: { color: "#fff" },
            },
            axisLabel: {
                color: "#fff",
            },
        },
        series: [
            {
                name: "Users",
                data: usersData,
                type: "line",
                itemStyle: {
                    color: "red",
                },
                lineStyle: {
                    color: "red",
                },
            },
            {
                name: "Visits",
                data: visitsData,
                type: "line",
                itemStyle: {
                    color: "#00FF00",
                },
                lineStyle: {
                    color: "#00FF00",
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
