import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import EditGoalBtn from "./EditGoalBtn";
import AddBalanceModal from "@/Layouts/ModalB";
import WithdrawBalanceModal from "@/Layouts/ModalB";
import InputField from "@/Components/MainInputField";

function GoalsItem({
    id,
    title,
    target,
    current,
    targetDate,
    isDeadlineSet,
    deadline,
}) {
    const { data, setData, put, processing } = useForm({
        goal_id: id,
        amount: "",
    });

    const buttonStyle =
        "text-white text-opacity-70 bg-transparent text-xs flex items-center justify-center rounded-md border border-white border-opacity-30 px-2 py-3 hover:bg-white hover:text-slate-700 transition h-4 gap-1 whitespace-nowrap";

    const formaterr = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2,
    });

    const { ledger } = usePage().props;

    const [isAddBalanceModalOpen, setIsAddBalanceModalOpen] = useState(false);
    const [isWithdrawBalanceModalOpen, setIsWithdrawBalanceModalOpen] =
        useState(false);

    const completion = (current / target) * 100;

    // Add to Balance Modal
    const showAddBalanceModal = () => setIsAddBalanceModalOpen(true);
    const handleAddBalanceCancel = () => setIsAddBalanceModalOpen(false);

    // Withdraw from Balance Modal
    const showWithdrawBalanceModal = () => setIsWithdrawBalanceModalOpen(true);
    const handleWithdrawBalancesCancel = () =>
        setIsWithdrawBalanceModalOpen(false);

    function submitAdd(e) {
        e.preventDefault();
        put(route("goals.add", id));
    }

    function submitWithdraw(e) {
        e.preventDefault();
        put(route("goals.withdraw", id));
    }

    return (
        <>
            <div className="bg-[#0F3A51] rounded-lg px-8 pb-5 pt-3 flex flex-col gap-y-2 border border-transparent hover:border-white/30 transition-all duration-200 ease-in-out shadow-sm">
                {/* Header */}
                <div className="flex justify-between gap-1">
                    <h1 className="">{title}</h1>

                    {/* Edit Modal */}
                    <EditGoalBtn
                        id={id}
                        title={title}
                        target={target}
                        targetDate={targetDate}
                        isDeadlineSet={isDeadlineSet}
                    />
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
                        <button
                            className={`${buttonStyle}`}
                            onClick={showAddBalanceModal}
                        >
                            <FaPlus className="text-xs" />
                            <p className={`font-thin`}>Add Money</p>
                        </button>

                        {/* Start of Add Balance Modal */}

                        <AddBalanceModal
                            title="Add Money"
                            subtitle={title}
                            isModalOpen={isAddBalanceModalOpen}
                            handleCancel={handleAddBalanceCancel}
                            large={false}
                            onSubmit={submitAdd}
                            disabledBtn={processing}
                        >
                            <div className="flex flex-col gap-4 pb-5">
                                <div className="flex justify-center gap-2 p-4">
                                    <h1 className="text-white text-2xl">
                                        Ledger Balance:
                                    </h1>
                                    <h1 className="text-white text-2xl font-bold">
                                        {formaterr.format(ledger.balance)}
                                    </h1>
                                </div>

                                <InputField
                                    label="Amount"
                                    htmlFor="amount"
                                    type="number"
                                    name="amount"
                                    placeholder="Enter amount"
                                    value={data.amount}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                />
                            </div>
                        </AddBalanceModal>

                        {/* End of Add Balance Modal */}

                        <button
                            className={`${buttonStyle}`}
                            onClick={showWithdrawBalanceModal}
                        >
                            <FaMinus className="text-xs" />
                            <p className={`font-thin`}>Withdraw</p>
                        </button>

                        {/* Start of Withdraw Balance Modal */}

                        <WithdrawBalanceModal
                            title="Withdraw Money"
                            subtitle={title}
                            isModalOpen={isWithdrawBalanceModalOpen}
                            handleCancel={handleWithdrawBalancesCancel}
                            large={false}
                            isGoalsWithdraw={true}
                            onSubmit={submitWithdraw}
                            disabledBtn={processing}
                        >
                            <div className="flex flex-col gap-4 pb-5">
                                <div className="flex justify-center gap-2 p-4">
                                    <h1 className="text-white text-2xl">
                                        Goal Balance:
                                    </h1>
                                    {/* 'current' is used for now as ledger balance is not passed properly from home */}
                                    <h1 className="text-white text-2xl font-bold">
                                        {formaterr.format(
                                            parseFloat(current)
                                        )}
                                    </h1>
                                </div>

                                <InputField
                                    label="Amount"
                                    htmlFor="amount"
                                    type="number"
                                    name="amount"
                                    placeholder="Enter amount"
                                    value={data.amount}
                                    onChange={(e) =>
                                        setData("amount", e.target.value)
                                    }
                                />
                            </div>
                        </WithdrawBalanceModal>

                        {/* End of Withdraw Balance Modal */}
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
