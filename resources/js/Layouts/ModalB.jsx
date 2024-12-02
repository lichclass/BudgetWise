import { Modal } from "antd";
import GreenBtnMed from "@/Components/GreenBtnMed";
import { IoCloseOutline } from "react-icons/io5";
import DeleteBtn from "@/Components/DeleteBtn";

function ModalB({
    title = "test",
    subtitle = "",
    children,
    isModalOpen,
    handleCancel,
    large = false,
    isGoalsWithdraw = false,
    onSubmit,
    disabledBtn=false,
    error="*ERROR"
}) {
    return (
        <>
            <form onSubmit={onSubmit}>
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
                                {isGoalsWithdraw == false ? (
                                    <GreenBtnMed text="Submit" width="w-full" onClick={onSubmit} disabled={disabledBtn}/>
                                ) : (
                                    <DeleteBtn text="Withdraw" width="w-full" onClick={onSubmit} />
                                )}
                            </div>
                        </div>
                    }
                    className="main-modal-style md:w-full"
                    {...(large ? { width: "60rem" } : "")}
                >
                    <hr className="my-5 border-white opacity-60" />
                    {children}
                </Modal>
            </form>
        </>
    );
}

export default ModalB;
