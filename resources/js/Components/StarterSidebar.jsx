function StarterSidebar({ step }) {

    return (
        <div className="bg-lime-50 right-0 h-dvh p-6 border-l border-slate-300 shadow-md 
                        text-slate-800 flex items-center z-20">
            <ul className="steps steps-vertical mx-5 w-60 p-2 mb-24">
                <li className={`step text-sm ${step >= 1 ? 'step-primary' : ''}`}>
                    <span className="ml-3">Getting Started</span>
                </li>
                <li className={`step text-sm ${step >= 2 ? 'step-primary' : ''}`}>
                    <span className="ml-3">Creating your first ledger</span>
                </li>
                <li className={`step text-sm ${step >= 3 ? 'step-primary' : ''}`}>
                    <span className="ml-3">Choosing your categories</span>
                </li>
                <li className={`step text-sm ${step >= 4 ? 'step-primary' : ''}`}>
                    <span className="ml-3">Welcome to BudgetWise</span>
                </li>
            </ul>
        </div>
    );
}

export default StarterSidebar;