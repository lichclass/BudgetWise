<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLedgerRequest;
use App\Http\Requests\UpdateLedgerRequest;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class LedgerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //pass all the ledgers based on user id
        // $ledgers = Ledgers::where('user_id', Auth::id())->get();
      
        // return Inertia::render('Home', [
        //     'ledgers' => $ledgers
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
    public function store(StoreLedgerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ledger $ledgers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ledger $ledgers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLedgerRequest $request, Ledger $ledgers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ledger $ledgers)
    {
        dd($ledgers);
        $ledgers->delete();
        return redirect()->route('home');
    }
}
