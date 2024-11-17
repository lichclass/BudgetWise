<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
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
        //Validate
        $fields = $request->validated();
        $ledgerId = $request->ledger_id; //update using session ledger or inertia

        //Create a new transaction
        $transaction = new Transaction($fields);
        $transaction->ledger()->associate($ledgerId);
        $transaction->save();

        //Redirect to the transactions page
        return redirect()->route('transactions.index'); //update later
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
    public function update(UpdateTransactionRequest $request, Transaction $transactions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transactions)
    {
        $transactions->delete();
        return redirect()->back();
    }
}
