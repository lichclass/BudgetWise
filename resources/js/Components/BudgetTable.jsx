function BudgetTable(){

    return(
        <div className="h-60 w-full border border-gray-600 shadow-xl rounded-lg hover:transform space-y-2 flex-col">
    
                <div className="border-b border-gray-600 text-white h-10 rounded-t-lg text-1xl font-extrabold justify-between py-2 px-16 flex flex-row gap-3"
                style={{
                    backgroundColor: "rgba(26, 66, 87, 0.28)"
                }}>
                    <h1>Period</h1>
                    <h1>Budget</h1>
                    <h1>Spent</h1>
                    <h1>Remaining</h1>
                </div>

                <div className="object-center text-white text-center  py-2 px-14 justify-between flex flex-row">
                        <div className="flex flex-col">
                            <p>Items Here</p>
                            <p>Items Here</p>
                            <p>Items Here</p>
                        </div>

                        <div className="flex flex-col">
                            <p>Items Here</p>
                            <p>Items Here</p>
                            <p>Items Here</p>
                        </div>

                        <div className="flex flex-col">
                            <p>Items Here</p>
                            <p>Items Here</p>
                            <p>Items Here</p>
                        </div>

                        <div className="flex flex-col">
                            <p>Items Here</p>
                            <p>Items Here</p>
                            <p>Items Here</p>
                        </div>
                </div>

        </div>
    );

}

export default BudgetTable;