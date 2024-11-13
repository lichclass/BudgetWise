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
                deleteTitle="Category"
                deleteContent="Are you sure you want to delete this category?"
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