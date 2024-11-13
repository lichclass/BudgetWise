<?php

namespace App\Http\Controllers;

use App\Models\Transactions;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTransactionsRequest;
use App\Http\Requests\UpdateTransactionsRequest;
use App\Models\User_Transactions_View;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //change based on transaction view
        $user_transactions = User_Transactions_View::where('user_id', Auth::id())->get();
        return Inertia::render('LedgerCategories', [
            'transactions' => $user_transactions,        
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreTransactionsRequest $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    
     /*StoreTransactionsRequest $request*/
    public function store(StoreTransactionsRequest $request)
    {
        //Validate
        $fields = $request->validated();
        $ledgerId = $request->ledger_id; //update using session ledger or inertia

        //Create a new transaction
        $transaction = new Transactions($fields);
        $transaction->ledger()->associate($ledgerId);
        $transaction->save();

        //Redirect to the transactions page
        return redirect()->route('transactions.index'); //update later
    }

    /**
     * Display the specified resource.
     */
    public function show(Transactions $transactions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transactions $transactions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTransactionsRequest $request, Transactions $transactions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transactions $transactions)
    {
        $transactions->delete();
        return redirect()->back();
    }
}
