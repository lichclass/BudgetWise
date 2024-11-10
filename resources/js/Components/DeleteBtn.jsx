function DeleteBtn({ to, text, width }) {
    return (
        <button
            type='link'
            href={to}
            className={`text-white py-3 px-4 rounded text-md ${width} text-center hover:scale-105 transition-transform duration-300`}
            style={{
                background: '#D44242',
            }}
        >
            {text}
        </button>
    )
}

export default DeleteBtn