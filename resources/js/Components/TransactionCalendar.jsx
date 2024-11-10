import Calendar from 'react-calendar';
import '../../css/customCalendar.css'
import { useState } from 'react';

const data = [
    {
        date: '2024-10-27',
        expenses: 500,
        income: 0,
    },
    {
        date: '2024-11-24',
        expenses: 1000,
        income: 100,
    }, 
    {
        date: '2024-11-17',
        expenses: 300,
        income: 500,
    },
    {
        date: '2024-11-03',
        expenses: 300,
        income: 200,
    },
    {
        date: '2024-11-04',
        expenses: 0,
        income: 500,
    },
    {
        date: '2024-11-10',
        expenses: 1400,
        income: 600,
    },
]

function TransactionCalendar({ transactions, onDateChange }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Function to render custom content in tiles
    const renderTileContent = ({ date, view }) => {
        const dateString = date.toLocaleDateString('en-CA');
        const transaction = data.find(item => item.date === dateString);
        if (view === 'month' && transaction) {
            return (
                <div className="custom-tile-content">
                    {transaction.expenses > 0 && <p className="text-red-700">₱{transaction.expenses.toLocaleString()}</p>}
                    {transaction.income > 0 && <p className="text-green-600">₱{transaction.income.toLocaleString()}</p>}
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