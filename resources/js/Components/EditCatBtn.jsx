import { FaRegEdit } from 'react-icons/fa';
import { Space } from 'antd'

function EditCatBtn() {
    return (
        <button 
            className="text-white bg-transparent text-sm font-bold flex items-center justify-center px-3 py-2 rounded-lg border hover:bg-white hover:text-slate-700 transition"
        >
            <FaRegEdit className='text-md mr-1'/>
            Edit
        </button>
    );
}

export default EditCatBtn