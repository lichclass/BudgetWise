import ModalB from "@/Layouts/ModalB";
import MainInputField from "@/Components/MainInputField";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

function AdminChangePassBtn({ user }) {

    const { data, setData, put, processing, errors } = useForm({
        user_id: user.user_id,
        new_password: "",
        new_password_confirmation: "",
    });

    const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);

    const showChangePassModal = () => setIsChangePassModalOpen(true);
    const handleCancelChangePassModal = () => setIsChangePassModalOpen(false);

    function submit(e) {
        e.preventDefault();
        put(route("admin.force-change-pass", user.user_id), {
            onSuccess: () => {
                setIsChangePassModalOpen(false);
                data.new_password = "";
                data.new_password_confirmation = "";
            },
        });
    }

    return (
        <>
            <button
                className="rounded-xl font-thin text-slate-300 border-slate-300 border bg-transparent text-md px-6 py-3 hover:scale-105 transition"
                onClick={showChangePassModal}
            >
                Change Password
            </button>

            {/* Change Password Modal */}
            <ModalB
                title="Change Password"
                isModalOpen={isChangePassModalOpen}
                handleCancel={handleCancelChangePassModal}
                onSubmit={submit}
                disableBtn={processing}
            >
                <div className="space-y-5">
                    <MainInputField
                        label="New Password"
                        htmlFor="New-password"
                        type="password"
                        name="current-password"
                        placeholder="Enter your current password"
                        value={data.new_password}
                        onChange={(e) =>
                            setData("new_password", e.target.value)
                        }
                        errorDisplay={errors.new_password}
                    />

                    <MainInputField
                        label="Confirm Password"
                        htmlFor="new_password_confirmation"
                        type="password"
                        name="new_password_confirmation"
                        placeholder="Enter your current password"
                        value={data.new_password_confirmation}
                        onChange={(e) =>
                            setData("new_password_confirmation", e.target.value)
                        }
                        errorDisplay={errors.new_password_confirmation}
                    />
                </div>
            </ModalB>
        </>
    );
}

export default AdminChangePassBtn;
