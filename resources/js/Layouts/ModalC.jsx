import DeleteBtn from "@/Components/DeleteBtn";
import GreenBtnMed from "@/Components/GreenBtnMed";
import DeleteModal from "@/Layouts/ModalA";
import { Modal } from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

function ModalC({
    title,
    subtitle,
    sublabel,
    children,
    isModalOpen,
    handleCancel,
    deleteRender,
    large = false,
    onClick,
    isEditLedger=false,
    disableBtn=false,
    error="*ERROR"
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
                    <div className = "flex flex-col">
                        <div>
                            <span className="text-red-500 pr-3">{error}</span>
                        </div>
                        <div className="flex justify-between space-x-4 py-2 w-full">
                            {deleteRender}
                            <GreenBtnMed
                                text="Save"
                                width={isEditLedger ? "w-full" : "w-1/2"}
                                onClick={onClick}
                                disabled={disableBtn}
                            />
                        </div>
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
