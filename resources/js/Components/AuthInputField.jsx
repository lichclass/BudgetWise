function AuthInputField({ label, htmlFor, type, name, placeholder, value, onChange, errorDisplay }) {
    return (
        <div className='flex flex-col space-y-1'>
            <label htmlFor={htmlFor} className='text-md font-medium text-teal-800'>{label}</label>
            <input 
                type={type}
                id={htmlFor}
                name={name} 
                className={`p-3 rounded-lg shadow-sm bg-transparent w-full text-black`} 
                placeholder={placeholder}
                style={{
                    border: errorDisplay ? '1px solid rgba(255, 0, 0, 1)' : '1px solid rgba(0, 0, 0, 0.30)',
                }}
                value={value}
                onChange={onChange}
            />
            {errorDisplay && <span className='text-sm text-red-500'>{errorDisplay}</span>}
        </div>
    );
}

export default AuthInputField;