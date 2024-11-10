import ModalB from "@/Layouts/ModalB";
import MainInputField from '@/Components/MainInputField';

function AddIncomeModal({isModalOpen, handleCancel}){
    return(
        <>
            <ModalB 
                title="Add Income"
                subtitle="Salary"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            >

            <div className="space-y-5 > *">
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
                    placeholder="Enter Description (Optional)"
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
            </ModalB>
        </>
    )
}

export default AddIncomeModal;