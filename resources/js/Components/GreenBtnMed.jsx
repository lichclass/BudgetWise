function GreenBtnMed({ text, width, onClick, disabled = false }) {
    return (
        <button
            type="submit"
            className={`text-white py-3 px-4 rounded text-md ${width} text-center ${
                disabled
                    ? ""
                    : "hover:scale-105 transition-transform duration-300"
            }`}
            style={{
                background: disabled
                    ? "rgba(138, 142, 145, 0.50)"
                    : "linear-gradient(90deg, rgba(45, 126, 155, 0.80) 0%, rgba(72, 169, 134, 0.80) 100%)",
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default GreenBtnMed;
