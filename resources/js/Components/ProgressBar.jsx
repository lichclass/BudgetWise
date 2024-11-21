function ProgressBar({ progress }) {

    const config = {
        step1 : [
            'Active', 'Inactive', 'Inactive', 'Inactive', 1
        ],
        step2 : [
            'Completed', 'Active', 'Inactive', 'Inactive', 2
        ],
        step3 : [
            'Completed', 'Completed', 'Active', 'Inactive', 3
        ],
        step4 : [
            'Completed', 'Completed', 'Completed', 'Active', 4
        ],
    };

    const barStyles = {
        Active: "bg-teal-500",
        Inactive: "bg-gray-400",
        Completed: "bg-teal-900",
    };

    const barDesign = config[progress] || config.step1;

    return (

        <div className="w-fit">
            <div className="flex space-x-2">
                <div className={`h-[10px] w-[50px] rounded-full shadow-md ${barStyles[barDesign[0]]}`}></div>
                <div className={`h-[10px] w-[50px] rounded-full shadow-md ${barStyles[barDesign[1]]}`}></div>
                <div className={`h-[10px] w-[50px] rounded-full shadow-md ${barStyles[barDesign[2]]}`}></div>
                <div className={`h-[10px] w-[50px] rounded-full shadow-md ${barStyles[barDesign[3]]}`}></div>
            </div>
            <span className="text-xs text-black">{barDesign[4]} of 4</span>
        </div>
        
    );
}

export default ProgressBar;