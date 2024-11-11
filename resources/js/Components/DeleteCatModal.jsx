import ModalA from "@/Layouts/ModalA";
import MainInputField from '@/Components/MainInputField';

function DeleteCat({isModalOpen, handleCancel}){
    return(
        <>
             <ModalA 
                title="Delete Category" 
                content="Are you sure you want to delete this Category?" 
                isModalOpen={isModalOpen} 
                handleCancel={handleCancel}
            />
        </>
    )
}

export default DeleteCat;