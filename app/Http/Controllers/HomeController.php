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
        // session(['ledger' => Ledger::where('user_id', Auth::id())->first()]);
        return Inertia::render('Home');
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

        $newLedger = Ledger::find($ledgerID);
        session(['ledger' => $newLedger]);

        return redirect()->route('home')->with('reload', true);
    }

    public function addGoalMoney(Request $request, $id){
        $goals = Goal::find($id);
        $ledger = Ledger::find(session('ledger.ledger_id'));
        $addMoneyField = $request->validate([
            'amount' => ['required', 'numeric'],
        ]);

        

        $ledger->balance -= $addMoneyField['amount'];
        $ledger->save();
        $goals->current_saving += $addMoneyField['amount'];
        $goals->save();

        session(['ledger' => $ledger]);
        return redirect()->route('home');
    }

    public function withdrawGoalMoney(Request $request, $id){
        $goals = Goal::find($id);
        $ledger = Ledger::find(session('ledger.ledger_id'));
        $withdrawMoneyField = $request->validate([
            'amount' => ['required', 'numeric'],
        ]);
        $ledger->balance += $withdrawMoneyField['amount'];
        $ledger->save();
        $goals->current_saving -= $withdrawMoneyField['amount'];
        $goals->save();
        session(['ledger' => $ledger]);
        return redirect()->route('home');
    }
}
