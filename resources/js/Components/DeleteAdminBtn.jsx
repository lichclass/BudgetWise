import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function DeleteAdminBtn({ user_id }) {
    const { delete: destroy } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("user.destroy", user_id));
    };

    return (
        <>
            <DeleteBtn text="Delete" width="w-1/2" onClick={showModal} />
            <ModalA
                title="Delete Admin"
                content="Are you sure you want to delete this Admin Account?"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default DeleteAdminBtn;