function DeleteBtn({ text, width, onClick, isSubmit=false }) {
    return (
        <button
            type={isSubmit ? "submit" : "button"}
            className={`text-white py-3 px-4 rounded text-md ${width} text-center hover:scale-105 transition-transform duration-300`}
            style={{
                background: "#D44242",
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default DeleteBtn;
