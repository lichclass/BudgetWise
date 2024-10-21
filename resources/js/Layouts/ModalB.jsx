import { useState } from 'react'
import { Button, Divider, Modal } from 'antd'

function ModalB({ title, subtitle, children }) {

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
                title={
                    <>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <span>{ subtitle }</span>
                    </>
                }
                open={isModalOpen}
                onCancel={handleCancel}
                footer={
                    <div className='flex justify-center space-x-4 py-2'>
                        <Button className='w-full' type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >
                <Divider />
                {children}
            </Modal>
        </>
    )
}

export default ModalB