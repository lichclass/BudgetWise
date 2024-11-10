<?php

namespace App\Http\Controllers;

use App\Models\Transactions;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTransactionsRequest;
use App\Http\Requests\UpdateTransactionsRequest;

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
        $ledger_categories = Ledgers_Categories_View::where('ledger_owner', Auth::id())->get();
        return Inertia::render('LedgerCategories', [
            'ledger_categories' => $ledger_categories,        
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreTransactionsRequest $request)
    {
        //Validate
        $fields = $request->validated();
        $ledgerId = $request->input('ledger_id'); //update using session ledger or inertia

        //Create a new transaction
        $transaction = new Transactions($fields);
        $transaction->ledger()->associate($ledgerId);
        $transaction->save();

        //Redirect to the transactions page
        return redirect()->route('transactions.index'); //update later
    }

    /**
     * Store a newly created resource in storage.
     */
    
     /*StoreTransactionsRequest $request*/
    public function store(StoreTransactionsRequest $request)
    {
        //validate the request
        $fields = $request->validated();

        //Create a new transaction
        //Transactions::ledger()->create($fields);

        //Redirect to the transactions page
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
        //
    }
}
