function LegendBtn(categories) {
    return (
        <div className="flex flex-col border border-gray-600 shadow-xl h-full w-full rounded-lg hover:border-gray-400 transition-all duration-300">
            <div className="border-b border-gray-600 text-white h-10 w-full rounded-t-lg text-1xl font-extrabold py-2 px-4">
                <h1>Legend</h1>
            </div>

            <div className="flex flex-col text-white py-5 px-4 gap-2 item">
                {categories.categories.map((category) => (
                    <div
                        key={category.category_name}
                        className="flex flex-row gap-1 items-center"
                    >
                        <div
                            className="min-h-3 min-w-3 border-4 rounded-full mr-1"
                            style={{ borderColor: category.color }}
                        ></div>
                        <div className="flex flex-row justify-between w-full">
                            <p className="text-sm">{category.category_name}</p>
                            <span className="text-sm text-slate-300">
                                {parseFloat(category.percentage).toFixed(0)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LegendBtn;
