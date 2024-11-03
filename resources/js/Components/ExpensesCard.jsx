function ExpensesCard(){

    return(
        <div className="h-8 w-full pt-1 my-1 px-8 text-base flex flex-row justify-between rounded-xl bg-gray-700
        hover:transform hover:scale-105 transition-transform duration-300"
        style={{
            backgroundColor: "#07131E"
        }}>
                        <h1 className="font-extrabold">Food and Drink</h1>
                        <h1 className="flex flex-row">₱90,000<p className="text-xs pt-1.5">~Monthly</p></h1>
        </div>
    );

}

export default ExpensesCard;