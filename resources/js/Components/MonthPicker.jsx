import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../css/datepicker.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { addMonths, subMonths } from "date-fns";

const MonthPicker = ({ selectedMonth, setSelectedMonth }) => {

    const handlePrevMonth = () => {
        setSelectedMonth(subMonths(selectedMonth, 1));
    };

    const handleNextMonth = () => {
        setSelectedMonth(addMonths(selectedMonth, 1));
    }

    return (
        <div className="flex items-center bg-[#295E69] rounded-2xl px-3">
            <button onClick={handlePrevMonth}><FaChevronLeft /></button>
            <DatePicker
                selected={selectedMonth}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM - yyyy"
                showMonthYearPicker
                className="text-center border-none bg-transparent"
            />
            <button onClick={handleNextMonth}><FaChevronRight /></button>
        </div>
    );
};

export default MonthPicker;
