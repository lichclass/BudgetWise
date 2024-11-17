import ModalB from "@/Layouts/ModalB";
import MainInputField from '@/Components/MainInputField';
import { Checkbox } from 'antd';
import DropDownField from '@/Components/DropDownField';

function CreateCategoryModal({ type, isModalOpen, handleCancel}){
    return(
        <>
            <ModalB
                title="Create Category"
                subtitle={ type && (type === "expense" ? "Expense" : "Income") }
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            >

            <div className="space-y-4 > *">
                <DropDownField
                    label="Select Category Type"
                    htmlFor="category-type"
                    name="category-type"
                    placeholder="Select a Category"
                    options={[
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                        { label: 'Option 3', value: 'option3' }
                    ]}
                />

                <MainInputField 
                    label="Custom Name"
                    htmlFor="custom-name"
                    type="text"
                    name="custom-name"
                    placeholder="Enter Category Name"
                />

                    <Checkbox
                            name='custom-cat'
                            className='text-md font-extralight text-white'
                    >
                            Custom Category
                    </Checkbox>

                <DropDownField
                    label="Default Categories"
                    htmlFor="def-cat"
                    name="def-cat"
                    placeholder="Select a Category"
                    options={[
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                        { label: 'Option 3', value: 'option3' }
                    ]}
                />
            </div>
            </ModalB>
        </>
    )
}

export default CreateCategoryModal;