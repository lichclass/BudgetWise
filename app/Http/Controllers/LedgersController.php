<?php

namespace App\Http\Controllers;

use App\Models\Ledgers;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLedgersRequest;
use App\Http\Requests\UpdateLedgersRequest;

class LedgersController extends Controller
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
    public function store(StoreLedgersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ledgers $ledgers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ledgers $ledgers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLedgersRequest $request, Ledgers $ledgers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ledgers $ledgers)
    {
        //
    }
}
