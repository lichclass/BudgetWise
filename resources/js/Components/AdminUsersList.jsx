import UsersItem from "@/Components/AdminUsersItem";

function AdminUsersList({ users, title }) {

    return (
        <>
            <div className="bg-[#143445] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto border border-[#E7EAE64F]">
            {/* Header */}
                <div className="sticky top-0 z-10 flex justify-between bg-[#1C465CED] rounded-t-lg px-8 py-6">
                <h1 className="text-white text-2xl font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}>
                    {title}
                </h1>
            </div>                    

            {/* Items */}
                <div className="flex flex-col gap-3 px-8 py-5 overflow-y-auto flex-grow">
                   {( users.map((user) => (
                        <UsersItem
                            key={user.user_id}
                            user={user}
                        />
                    )))}
            </div>
        </div>
        </>
    );
}

export default AdminUsersList;