<?php

namespace App\Http\Controllers;

use App\Models\Ledger_categories;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLedger_categoriesRequest;
use App\Http\Requests\UpdateLedger_categoriesRequest;

class LedgerCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLedger_categoriesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ledger_categories $ledger_categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ledger_categories $ledger_categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLedger_categoriesRequest $request, Ledger_categories $ledger_categories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ledger_categories $ledger_categories)
    {
        //
    }
}