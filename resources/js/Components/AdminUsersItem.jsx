import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function AdminUsersItem({users}){


    return (
        <>
            <div className="flex flex-row px-8 py-2 h-16 w-full justify-between items-center bg-[#082333] rounded-lg">
                <h1>{users.email}</h1>
                <button>
                    {(users.isAdmin) ? <FaRegEye /> : <FaRegEdit />}    
                </button>
            </div>
        </>
    );
}

export default AdminUsersItem;