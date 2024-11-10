function ChangePassBtn({ onClick }) {
    return (
        <button 
            className="rounded-xl font-thin text-slate-300 border-slate-300 border bg-transparent text-md px-6 py-3 hover:scale-105 transition"
            onClick={onClick}
        >
            Change Password
        </button>
    );
}

export default ChangePassBtn