<?php

namespace App\Http\Controllers;

use App\Models\Budgets;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBudgetsRequest;
use App\Http\Requests\UpdateBudgetsRequest;

use Inertia\Inertia;

class BudgetsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $budgets = Budgets::all(); //temporary
        return Inertia::render('Budget', [
            'budgets' => $budgets
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
    public function store(StoreBudgetsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Budgets $budgets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Budgets $budgets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBudgetsRequest $request, Budgets $budgets)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Budgets $budgets)
    {
        //
    }
}
