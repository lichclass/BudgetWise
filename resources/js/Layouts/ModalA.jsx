import { useState } from 'react'
import { Button, Divider, Modal } from 'antd'
import DeleteImg from '../../../public/build/assets/Modal_DeleteIcon.svg'

function ModalA() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
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
                title={<h1 className='text-2xl font-bold'>Delete Ledger</h1>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <div className='flex justify-center space-x-4 py-2'>
                        <Button className='w-1/2' type="primary"  danger>
                            Delete
                        </Button>
                        <Button className='w-1/2' onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                }
            >
                <Divider />
                <div className='flex flex-col text-center items-center px-16'>
                    <img src={DeleteImg} alt="delete_img" width={120}/>
                    <span className='text-lg'>Are you sure you want to delete this Ledger? To retrieve your data, you need to contact Support.</span>
                </div>
            </Modal>
        </>
    )
}

export default ModalA