import GreenBtnLg from "@/Components/GreenBtnLg";
import GreenBtnMed from "@/Components/GreenBtnMed";
import GreenBtnCancel from "@/Components/GreenBtnCancel";
import ModalA from "@/Layouts/ModalA";
import ModalB from "@/Layouts/ModalB";
import ModalC from "@/Layouts/ModalC";
import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";

function Test() {
    const [isModalAOpen, setIsModalAOpen] = useState(false);
    const [isModalBOpen, setIsModalBOpen] = useState(false);
    const [isModalCOpen, setIsModalCOpen] = useState(false);

    const showModal_A = () => {
        setIsModalAOpen(true);
    }

    const handleCancel_A = () => {
        setIsModalAOpen(false);
    };

    const showModal_B = () => {
        setIsModalBOpen(true);
    };

    const handleCancel_B = () => {
        setIsModalBOpen(false);
    };

    const showModal_C = () => {
        setIsModalCOpen(true);
    }

    const handleCancel_C = () => {
        setIsModalCOpen(false);
    }

    return (
        <>
            <Head title="Test" />

            <Main navbarMsg={"Test"}>
                <div className="space-x-5">

                    {/* For Modal A */}
                    <button onClick={showModal_A}>
                        Open Modal
                    </button>
                    <ModalA 
                        title="Delete Ledger" 
                        content="Are you sure?" 
                        isModalOpen={isModalAOpen} 
                        handleCancel={handleCancel_A}
                    />

                    {/* For Modal B */}
                    <button onClick={showModal_B}>
                        Open Modal
                    </button>
                    <ModalB 
                        title="Create a Goal"
                        subtitle="Ex. Buy a new car"
                        isModalOpen={isModalBOpen}
                        handleCancel={handleCancel_B}
                        large={true}
                    > 
                    </ModalB>

                    {/* For Modal C */}
                    <button onClick={showModal_C}>
                        Open Modal
                    </button>
                    <ModalC 
                        title="Edit Budget"
                        subtitle="Food & Drink"
                        isModalOpen={isModalCOpen}
                        handleCancel={handleCancel_C}
                    />

                    <GreenBtnLg text={"Large"}/>
                    <GreenBtnMed text="Medium"/>
                    <GreenBtnCancel text={"Cancel"}/>
                </div>
            </Main>


        </>
    )

}

export default Test;