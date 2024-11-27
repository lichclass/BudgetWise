<?php

namespace App\Http\Controllers;

use App\Models\LedgerCategory;
use App\Models\LedgerCategoryView;
use App\Models\Category;
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
    public function store(Request $request)
    {
        $fields = $request->validate([
            'category_type' => ['required', 'string'],
            'custom_name' => ['nullable', 'string'],
            'def_cat' => ['nullable', 'string'],
        ]);
        // validate
        if ($request->custom_name == null) {
            $category = Category::find($fields['def_cat']);
        } else {
            
            
            $category = Category::create([ 'user_id' => Auth::id(),
                                            'category_name' => $fields['custom_name'],
                                            'category_type' => $fields['category_type'] ]);
            $catId = $category->category_id;
        }
        LedgerCategory::create([
            'ledger_id' => session('ledger.ledger_id'),
            'category_id' => $catId,
        ]);
       
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
        $category->update($fields);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LedgerCategory $ledger_categories)
    {
        //
    }

    
}
