import Calendar from 'react-calendar';
import '../../css/customCalendar.css'
import { useState } from 'react';

function TransactionCalendar({ transactions, onDateChange }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const groupedData = transactions.reduce((acc, transaction) => {
        const date = transaction.transaction_date;
        const amount = parseFloat(transaction.amount);
        if (!acc[date]) {
            acc[date] = { date, total_expenses: 0, total_income: 0 };
        }
        if (transaction.transaction_type === "expense") {
            acc[date].total_expenses += amount;
        } else if (transaction.transaction_type === "income") {
            acc[date].total_income += amount;
        }
        return acc;
    }, {});
    
    const groupedArray = Object.values(groupedData);

    // Function to render custom content in tiles
    const renderTileContent = ({ date, view }) => {
        const dateString = date.toLocaleDateString('en-CA');
        const transaction = groupedArray.find(item => item.date === dateString);
        if (view === 'month' && transaction) {
            return (
                <div className="custom-tile-content">
                    {transaction.total_expenses > 0 && 
                        <p className="text-red-700">
                            {transaction.total_expenses.toLocaleString('en-PH', {
                                style: 'currency',
                                currency: 'PHP',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </p>}
                    {transaction.total_income > 0 && 
                        <p className="text-green-600">
                            {transaction.total_income.toLocaleString('en-PH', {
                                style: 'currency',
                                currency: 'PHP',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </p>}
                </div>
            );
        }
        return null;
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange(date);
    }

    return (
        <div 
            className='rounded-xl px-3 flex-grow'
            style={{
                backgroundColor: 'rgba(8, 20, 31, 0.40)'
            }}
        >
            <Calendar 
                tileContent={renderTileContent}
                onChange={handleDateChange}
                value={selectedDate}
            />
        </div>
    );
}

export default TransactionCalendar;