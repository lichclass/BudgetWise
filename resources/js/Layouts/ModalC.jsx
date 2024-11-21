import DeleteBtn from "@/Components/DeleteBtn";
import GreenBtnMed from "@/Components/GreenBtnMed";
import DeleteModal from "@/Layouts/ModalA";
import { Modal } from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function ModalC({
    title,
    subtitle,
    children,
    isModalOpen,
    handleCancel,
    deleteRender,
    large = false,
    onClick,
}) {
    return (
        <>
            <Modal
                title={
                    <>
                        <h1
                            className="text-2xl font-bold"
                            style={{ color: "rgba(232, 234, 230, 0.86)" }}
                        >
                            {title}
                        </h1>
                        <span
                            className="text-sm"
                            style={{ color: "rgba(232, 234, 230, 0.86)" }}
                        >
                            {subtitle}
                        </span>
                    </>
                }
                closeIcon={
                    <IoCloseOutline
                        className="text-white text-5xl"
                        style={{ color: "rgba(232, 234, 230, 0.86)" }}
                    />
                }
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <div className="flex justify-between space-x-4 py-2 w-full">
                        {deleteRender}
                        <GreenBtnMed
                            text="Save"
                            width="w-1/2"
                            onClick={onClick}
                        />
                    </div>
                }
                className="main-modal-style"
                {...(large ? { width: "50rem" } : "")}
            >
                <hr className="my-5 border-white opacity-60" />
                {children}
            </Modal>
        </>
    );
}

export default ModalC;
