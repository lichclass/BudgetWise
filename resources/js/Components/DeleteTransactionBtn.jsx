import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import { useForm } from "@inertiajs/react";


function DeleteTransactionBtn({ transaction_id }) {
    const { data, setData, delete: destroy, processing} = useForm({
        transaction_id: transaction_id,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("transaction.destroy", { id: data.transaction_id }), {
            onSuccess: () => {
                setIsModalOpen(false);
            }
        });
    };

    return (
        <>
            <DeleteBtn text="Delete" width="w-1/2" onClick={showModal} />
            <ModalA
                title="Delete Transaction"
                content="Are you sure you want to delete this transaction?"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleSubmit}
                disableBtn={processing}
            />
        </>
    );
}

export default DeleteTransactionBtn;
