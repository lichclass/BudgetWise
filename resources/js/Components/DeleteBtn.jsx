function DeleteBtn({ text, width, to, onClick }) {
    return (
        <button
            className={`text-white py-3 px-4 rounded text-md ${width} text-center hover:scale-105 transition-transform duration-300`}
            style={{
                background: '#D44242',
            }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default DeleteBtn