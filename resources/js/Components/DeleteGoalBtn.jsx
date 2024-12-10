import ModalA from "@/Layouts/ModalA";
import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function DeleteGoalBtn({ goal_id }) {
    const { data, setData, delete:destroy, processing } = useForm({
        goal_id: goal_id,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("goals.destroy", goal_id), {
            onSuccess: () => {
                setIsModalOpen(false);
            }
        });
    };

    return (
        <>
            <DeleteBtn text="Delete" width="w-1/2" onClick={showModal} />
            <ModalA
                title="Delete Budget"
                content="Are you sure you want to delete this Budget?"
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                onSubmit={handleSubmit}
                disableBtn = {processing}
            />
        </>
    );
}

export default DeleteGoalBtn;
