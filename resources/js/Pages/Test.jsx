import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import GoalsItem from "@/Components/GoalsItem";
import { IoIosAdd } from "react-icons/io";
import { Checkbox } from 'antd';
import CreateGoalsModal from "@/Layouts/ModalB";

function Test({ ledgers }) {

    const [isCreateGoalsModalOpen, setIsCreateGoalsModalOpen] = useState(false);

    const showCreateGoalsModal = () => {
        setIsCreateGoalsModalOpen(true);
    }

    const handleCreateGoalsCancel = () => {
        setIsCreateGoalsModalOpen(false);
    }

    return (
        <>
            <Head title="Test" />

            <Main navbarMsg={"Test"}>
                
                <div className="flex flex-col gap-4 my-8">
                    <GoalsItem
                        title="Buy a new phone"
                        completion={45}
                        isDeadlineSet={true}
                        deadline="11/3/4"
                    />

                    <GoalsItem
                        title="Buy a coffee machine"
                        completion={70}
                        isDeadlineSet={false}
                    />

                    <button className="text-white bg-transparent text-sm font-bold flex items-center justify-center pl-2 py-2 pr-4 rounded-lg border hover:bg-white hover:text-slate-700 transition h-8" onClick={showCreateGoalsModal}>
                        <IoIosAdd className="text-xl" />
                        Add Goal
                    </button>

                    <CreateGoalsModal
                        title="Create a Goal"
                        subtitle="Ex. Save for Tuition"
                        isModalOpen={isCreateGoalsModalOpen}
                        handleCancel={handleCreateGoalsCancel}
                        large={false}
                    > 
                    </CreateGoalsModal>

                    <Checkbox
                        name='remember'
                        className='text-md font-semibold text-teal-800'
                    >
                        Remember Me
                    </Checkbox>
                </div>
            </Main>

        </>
    )

}

export default Test;