<?php

namespace App\Http\Controllers;

use App\Models\Goals;
use App\Models\Ledgers;
use Illuminate\Http\Request;
use App\Models\Ledger_Categories;
use App\Models\Categories;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function setCurrentLedger(Request $request)
    {
        $ledger = $request->input('ledger');
        $request->session()->put('ledger', $ledger);
        return redirect()->back();
    }

    public function createNewLedger(Request $request)
    {
       
       dd($request);
        //creating ledger and storing id
        $ledgerFields = [
            'user_id' => Auth::id(),
            'ledger_name' => $request->ledgerName,
        ];
        $ledger = Ledgers::create($ledgerFields);
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
            $category = Categories::create($categoryFields);
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
           Ledger_categories::create($Ledger_categoryFields);
        }

        return redirect()->route('home');
    }

    public function addGoalMoney(Request $request, Goals $goals){
        //to be added
    }
}
