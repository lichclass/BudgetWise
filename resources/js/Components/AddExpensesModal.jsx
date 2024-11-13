import ModalB from "@/Layouts/ModalB";
import MainInputField from '@/Components/MainInputField';

function AddExpensesModal({ name, isModalOpen, handleCancel}){
    return(
        <>
            <ModalB
                title="Add Expense"
                subtitle={name}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                large="true"
            >

                    <div className = "flex flex-row">
                        <div className="w-1/2 flex flex-col pl-2">
                            <div className="h-1/2">
                                <h1 className="text-xl text-gray-50">Budget</h1>
                            </div>
                            <div className="h-1/2">
                                <h1 className="text-xl text-gray-50">Spent</h1>
                                <h1 className="text-4xl text-green-300">₱ 900 / ₱ 1,000</h1>
                            </div>
                        </div>

                        <div className="w-1/2 space-y-4 > *">
                            <MainInputField 
                                label="Amount"
                                htmlFor="input-amount"
                                type="number"
                                name="input-amount"
                                placeholder="Enter Amount"
                            />

                            <MainInputField 
                                label="Description"
                                htmlFor="description"
                                type="text"
                                name="description"
                                placeholder="Enter Description"
                            />

                            <MainInputField 
                                label="Date"
                                sub_label='*leave blank to set it to today'
                                htmlFor="input-date"
                                type="date"
                                name="input-date"
                                placeholder="Enter the Date"
                            />
                        </div>
                    </div>
            </ModalB>
        </>
    )
}

export default AddExpensesModal;