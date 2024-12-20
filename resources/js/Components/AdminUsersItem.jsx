import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function AdminUsersItem({ user }) {

    return (
        <>
            <div className="flex flex-row px-8 py-2 h-16 w-full justify-between items-center bg-[#082333] rounded-lg hover:bg-[#062131] transition-all duration-200">
                <div className="flex gap-1 items-center">
                    <h1>{user.email}</h1>
                    <h1>({user.username})</h1>
                    <h1 className="text-[#77848d] pl-2">{user.deleted_at && <span> Deleted</span>}</h1>
                </div>

                <button className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110">
                    {(user.role == 'admin') ?
                        <a href={route('admin.edit-admin', { id: user.user_id })}>
                            <FaRegEdit />
                        </a>
                        :
                        <a href={route('admin.show-user', { id: user.user_id })}>
                            <FaRegEye />
                        </a>
                    }
                </button>
            </div>
        </>
    );
}

export default AdminUsersItem;