<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use App\Models\Ledger;
use App\Models\LedgerCategoryView;
use App\Models\LedgerCategory;
use App\Models\Category;
use App\Models\UserTransactionView;
use App\Models\UserGoalView;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $ledgers = Ledger::where('user_id', Auth::id())->get();
        $categories = LedgerCategoryView::where('ledger_owner', Auth::id())->get();
        $transactions = UserTransactionView::where('user_id', Auth::id())->get();
        $goals = UserGoalView::where('user_id', Auth::id())->get();
        return Inertia::render('Home', [
            'ledgers' => $ledgers,
            'categories' => $categories,
            'transactions' => $transactions,
            'goals' => $goals,
        ]);
    }

    public function setCurrentLedger(Request $request)
    {
        $ledger = $request->input('ledger');
        $request->session()->put('ledger', $ledger);
        return redirect()->back();
    }

    public function createNewLedger(Request $request)
    {
       
        // dd($request);
        //creating ledger and storing id
        $ledgerFields = [
            'user_id' => Auth::id(),
            'ledger_name' => $request->ledgerName,
        ];
        $ledger = Ledger::create($ledgerFields);
        $ledgerID = $ledger->ledger_id;
    
        //creating categories
        $newCategories = $request->newCategoriesSelected;
        $cnt = count($newCategories);
        $categoryID=[]; //category storage
        for($x = 0; $x < $cnt; $x++){
            $categoryFields = [
                'user_id' => Auth::id(),
                'category_name' =>  $newCategories[$x]['category_name'], 
                'category_type' =>  $newCategories[$x]['category_type'], 
            ];
            $category = Category::create($categoryFields);
            $categoryID[] += $category->category_id;
        }        
        

        //concatenate to selected category array

        $selectedCategories = $request->selectedCategories;
        $totalCategories = array_merge($selectedCategories, $categoryID);
        

        //creating ledger_category data
        $cnt = count($totalCategories);
        for($x = 0; $x < $cnt; $x++){
            $Ledger_categoryFields = [
                'ledger_id' => $ledgerID,
                'category_id' => $totalCategories[$x],
            ];
           LedgerCategory::create($Ledger_categoryFields);
        }

        return redirect()->route('home');
    }

    public function addGoalMoney(Request $request, Goal $goals, Ledger $ledger){
        dd($request, $goals, $ledger)
;       $addMoneyField = $request->validate([
            'balance' => ['required', 'numeric'],
        ])
;       $ledger->balance -= $addMoneyField['balance']
;       $ledger->save()
;       $goals->current_savings += $addMoneyField['balance']
;       $goals->save()
;       return redirect()->route('home')
;
    }

    public function withdrawGoalMoney(Request $request, Goal $goals, Ledger $ledger){
        dd($request, $goals, $ledger)
;       $addMoneyField = $request->validate([
            'balance' => ['required', 'numeric'],
        ])
;       $ledger->balance += $addMoneyField['balance']
;       $ledger->save()
;       $goals->current_savings -= $addMoneyField['balance']
;       $goals->save()
;       return redirect()->route('home')
;
    }
}
