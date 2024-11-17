import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import EditGoalsModal from "@/Layouts/ModalC";
import AddBalanceModal from "@/Layouts/ModalB";
import WithdrawBalanceModal from "@/Layouts/ModalB";
import { useState } from "react";
import InputField from "@/Components/MainInputField";
import { Checkbox } from 'antd';
import { usePage } from "@inertiajs/react";

function GoalsItem({ title, target, current, targetDate, isDeadlineSet, deadline}) {
    const buttonStyle =
        "text-white text-opacity-70 bg-transparent text-xs flex items-center justify-center rounded-md border border-white border-opacity-30 px-2 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1 whitespace-nowrap";

    const formaterr = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2
    });

    const { ledger } = usePage().props;

    const [isEditGoalsModalOpen, setIsEditGoalsModalOpen] = useState(false);
    const [isAddBalanceModalOpen, setIsAddBalanceModalOpen] = useState(false);
    const [isWithdrawBalanceModalOpen, setIsWithdrawBalanceModalOpen] = useState(false);

    const [goalName, setGoalName] = useState('');
    const [goalLimit, setGoalLimit] = useState('');
    const [goalDate, setGoalDate] = useState('');
    const [isDeadlineInputSet, setDeadlineInputEnable] = useState(isDeadlineSet);

    const [addAmt, setAddAmt] = useState('');
    const [withdrawAmt, setWithdrawAmt] = useState('');


    const completion = (current / target) * 100;

    // Edit Modal
    const showEditGoalsModal = () => setIsEditGoalsModalOpen(true);
    const handleEditGoalsCancel = () => setIsEditGoalsModalOpen(false);

    // Add to Balance Modal
    const showAddBalanceModal = () => setIsAddBalanceModalOpen(true);
    const handleAddBalanceCancel = () => setIsAddBalanceModalOpen(false);

    // Withdraw from Balance Modal
    const showWithdrawBalanceModal = () => setIsWithdrawBalanceModalOpen(true);
    const handleWithdrawBalancesCancel = () => setIsWithdrawBalanceModalOpen(false);

    return (
        <>
            <div className="bg-[#0F3A51] rounded-lg px-8 pb-5 pt-3 flex flex-col gap-y-2 border border-transparent hover:border-white/30 transition-all duration-200 ease-in-out shadow-sm">
                {/* Header */}
                <div className="flex justify-between gap-1">
                    <h1 className="">{title}</h1>
                    <button onClick={showEditGoalsModal}>
                        <FaEdit className="text-white text-opacity-80 transition-all duration-200 ease-in-out hover:scale-110" />
                    </button> 

                    {/* Edit Modal */}
                    <EditGoalsModal
                        title="Edit Goal"
                        isModalOpen={isEditGoalsModalOpen}
                        handleCancel={handleEditGoalsCancel}
                        deleteTitle="Goal"
                        deleteContent="Are you sure you want to delete this goal?"
                    >
                        <div className="flex flex-col gap-4 pb-5">

                            <InputField
                                label="Goal Name"
                                htmlFor="goal_name"
                                type="text"
                                name="goal_name"
                                placeholder={title}
                                value={goalName || title}
                                onChange={(e) => setGoalName(e.target.value)}
                            />

                            <InputField
                                label="Amount Limit"
                                htmlFor="goal_limit"
                                type="number"
                                name="goal_limit"
                                placeholder={target}
                                value={goalLimit || target}
                                onChange={(e) => setGoalLimit(e.target.value)}
                            />

                            <div className="flex flex-col gap-2">
                                <InputField
                                    label="Date"
                                    htmlFor="goal_date"
                                    type="date"
                                    name="goal_date"
                                    value={goalDate || targetDate}
                                    onChange={(e) => setGoalDate(e.target.value)}
                                    isReadOnly={!isDeadlineInputSet}
                                />

                                <Checkbox
                                    name='setDeadline'
                                    className='text-md font-semibold text-gray-300'
                                    checked={isDeadlineInputSet}
                                    onChange={(e) => setDeadlineInputEnable(e.target.checked)}
                                >
                                    Set Deadline
                                </Checkbox>
                            </div>

                        </div>
                        
                    </EditGoalsModal>

                </div>
                
                    {/* Progress Bar */}
                <div className="w-full h-6 rounded-full bg-[#0A1C29] bg-opacity-25 flex items-center">
                    <div
                        className={`h-6 bg-blue-600 ${
                            completion < 100 ? "rounded-l-full" : "rounded-full"
                        } bg-gradient-to-r from-[#79BAA8] to-[#195676]`}
                        style={{ width: `${completion}%` }}
                    ></div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row-reverse justify-between items-center gap-5">
                    <div className="flex gap-1">
                        <button className={`${buttonStyle}`} onClick={showAddBalanceModal}>
                            <FaPlus className="text-xs" />
                            <p className={`font-thin`}>Add Money</p>
                        </button>

                        {/* Add Balance Modal */}
                        
                        <AddBalanceModal
                            title="Add Money"
                            subtitle={title}
                            isModalOpen={isAddBalanceModalOpen}
                            handleCancel={handleAddBalanceCancel}
                            large={false}
                        > 
                            
                            <div className="flex flex-col gap-4 pb-5">

                                <div className="flex justify-center gap-2 p-4">
                                    <h1 className="text-white text-2xl">Ledger Balance: </h1>
                                    <h1 className="text-white text-2xl font-bold">{formaterr.format(ledger.balance)}</h1>
                                </div>

                                <InputField
                                    label="Amount"
                                    htmlFor="amount_added"
                                    type="number"
                                    name="amount_added"
                                    placeholder="Enter amount"
                                    value={withdrawAmt}
                                    onChange={(e) => setWithdrawAmt(e.target.value)}
                                />
                            </div>

                        </AddBalanceModal>

                        <button className={`${buttonStyle}`} onClick={showWithdrawBalanceModal}>
                            <FaMinus className="text-xs" />
                            <p className={`font-thin`}>Withdraw</p>
                        </button>

                        {/* Withdraw Balance Modal */}
                        
                        <WithdrawBalanceModal 
                            title="Withdraw Money"
                            subtitle={title}
                            isModalOpen={isWithdrawBalanceModalOpen}
                            handleCancel={handleWithdrawBalancesCancel}
                            large={false}
                            isGoalsWithdraw={true}
                        > 
                            
                            <div className="flex flex-col gap-4 pb-5">
                                
                                <div className="flex justify-center gap-2 p-4">
                                    <h1 className="text-white text-2xl">Goal Balance: </h1>
                                    {/* 'current' is used for now as ledger balance is not passed properly from home */}
                                    <h1 className="text-white text-2xl font-bold">{formaterr.format(parseFloat(ledger.total_balance))}</h1> 
                                </div>

                                <InputField
                                    label="Amount"
                                    htmlFor="amount_added"
                                    type="number"
                                    name="amount_added"
                                    placeholder="Enter amount"
                                    value={withdrawAmt}
                                    onChange={(e) => setWithdrawAmt(e.target.value)}
                                />
                            </div>

                        </WithdrawBalanceModal>


                    </div>

                    <p className="text-[#E8EAE69E] font-thin text-xs sm:text-sm self-start">
                        {isDeadlineSet
                            ? "Days Remaining: " + deadline
                            : "No Deadline Set"}
                    </p>
                </div>
            </div>
        </>
    );
}

export default GoalsItem;
