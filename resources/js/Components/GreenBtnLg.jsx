function GreenBtnLg({ to, text, type, disabled }) {
    return (
        <button
            type={type}
            {
                ...type === 'submit' ? {} : { href: to }
            }
            className={`text-white p-3 rounded-lg text-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ${type === 'submit' ? 'w-full' : ''}`}
            style={{
                background: 'linear-gradient(90deg, rgba(45, 126, 155, 0.80) 0%, rgba(72, 169, 134, 0.80) 100%)',
            }}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default GreenBtnLg