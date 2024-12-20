import AdminEditLedgerBtn from "@/Components/AdminEditLedgerBtn";

function AdminLedgerItem({ ledger, categories }) {
    return (
        <>
            <div className="flex flex-row px-8 py-2 h-16 w-full justify-between items-center bg-[#082333] rounded-lg hover:bg-[#062131] transition-all duration-200">
                <h1>{ledger.ledger_name}</h1>
                <div className="flex items-center space-x-3">
                    <a
                        href={route("admin.ledger.transactions", {
                            id: ledger.ledger_id,
                        })}
                    >
                        View Transactions
                    </a>
                    <AdminEditLedgerBtn
                        ledger={ledger}
                        categories={categories}
                    />
                </div>
            </div>
        </>
    );
}

export default AdminLedgerItem;
