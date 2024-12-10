import { getMonth, getYear, subMonths } from "date-fns";

export function computePercentUsers({ users }) {
    const currentMonth = new Date();
    const lastMonth = subMonths(new Date(), 1);

    const currentMonthUsers = users.filter((user) => {
        const userDate = new Date(user.created_at);
        return (
            getMonth(userDate) === getMonth(currentMonth) &&
            getYear(userDate) === getYear(currentMonth) && 
            user.role === "user"
        );
    }).length;

    const lastMonthUsers = users.filter((user) => {
        const userDate = new Date(user.created_at);
        return (
            getMonth(userDate) === getMonth(lastMonth) &&
            getYear(userDate) === getYear(lastMonth) &&
            user.role === "user"
        );
    }).length;


    const percentage = () => {
        if (lastMonthUsers === 0) {
            return 100;
        }
        return ((currentMonthUsers - lastMonthUsers) / lastMonthUsers) * 100;
    };
        
    return percentage().toFixed(2);
}

export function computePercentVisits({ visits }) {
    const currentMonth = new Date();
    const lastMonth = subMonths(new Date(), 1);

    const currentMonthVisits = visits.filter((visit) => {
        const visitDate = new Date(visit.created_at);
        return (
            getMonth(visitDate) === getMonth(currentMonth) &&
            getYear(visitDate) === getYear(currentMonth)
        );
    }).length;

    const lastMonthVisits = visits.filter((visit) => {
        const visitDate = new Date(visit.created_at);
        return (
            getMonth(visitDate) === getMonth(lastMonth) &&
            getYear(visitDate) === getYear(lastMonth)
        );
    }).length;

    const percentage = () => {
        if (lastMonthVisits === 0) {
            return 100;
        }
        return ((currentMonthVisits - lastMonthVisits) / lastMonthVisits) * 100;
    };

    return percentage().toFixed(2);
}

