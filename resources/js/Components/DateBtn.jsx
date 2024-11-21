import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function DateBtn() {
    const [view, setView] = useState('Month'); // Initial view is 'Month'

    const handlePrevious = () => {
        switch (view) {
            case 'Month':
                setView('Week');
                break;
            case 'Week':
                setView('Day');
                break;
            case 'Day':
                setView('Month');
                break;
            default:
                break;
        }
    };

    const handleNext = () => {
        switch (view) {
            case 'Month':
                setView('Day');
                break;
            case 'Week':
                setView('Month');
                break;
            case 'Day':
                setView('Week');
                break;
            default:
                break;
        }
    };

    return (
        <div className="rounded-xl bg-select-btn w-[126px] py-1 px-3 text-lime-50 flex justify-center items-center">
            <button onClick={handlePrevious}>
                <IoIosArrowBack className='text-xl' />
            </button>
            <h1 className="mx-2">{view}</h1>
            <button onClick={handleNext}>
                <IoIosArrowForward className='text-xl' />
            </button>
        </div>
    );
}

export default DateBtn;
