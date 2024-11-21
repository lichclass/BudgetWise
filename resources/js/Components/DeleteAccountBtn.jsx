import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';

function DeleteAccountBtn() {
    const { delete:destroy } = useForm();
    const { auth } = usePage().props;
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
   
    const handleDelete = (e) => {
        e.preventDefault();
        destroy(route("user.destroy", {id: auth.user.user_id}));
    };

    return (
        <>
            <DeleteBtn text="Delete" width="w-1/2" onClick={showModal} />
            <ModalA
                title='Delete Account'
                content='Are you sure you want to delete your account? All your data will be lost'
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleDelete}
            />
        </>
    );
}

export default DeleteAccountBtn;