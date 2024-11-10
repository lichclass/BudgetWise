function GreenBtnMed({ to, text, width }) {
    return (
        <button
            type='link'
            href={to}
            className={`text-white py-3 px-4 rounded text-md ${width} text-center hover:scale-105 transition-transform duration-300`}
            style={{
                background: 'linear-gradient(90deg, rgba(45, 126, 155, 0.80) 0%, rgba(72, 169, 134, 0.80) 100%)',
            }}
        >
            {text}
        </button>
    )
}

export default GreenBtnMed