<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Ledger;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\UserTransactionView;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //change based on transaction view
        $user_transactions = UserTransactionView::where('user_id', Auth::id())->get();
        return Inertia::render('Transactions', [
            'transactions' => $user_transactions,        
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreTransactionRequest $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    
     /*StoreTransactionsRequest $request*/
    public function store(StoreTransactionRequest $request)
    {
        // Validate the request
        $fields = $request->validated();
        $ledgerId = session('ledger.ledger_id'); // Retrieve ledger ID from session

        // Check if the ledger exists
        $ledger = Ledger::find($ledgerId);
        if (!$ledger) {
            return redirect()->back()->withErrors(['ledger' => 'Ledger not found.']);
        }

        // Update the ledger balance
        if ($fields['transaction_type'] == 'expense') {
            $ledger->decrement('balance', $fields['amount']);
        } else {
            $ledger->increment('balance', $fields['amount']);
        }

        // Create a new transaction
        $transaction = new Transaction($fields);
        $transaction->ledger()->associate($ledger);
        $transaction->save();

        // Retrieve the updated ledger and update the session
        $updatedLedger = Ledger::find($ledgerId);
        session(['ledger' => $updatedLedger]);

        //Redirect to the transactions page
        return redirect()->route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transactions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transactions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionRequest $request, $transactionId)
    {
        // dd($request, $transactionId);
        // Validate the request
        $fields = $request->validated();
        
        $ledger = Ledger::find(session('ledger.ledger_id'));

        $ledgerAmt = $ledger->balance;
    
          // Check if the transaction exists
        $transaction = Transaction::find($transactionId);
        if (!$transaction) {
            return redirect()->back()->withErrors(['transaction' => 'Transaction not found.']);
        }

        if ($transaction->transaction_type == 'expense') {
            $balanceChange = $transaction->amount - $fields['amount'];
        } else {
            $balanceChange = $fields['amount'] - $transaction->amount;
        }

        // Update the ledger balance
        $ledger->balance = $ledgerAmt + $balanceChange;
        $ledger->save();
        
        // Update the transaction
        $transaction->update($fields);
        $transaction->save();

        $updatedLedger = Ledger::find($ledger->ledger_id);
        session(['ledger' => $updatedLedger]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {   
        $transaction = Transaction::findOrFail($id);
        if ($transaction->transaction_type == 'expense') {
            $balanceChange = $transaction->amount;
        } else {
            $balanceChange = 0 - $transaction->amount;
        }
        $ledger = Ledger::find($transaction->ledger_id);
        $ledger->balance = $ledger->balance + $balanceChange;
        $ledger->save();

        $updatedLedger = Ledger::find($ledger->ledger_id);
        session(['ledger' => $updatedLedger]);
        
        $transaction->delete();
        return redirect()->back();
    }
}
