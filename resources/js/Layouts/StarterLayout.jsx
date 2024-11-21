import StarterSidebar from "@/Components/StarterSidebar"

function StarterLayout({ children, step }) {
    return (
        <div className="bg-lime-50 lg:h-dvh flex justify-between">
            <div className="w-full z-10 p-16 md:pr-40 relative min-h-screen">
                {children}
            </div>
            <StarterSidebar step={step}/>
        </div>
    );
}

export default StarterLayout;