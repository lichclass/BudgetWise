import { Modal } from "antd";
import GreenBtnCancel from "@/Components/GreenBtnCancel";
import DeleteBtn from "@/Components/DeleteBtn";
import { IoCloseOutline } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";

function ModalA({
    title = "test",
    content = "test",
    isModalOpen,
    handleCancel,
    onSubmit,
    disableBtn = false,
    error="",
}) {
    return (
        <form onSubmit={onSubmit}>
            <Modal
                title={
                    <h1
                        className="text-2xl font-bold"
                        style={{ color: "rgba(232, 234, 230, 0.86)" }}
                    >
                        {title}
                    </h1>
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
                    <div className = "flex flex-col pt-3">

                        <div>
                            <span className="text-red-500 pr-3">{error}</span>
                        </div>

                        <div className="flex justify-between space-x-4 pb-2 pt-2 w-full">
                            <DeleteBtn
                                text="Delete"
                                width="w-1/2"
                                isSubmit={true}
                                onClick={onSubmit}
                                disable={disableBtn}
                        />
                            <GreenBtnCancel
                                text="Cancel"
                                width="w-1/2"
                                onClick={handleCancel}
                            />
                        </div>

                    </div>
                }
                className="main-modal-style text-white"
            >
                <hr className="my-5 border-white opacity-60 pt-8" />
                <div className="flex flex-col text-center items-center px-16">
                    <PiWarningCircle
                        className="text-8xl"
                        style={{ color: "#E5EFDD" }}
                    />
                    <span className="text-lg">{content}</span>
                </div>
            </Modal>
        </form>
    );
}

export default ModalA;
