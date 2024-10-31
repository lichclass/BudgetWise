function Navbar({ text }) {
    return (
        <nav 
            className="flex justify-between items-center px-44 pr-20 relative w-screen h-[6.2rem] border-b border-gray-300 border-opacity-70"
            style={{
                backgroundColor: '#07131E',
                color: 'rgba(232, 234, 230, 0.70)',
            }}
        >
            <p className="font-extrabold text-3xl">{text}</p>
            <p className="font-medium">{ new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }</p>
        </nav>
    )
}

export default Navbar;