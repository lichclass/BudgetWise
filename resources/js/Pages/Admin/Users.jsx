import Main from "@/Layouts/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import UserList from "@/Components/AdminUsersList";
import SearchBar from "@/Components/SearchBar";

function Users({ users }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterState, setFilterState] = useState("all"); 

    const handleSearch = (value) => setSearchTerm(value);

    const handleToggleFilter = () => {
        setFilterState((prevState) =>
            prevState === "all" ? "existing" : prevState === "existing" ? "deleted" : "all"
        );
    };

    const filteredUsers = users.filter((user) => {
        const matchesSearch = searchTerm
            ? user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.email.toLowerCase().includes(searchTerm.toLowerCase())
            : true;

        if (filterState === "existing") {
            return matchesSearch && user.deleted_at === null;
        } else if (filterState === "deleted") {
            return matchesSearch && user.deleted_at !== null;
        }
        return matchesSearch; 
    });

    return (
        <>
            <Head title="Dashboard" />

            <Main navbarMsg={"Users"} isAdmin={true}>
                <div className="h-full w-full flex flex-col gap-6">


                    <div className="w-full flex flex-col items-center lg:flex-row gap-6 justify-between">
                    {/* Search Bar */}
                    <SearchBar onSearch={handleSearch} />

                    {/* Toggle Button */}
                    <button
                        onClick={handleToggleFilter}
                        className="h-9 bg-[#2D7E9BBD] text-white px-5 py-3 rounded-md flex items-center hover:bg-[#2d7e9b68] transition-all duration-200 ease-in-out"
                    >
                        {filterState === "all"
                            ? "Show Existing"
                            : filterState === "existing"
                            ? "Show Deleted"
                            : "Show All"}
                    </button>
                    </div>

                    {/* User Lists */}
                    <div className="h-full w-full flex flex-col lg:flex-row gap-6">
                        <UserList
                            className="w-1/2"
                            users={filteredUsers.filter((u) => u.role === "admin")}
                            title="Admin Accounts"
                            searchTerm={searchTerm}
                        />
                        <UserList
                            className="w-1/2"
                            users={filteredUsers.filter((u) => u.role === "user")}
                            title="User Accounts"
                            searchTerm={searchTerm}
                        />
                    </div>
                </div>
            </Main>
        </>
    );
}

export default Users;
