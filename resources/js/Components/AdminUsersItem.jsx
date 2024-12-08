import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function AdminUsersItem({ user }) {

    //idk how to properly pass user

    return (
        <>
            <div className="flex flex-row px-8 py-2 h-16 w-full justify-between items-center bg-[#082333] rounded-lg hover:bg-[#062131] transition-all duration-200">
                <h1>{user.email}</h1>
                <button className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110">
                    {(user.is_admin) ?
                        <a href={route('admin.edit-user', {id: user.user_id})}> 
                            <FaRegEdit /> 
                        </a> 
                    :
                        <a href={route('admin.edit-user', {id: user.user_id})}>
                            <FaRegEye />
                        </a>
                    } 
                </button>
            </div>
        </>
    );
}

export default AdminUsersItem;