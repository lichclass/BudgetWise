<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Models\Goal;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGoalRequest;
use App\Http\Requests\UpdateGoalRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\UserGoalView;
use Illuminate\Http\Request;

use Inertia\Inertia;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_goals = UserGoalView::where('user_id', Auth::id())->get();
        return Inertia::render('Home', [
            'goals' => $user_goals,        
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
            'title' => ['required', 'string'],
            'target_income' => ['required', 'numeric'],
            'target_date' => ['nullable', 'date']
        ]);

        $ledgerId = session('ledger.ledger_id');
        if(!$ledgerId) {
            return redirect()->back();
        }

        $fields['ledger_id'] = $ledgerId;
        
        Goal::create($fields);  

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Goal $goals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Goal $goals)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
   
    public function update(Request $request, $id)
    {
        $fields = $request->validate([
            'title' => ['required', 'string'],
            'target_income' => ['required', 'numeric'],
            'target_date' => ['nullable', 'date']
        ]);


        $goals = Goal::find($id);
        if(!$goals) {
            return redirect()->back();
        }

        $goals->update($fields);
        
        return redirect()->route('home');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $ledger = Ledger::find(session('ledger.ledger_id'));
        $goals = Goal::find($id);
        if(!$goals) {
            return redirect()->back();
        }
        $ledger->balance += $goals->current_saving;
        $ledger->save();

        session(['ledger' => $ledger]);

        $goals->delete();
        return redirect()->route('home');
    }
}
