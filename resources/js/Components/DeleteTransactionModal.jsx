import ModalA from "@/Layouts/ModalA";
import MainInputField from '@/Components/MainInputField';

function DeleteTransactionModal({isModalOpen, handleCancel}){
    return(
        <>
             <ModalA 
                title="Delete Transaction" 
                content="Are you sure you want to delete this transaction?" 
                isModalOpen={isModalOpen} 
                handleCancel={handleCancel}
            />
        </>
    )
}

export default DeleteTransactionModal;