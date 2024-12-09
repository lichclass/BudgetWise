import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import LedgersList from "@/Components/AdminUserLedgersList";
import DeletedLedgers from"@/Components/AdminUserDeletedLedgers";
import TransactList from "@/Components/AdminUserTransactList";
import LedgerItem from "@/Components/AdminLedgerItem";
import TransactItem from "@/Components/AdminTransactionsItem";

function UserProfile({ user, ledgers, deletedLedgers }) {

    const usernameFormatted = user.username[0].toUpperCase() + user.username.slice(1);

    return (
        <>
            <Head title="Dashboard" />

            <Main isSettings={true} isAdmin={true}>

                <div className="h-full w-full flex flex-col gap-6">

                    <div
                        className="flex flex-col md:flex-row shadow-xl w-full justify-between items-center rounded-xl text-white border border-white/40 py-12 px-24
                            hover:border-white/60 transition-all duration-300"
                        style={{
                            background:
                                "linear-gradient(259deg, rgba(74, 167, 200, 0.12) -9.8%, rgba(13, 33, 47, 0.12) 119.45%)",
                        }}
                    >

                        <div className="font-bold space-y-2">
                            <h1 className="text-3xl">{usernameFormatted}</h1>
                            <h3 className="text-base">{user.email}</h3>
                        </div>

                        <div className="flex space-x-3">
                            <button>
                                <a href={route("user.edit", user)} className="bg-[#2D7E9BBD] text-center my-4 md:mt-0 py-4 px-14 rounded-xl hover:bg-[#2d7e9b91] transition-all duration-200">
                                    Edit
                                </a>
                            </button>
                            {user.deleted_at && (
                                <button>
                                    <a className="bg-[#2D7E9BBD] text-center my-4 md:mt-0 py-4 px-11 rounded-xl hover:bg-[#2d7e9b91] transition-all duration-200">
                                        Restore
                                    </a>
                                </button>
                            )}
                        </div>

                    </div>
                    
                    <div className="flex flex-col lg:flex-row h-full max-h-full overflow-auto gap-6">
                        <LedgersList className="w-1/2"
                            ledgers={ledgers}
                        />
                        <DeletedLedgers className="w-1/2"
                            ledgers={deletedLedgers}
                        />
                    </div>

                </div>

            </Main>
        </>

    );
}

export default UserProfile;