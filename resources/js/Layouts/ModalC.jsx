import DeleteBtn from '@/Components/DeleteBtn'
import GreenBtnMed from '@/Components/GreenBtnMed'
import DeleteModal from '@/Layouts/modalA'
import { Modal } from 'antd'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react'

function ModalC({ title, subtitle, children, isModalOpen, handleCancel, deleteTitle, deleteContent, large=false }) {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isSetBudgetModalOpen, setisSetBudgetModalOpen] = useState(false);

    const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
    }

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    }

    const showSetBudgetModal = () => {  
        setisSetBudgetModalOpen(true);
    }

    const handleSetBudgetCancel = () => {
        setisSetBudgetModalOpen(false);
    }

    return (
        <>
            <Modal
                title={
                    <>
                        <h1 className="text-2xl font-bold" style={{ color: "rgba(232, 234, 230, 0.86)"}} >{title}</h1>
                        <span className='text-sm' style={{ color: "rgba(232, 234, 230, 0.86)"}}>{subtitle}</span>
                    </>
                }
                closeIcon={<IoCloseOutline className="text-white text-5xl" style={{ color: "rgba(232, 234, 230, 0.86)" }} />}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <div className="flex justify-between space-x-4 py-2 w-full">
                        <DeleteBtn text="Delete" to="/" width="w-1/2" onClick={showDeleteModal} />
                        <DeleteModal
                            title={`Delete ${deleteTitle}`}
                            content={deleteContent}
                            isModalOpen={isDeleteModalOpen}
                            handleCancel={handleDeleteCancel}
                        />

                        <GreenBtnMed
                            text="Save"
                            width="w-1/2"
                            onClick={handleCancel}
                        />
                    </div>
                }
                className='main-modal-style'
                {...large ? { width: '50rem' } : ""}
            >
                <hr className='my-5 border-white opacity-60' />
                {children}
            </Modal>
        </>
    )
}

export default ModalC