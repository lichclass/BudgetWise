import UsersItem from "@/Components/AdminUsersItem";

function AdminUsersList({ users, accCat }) {

    return (
        <>
            <div className="bg-[#174A65D1] rounded-lg shadow-lg w-full h-full flex flex-col overflow-auto max-h-[570px]">
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between bg-[#195676] rounded-t-lg px-4 py-3">
                <h1 className="text-white text-2xl font-bold" style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)" }}>
                    {accCat}
                </h1>
            </div>                    

            {/* Items */}
            <div className="flex flex-col gap-3 px-4 py-5 overflow-y-auto flex-grow">
                   {( users.map((user) => (
                        <UsersItem
                            key={user.user_id}
                            users={user}
                        />
                        ))
                    )}
            </div>
        </div>
        </>
    );
}

export default AdminUsersList;