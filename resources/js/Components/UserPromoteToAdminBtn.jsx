import ModalA from "@/Layouts/ModalA";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function UserPromoteToAdminBtn({ user }) {
    const { put, processing } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    function submit(e) {
        e.preventDefault();
        put(route("admin.promote-to-admin", user.user_id), {
            onSuccess: () => {
                setIsChangePassModalOpen(false);
            },
        });
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
                Promote to Admin
            </button>
            {/* Delete Account Modal */}
            <ModalA
                title="Warning: Promoting User to Admin"
                content="Are you sure you want to promote this account? This account will be able to access admin privileges."
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={submit}
                disableBtn={processing}
                deleteBtnCustom="Promote"
            />
        </>
    );
}

export default UserPromoteToAdminBtn;
