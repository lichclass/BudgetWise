<?php

namespace App\Http\Controllers;

use App\Models\Transactions;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTransactionsRequest;
use App\Http\Requests\UpdateTransactionsRequest;

use Inertia\Inertia;

class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Transactions::all(); //temporary
        return Inertia::render('Transactions', [
            'transactions' => $transactions,        
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreTransactionsRequest $request)
    {
        //Validate


        //Create a new transaction

        //Redirect to the transactions page
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
        $transactions->delete();
        return redirect()->back();
    }
}
