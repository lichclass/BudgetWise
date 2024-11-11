import ModalC from "@/Layouts/ModalC";
import MainInputField from '@/Components/MainInputField';

function EditCatModal({isModalOpen, handleCancel}){
    return(
        <>
            <ModalC 
                title="Edit Category"
                subtitle="Food & Drink"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            >

                    <div className="space-y-5 > * mb-8">
                        <MainInputField 
                            label="Name"
                            htmlFor="cat-name"
                            type="text"
                            name="cat-name"
                            placeholder="Food & Drink"
                        />
                    </div>
            </ModalC>
        </>
    )
}

export default EditCatModal;