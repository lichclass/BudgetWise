function GetStartBtnCont({ onClick, disabled, isLast }) {
    
    return <button
                type={isLast ? 'submit' : 'button'}
                onClick={isLast ? null : onClick}
                className={`text-lg font-bold text-lime-50 border-teal-800 bg-teal-800 border-2 py-4 rounded-full disabled:opacity-50
                            ${isLast ? 'px-16' : 'px-12'} hover:bg-teal-900 hover:text-lime-50 transition`}
                disabled={disabled}
            >
                {isLast ? 'Finish' : 'Continue'}
            </button>;
}

export default GetStartBtnCont;
