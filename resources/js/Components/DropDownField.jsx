import React, { useState, useEffect } from 'react';

function DropDownField({ 
    label, 
    labelSize="text-lg", 
    sub_label="", 
    htmlFor, 
    name, 
    value, 
    onChange, 
    errorDisplay, 
    isReadOnly=false, 
    options = [],
    placeholder = "Select an option"
}) {
    return (
        <div className='flex flex-col space-y-2'>
            <div className="flex justify-between items-end">
                <label 
                    htmlFor={htmlFor} 
                    className={`${labelSize} font-bold`}
                    style={{
                        color: "rgba(229, 239, 221, 0.95)"
                    }}
                >
                    {label}
                </label>
                <span 
                    className="text-white text-sm"
                    style={{
                        color: "#E8EAE6"
                    }}
                >
                    {sub_label}
                </span>
            </div>
                
            <select 
                id={htmlFor} 
                name={name} 
                className={`py-3 px-4 rounded-lg shadow-sm w-full main-input-field`} 
                style={{
                    color: isReadOnly ? "#90A4AE" : "#ffffff",
                    border: errorDisplay ? '1px solid rgba(255, 0, 0, 1)' : '1px solid rgba(255, 255, 255, 0.59)',
                    backgroundColor: "#2C3B4B"
                }}
                value={value}
                onChange={onChange}
                disabled={isReadOnly}
            >

                <option value="" disabled={value !== ""}>
                    {placeholder}
                </option>

                {options.map((option, index) => (
                    <option key={index} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>

            {errorDisplay && <span className='text-sm text-red-500'>{errorDisplay}</span>}
        </div>
    );
}

export default DropDownField;