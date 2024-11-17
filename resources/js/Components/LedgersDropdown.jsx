import { Dropdown, Space } from "antd";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import { LedgerContext } from "@/Pages/Home";
import EditLedgerBtn from "./EditLedgerBtn";

function LedgersDropdown({
    activeLedger,
    onLedgerChange,
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const buttonRef = useRef(null);
    const ledgers = useContext(LedgerContext);

    const items = ledgers.map((ledger) => ({
        key: ledger.ledger_id,
        label: ledger.ledger_name,
        onClick: () => {
            onLedgerChange(ledger);
        },
    }));

    return (
        <div className="relative z-50 shadow-md rounded-xl bg-select-btn py-1 px-1 pr-3 inline-flex items-center">
            <Space>
                <EditLedgerBtn />
                <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                    onOpenChange={(visible) => setIsDropdownOpen(visible)}
                    placement="bottom"
                    overlayClassName="custom-dd"
                    overlayStyle={{
                        backgroundColor: "#32676F",
                        paddingTop: "0px",
                        borderRadius: "10px",
                    }}
                >
                    <button ref={buttonRef}>
                        <a href="#" className="text-lime-50">
                            <Space>
                                {activeLedger.ledger_name}
                                {isDropdownOpen ? (
                                    <TiArrowSortedUp />
                                ) : (
                                    <TiArrowSortedDown />
                                )}
                            </Space>
                        </a>
                    </button>
                </Dropdown>
            </Space>
        </div>
    );
}

export default LedgersDropdown;
