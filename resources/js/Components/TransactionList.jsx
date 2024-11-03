import TransactCat from "./TransactCat";
import { FaCalendarAlt } from "react-icons/fa";

function TransactionList() {
    return (
        <div className="flex flex-col h-full space-y-2">

            {/* Date */}
            <div className="py-3 px-4 flex justify-between items-center">
                <span className="text-3xl font-extrabold">Wed, Oct 10</span>
                <FaCalendarAlt className="text-2xl opacity-70"/>
            </div>

            {/* Day Summary */}
            <div 
                className="rounded-2xl flex justify-between py-4 px-10"
                style={{
                    backgroundColor: '#174A65'
                }}
            >
                <div className="text-center">
                    <p className="text-sm font-bold">Income</p>
                    <p className="text-green-500 font-bold text-lg">₱1,000</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold">Expenses</p>
                    <p className="text-red-500 font-bold text-lg">₱1,000</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold">Balance</p>
                    <p className="font-bold text-lg">₱1,000</p>
                </div>
            </div>

            {/* Transactions */}
            <div 
                className="rounded-2xl p-3 flex-grow"
                style={{
                    backgroundColor: '#174A65'
                }}
            >   
                <div className="flex items-center px-2">
                    <span className="font-bold text-xl pr-4">Transactions</span>
                    <div className="w-full">
                        <hr className="border-gray-300 text-opacity-50 border shadow-sm w-full" />
                    </div>
                </div>

                {/* Transaction List */}
                <div className="flex flex-col py-2 space-y-2 overflow-y-auto max-h-[20vh]">
                    <TransactCat 
                        category="Food & Drinks" 
                        amount={1000} 
                        time={"12:00 PM"}
                        description="Lunch at Jollibee"
                        isIncome={false}
                    />
                    <TransactCat 
                        category="Food & Drinks" 
                        amount={1000} 
                        time={"12:00 PM"}
                        description="Lunch at Jollibee"
                        isIncome={false}
                    />
                    <TransactCat 
                        category="Food & Drinks" 
                        amount={1000} 
                        time={"12:00 PM"}
                        description="Lunch at Jollibee"
                        isIncome={false}
                    />
                    <TransactCat 
                        category="Food & Drinks" 
                        amount={1000} 
                        time={"12:00 PM"}
                        description="Lunch at Jollibee"
                        isIncome={false}
                    />
                    <TransactCat 
                        category="Food & Drinks" 
                        amount={1000} 
                        time={"12:00 PM"}
                        description="Lunch at Jollibee"
                        isIncome={false}
                    />
                </div>

            </div>

        </div>
    );
}

export default TransactionList;