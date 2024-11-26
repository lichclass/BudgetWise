<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\UserBudgetView;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBudgetRequest;
use App\Http\Requests\UpdateBudgetRequest;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

use Inertia\Inertia;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $budgets = UserBudgetView::where('user_id', Auth::id())->get();
        
        return Inertia::render('Budget', [
            'budgets' => $budgets,
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
    public function store(Request $request)
    {
        
        $fields = $request->validate([
            "category_id" => ['required', 'numeric'],
            "amount_limit" => ['required', 'numeric'],
        ]);

        $ledgerId = session('ledger.ledger_id');
        if(!$ledgerId) {
            return redirect()->back();
        }

        $fields['ledger_id'] = $ledgerId;
        Budget::create($fields);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Budget $budgets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Budget $budgets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $fields = $request->validate([
            "category_id" => ['required', 'numeric'],
            "amount_limit" => ['required', 'numeric'],
        ]);

        $budget = Budget::find($id);
        $budget->update($fields);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $budget = Budget::find($id);
        $budget->delete();  
        return redirect()->back();
    }
}
