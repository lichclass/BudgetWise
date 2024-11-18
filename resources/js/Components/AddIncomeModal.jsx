import ModalB from "@/Layouts/ModalB";
import MainInputField from '@/Components/MainInputField';
import { useForm, usePage } from '@inertiajs/react';

function AddIncomeModal({ name, cat_id, isModalOpen, handleCancel}){

    const { ledger } = usePage().props;

    const { data, setData } = useForm({
        ledger_id: ledger.ledger_id,
        category_id: cat_id,
        amount: '',
        transaction_description: '',
        transaction_date: '',
        transaction_type: 'income',
    });

    function submit(e){
        e.preventDefault();
        console.log(data);
        // post(route('transactions.store'));
    }

    return(
        <>
        <form onSubmit={submit}>
            <ModalB 
                title="Add Income"
                subtitle={name}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={submit}
            >

            <div className="space-y-5 > *">
                <MainInputField 
                    label="Amount"
                    htmlFor="input-amount"
                    type="number"
                    name="input-amount"
                    placeholder="Enter Amount"
                    onChange={(e) => setData('amount', e.target.value)}
                />

                <MainInputField 
                    label="Description"
                    htmlFor="description"
                    type="text"
                    name="description"
                    placeholder="Enter Description (Optional)"
                    onChange={(e) => setData('transaction_description', e.target.value)}
                />

                <MainInputField 
                    label="Date"
                    sub_label='*leave blank to set it to today'
                    htmlFor="input-date"
                    type="date"
                    name="input-date"
                    placeholder="Enter the Date"
                    onChange={(e) => setData('transaction_date', e.target.value)}
                />
            </div>
            </ModalB>
        </form>
        </>
    )
}

export default AddIncomeModal;