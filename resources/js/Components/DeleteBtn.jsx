function DeleteBtn({ text, width, onClick, isSubmit=false, disable}) {
    return (
        <button
            type={isSubmit ? "submit" : "button"}
            className={`text-white py-3 px-4 rounded text-md ${width} text-center ${
                disable
                    ? ""
                    : "hover:scale-105 transition-transform duration-300"
            }`}
            style={{
                background: disable 
                ? "rgba(138, 142, 145, 0.50)"
                : "#D44242",
            }}
            onClick={onClick}
            disabled={disable}
        >
            {text}
        </button>
    );
}

export default DeleteBtn;
