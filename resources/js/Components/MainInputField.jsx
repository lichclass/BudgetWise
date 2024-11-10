function MainInputField({ label, htmlFor, type, name, placeholder, value, onChange, errorDisplay, isReadOnly }) {
    return (
        <div className='flex flex-col space-y-3'>
            <label 
                htmlFor={htmlFor} 
                className='text-2xl font-bold'
                style={{
                    color: "rgba(229, 239, 221, 0.95)"
                }}
            >
                {label}
            </label>
            <input 
                type={type}
                id={htmlFor}
                name={name} 
                className={`py-3 px-8 rounded-lg shadow-sm w-full main-input-field`} 
                placeholder={placeholder}
                style={{
                    color: isReadOnly ? "#90A4AE" : "#ffffff",
                    border: errorDisplay ? '1px solid rgba(255, 0, 0, 1)' : '1px solid rgba(255, 255, 255, 0.59)',
                    backgroundColor: "#2C3B4B"
                }}
                value={value}
                onChange={onChange}
                maxLength={255}
                readOnly={isReadOnly}
            />
            {errorDisplay && <span className='text-sm text-red-500'>{errorDisplay}</span>}
        </div>
    );
}

export default MainInputField;