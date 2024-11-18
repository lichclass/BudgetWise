import ModalC from "@/Layouts/ModalC";
import MainInputField from '@/Components/MainInputField';
import { useForm } from '@inertiajs/react'

function EditCatModal({isModalOpen, handleCancel}){

    const { data, setData } = useForm({
        category_name: '',
    });   

    function submit(e) {
        e.preventDefault();
        console.log(data);
    }

    return(
        <>
        <form onSubmit={submit}>
            <ModalC 
                title="Edit Category"
                subtitle="Food & Drink"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                deleteTitle="Category"
                deleteContent="Are you sure you want to delete this category?"
                onClick={submit}
            >
                <div className="space-y-5 > * mb-8">
                    <MainInputField 
                        label="Name"
                        htmlFor="category_name"
                        type="text"
                        name="cat-name"
                        placeholder="Food & Drink"
                        onChange={(e) => setData('category_name', e.target.value)}
                    />
                </div>
            </ModalC>
        </form>
        </>
    )
}

export default EditCatModal;