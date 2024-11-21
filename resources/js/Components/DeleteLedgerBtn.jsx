import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function DeleteLedgerBtn({ ledger_id }) {
    const { delete: destroy } = useForm()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("ledger.destroy", ledger_id));
    };

    return (
        <>
            <DeleteBtn text="Delete" width="w-1/2" onClick={showModal} />
            <ModalA
                title="Delete Transaction"
                content="Are you sure you want to delete this ledger? to retrieve your data, contact Support"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default DeleteLedgerBtn;
