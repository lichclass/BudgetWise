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
    public function update(Request $request, Transaction $transaction)
    {
        dd($request, $transaction);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {   
        $transaction = Transaction::findOrFail($id);
        $transaction->delete();
        return redirect()->back();
    }
}
