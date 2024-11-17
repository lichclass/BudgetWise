<?php

namespace App\Http\Controllers;

use App\Models\LedgerCategory;
use App\Models\LedgerCategoryView;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLedgerCategoryRequest;
use App\Http\Requests\UpdateLedgerCategoryRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LedgerCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ledger_categories = LedgerCategoryView::where('ledger_owner', Auth::id())->get();
        return Inertia::render('Home', [
            'categories' => $ledger_categories,        
        ]);
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
    public function store(StoreLedgerCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(LedgerCategory $ledger_categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LedgerCategory $ledger_categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLedgerCategoryRequest $request, LedgerCategory $ledger_categories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LedgerCategory $ledger_categories)
    {
        //
    }

    
}
