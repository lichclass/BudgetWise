<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Models\Goal;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGoalRequest;
use App\Http\Requests\UpdateGoalRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\UserGoalView;

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
        // $ledgers = Ledgers::where('user_id', Auth::id())->get();

        // $goals=[];
        // foreach($ledgers as $ledger) {
        //     $goals = array_merge($goals, Goals::where('ledger_id', $ledger->ledger_id)->get()->toArray());
        // }
        
        // return Inertia::render('Test', [
        //     'goalsList' => $goals
        // ]);
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
    public function store(StoreGoalRequest $request)
    {
        //
        dd($request); //debugging
        $fields = $request->validated();
        $goal = Goal::create($fields);
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
   
    public function update(UpdateGoalRequest $request, Goal $goals)
    {   
        dd($request, $goals);
        $fields = $request->validated();
        $goals->update($fields);
        return redirect()->route('home');
    }

    // public function withdraw()
    // {

    // }
    // public function add()
    // {

    // }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Goal $goals)
    {
        $goals->delete();
        return redirect()->route('home');
    }
}
