import UsersItem from "@/Components/AdminUsersItem";

function AdminUsersList({ users, title, searchTerm }) {
    
    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
        searchTerm
            ? user.username.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by name
              user.email.toLowerCase().includes(searchTerm.toLowerCase()) // Search by email
            : true
    );

    return (
        <div className="bg-[#143445] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto border border-[#E7EAE64F]">
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between bg-[#1C465CED] rounded-t-lg px-8 py-6">
                <h1 className="text-white text-2xl font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}>
                    {title}
                </h1>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-3 px-8 py-5 overflow-y-auto flex-grow">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <UsersItem key={user.user_id} user={user} />
                    ))
                ) : (
                    <p className="text-white opacity-50 flex self-center py-4">No users found.</p>
                )}
            </div>
        </div>
    );
}

export default AdminUsersList;
