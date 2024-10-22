function Landing({ children }) {
    return (
        <div className="landing-bg h-dvh px-3 pt-5">
            <div className="landing-bg-overlay h-full relative flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}

export default Landing;