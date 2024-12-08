import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from 'react'
import { useForm } from "@inertiajs/react";
 
function DeleteCatBtn({ cat_id }) {

    const { data, setData, delete: destroy, processing} = useForm({
        category_id: cat_id,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        destroy(route("ledger-category.destroy", data.category_id), {
            onSuccess: () => {
                setIsModalOpen(false);
            }
        });
    }

    return (
        <>
            <DeleteBtn text="Delete" width="w-1/2" onClick={showModal} />
            <ModalA
                title="Delete Category"
                content="Are you sure you want to delete this Category?"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleSubmit}
                disableBtn={processing}
            />
        </>
    );
}

export default DeleteCatBtn;
