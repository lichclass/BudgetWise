import { useState } from "react";
import { Button, Divider, Modal } from "antd";
import DeleteImg from "../../../public/build/assets/Modal_DeleteIcon.svg";
import GreenBtnCancel from "@/Components/GreenBtnCancel";
import DeleteBtn from "@/Components/DeleteBtn";

function ModalA({ title, content }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title={<h1 className="text-2xl font-bold">{title}</h1>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <div className="flex justify-center space-x-4 py-2">
                        <DeleteBtn text="Delete" to="/" width="1/2" />
                        <GreenBtnCancel
                            text="Cancel"
                            width="1/2"
                            onClick={handleCancel}
                        />
                    </div>
                }
            >
                <Divider />
                <div className="flex flex-col text-center items-center px-16">
                    <img src={DeleteImg} alt="delete_img" width={120} />
                    <span className="text-lg">{content}</span>
                </div>
            </Modal>
        </>
    );
}

export default ModalA;
