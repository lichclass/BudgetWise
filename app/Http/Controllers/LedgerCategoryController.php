<?php

namespace App\Http\Controllers;

use App\Models\LedgerCategory;
use App\Models\LedgerCategoryView;
use App\Models\Category;
use App\Models\Transaction;
use App\Models\Ledger;
use App\Models\Budget;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLedgerCategoryRequest;
use App\Http\Requests\UpdateLedgerCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LedgerCategoryController extends Controller
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
    public function store(Request $request)
    {
        $fields = $request->validate([
            'category_type' => ['required', 'string'],
            'custom_name' => ['nullable', 'string'],
            'def_cat' => ['nullable', 'numeric'],
        ]);

        // validate
        $catId = null;
        if ($request->custom_name == null) {
            $category = Category::find($fields['def_cat']);
            $catId = $category->category_id;
        } else {
            
            
            $category = Category::create([  'user_id' => Auth::id(),
                                            'category_name' => $fields['custom_name'],
                                            'category_type' => $fields['category_type'] ]);
            $catId = $category->category_id;
        }
        LedgerCategory::create([
            'ledger_id' => session('ledger.ledger_id'),
            'category_id' => $catId,
        ]);
       
        return redirect()->back();
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
    public function update(UpdateCategoryRequest $request,  $catId)
    {
        $fields = $request->validated();
        $category = Category::find($catId);
        if($category->is_default == true){
            return redirect()->back()->withErrors(['error' => 'Cannot update default category']);
        }
        $category->update($fields);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($catId)
    {
        $category = Category::find($catId);
        $ledgerCat = LedgerCategory::where('category_id', $catId)->where('ledger_id', session('ledger.ledger_id'));
        
        $sum = Transaction::where('category_id', $catId)->sum('amount');
        $balanceChange = ($category->category_type == 'expense')? $sum : 0 - $sum;

        $ledger = Ledger::find(session('ledger.ledger_id'));
        $ledger->balance = $ledger->balance + $balanceChange;
        $ledger->save();
        session(['ledger' => $ledger]);

        $ledgerCat->delete();
        if($category->is_default == false){
            $category->delete();
        } else {
            $budgets = Budget::where('category_id', $catId)->get();
            foreach($budgets as $budget){
                $budget->delete();
            }
        }
        return redirect()->back();
    }
    
}
