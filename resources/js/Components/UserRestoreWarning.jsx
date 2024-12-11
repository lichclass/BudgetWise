import ModalA from "@/Layouts/ModalA";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function UserRestoreWarning({ user }) {
    const { put, processing } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const submitRestore = (e) => {
        e.preventDefault();
        put(route("admin.restore-user", {id: user.user_id}));
    }

    return (
        <>
            <button
                className={`text-white py-3 px-4 rounded text-md w-44 text-center hover:scale-105 transition-transform duration-300`}
                style={{
                    background: "#D44242",
                }}
                onClick={showModal}
            >
                Restore User
            </button>
            {/* Delete Account Modal */}
            <ModalA
                title="Warning: Restoring Deleted User"
                content="Are you sure you want to restore this account? This account will be restored and become accessible again."
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={submitRestore}
                disableBtn={processing}
                deleteBtnCustom="Restore"
            />
        </>
    );
}

export default UserRestoreWarning;
