<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\LedgerCategory;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StarterController extends Controller
{
    public function showCategories()
    {
        // Get all categories
        $categories = Category::where('is_default', true)
            ->orWhere('user_id', Auth::id())
            ->get();

        // Return the view
        return Inertia::render('Starter', ['categories' => $categories]);
    }


    public function submit(Request $request){

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

        $user = Auth::user();
        $first_ledger = $user->ledgers->first();
        $request->session()->put('ledger', $first_ledger);

        return redirect()->route('home');
    }

}
