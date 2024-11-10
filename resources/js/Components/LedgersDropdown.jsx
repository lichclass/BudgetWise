import { Dropdown, Space, Button } from 'antd';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { FaRegEdit } from 'react-icons/fa';
import { useState, useRef, useLayoutEffect } from 'react';


function LedgersDropdown({ ledgers = [ {name: "You don't have any ledgers"} ], activeLedger, onLedgerChange }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const buttonRef = useRef(null);

    const items = ledgers.map((ledger) => ({
        key: ledger.ledger_id,
        label: ledger.ledger_name,
        onClick: () => {
            onLedgerChange(ledger);
        },
    }));

    return (
        <div className='relative z-50 shadow-md rounded-xl bg-select-btn py-1 px-1 pr-3 inline-flex items-center'>
            <Space>
                <button className='sub-bg-select-btn p-2 rounded-lg'>
                    <FaRegEdit className={`${isDropdownOpen ? "text-slate-400" : "text-lime-50"}`} />
                </button>
                <Dropdown
                    menu={{ items }}
                    trigger={['click']}
                    onOpenChange={(visible) => setIsDropdownOpen(visible)}
                    placement='bottom'
                    overlayClassName='custom-dd'
                    overlayStyle={{
                        backgroundColor: '#32676F',
                        paddingTop: '0px',
                        borderRadius: '10px',
                        zIndex: '40',
                    }}
                >
                    <button ref={buttonRef}>
                        <a href="#" className="text-lime-50">
                            <Space>
                                {activeLedger.ledger_name}
                                {isDropdownOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </Space>
                        </a>
                    </button>
                </Dropdown>
            </Space>
        </div>
    );
}


export default LedgersDropdown;