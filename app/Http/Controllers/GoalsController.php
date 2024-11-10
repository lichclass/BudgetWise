<?php

namespace App\Http\Controllers;

use App\Models\Goals;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGoalsRequest;
use App\Http\Requests\UpdateGoalsRequest;

class GoalsController extends Controller
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
    public function store(StoreGoalsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Goals $goals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Goals $goals)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGoalsRequest $request, Goals $goals)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Goals $goals)
    {
        $goal->delete();
        return redirect()->route('home');
    }
}
