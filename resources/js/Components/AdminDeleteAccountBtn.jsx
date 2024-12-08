import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function AdminDeleteAccountBtn({ user }) {
    const { delete: destroy, processing } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleDelete = (e) => {
        e.preventDefault();
        destroy(route("user.destroy", {id: user.user_id}), {
            onSuccess: () => {
                setIsModalOpen(false);
            }
        });
    };

    return (
        <>
            <button
                className={`text-white py-3 px-4 rounded text-md w-44 text-center hover:scale-105 transition-transform duration-300`}
                style={{
                    background: '#D44242',
                }}
                onClick={showModal}
            >
                Delete Account
            </button>
                {/* Delete Account Modal */}
            <ModalA
                title='Delete Account'
                content='Are you sure you want to delete your account? All your data will be lost. To retrieve your account, contact support, or it may be lost forever.'
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleDelete}
                disableBtn={processing}
            />
        </>
    );
}

export default AdminDeleteAccountBtn;
