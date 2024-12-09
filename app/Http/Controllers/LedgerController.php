<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLedgerRequest;
use App\Http\Requests\UpdateLedgerRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class LedgerController extends Controller
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
    public function update(Request $request, $id)
    {
        $fields = $request->validate([
            'ledger_name' => ['required', 'string'],
        ]);
        $ledger = Ledger::findOrFail($id);
        $ledger->update($fields);

        session([
            'ledger' => $ledger
        ]);
        
        return redirect()->back()->with('reload', true);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $ledger = Ledger::findOrFail($id);
        $ledger->delete();

        $ledgers = Auth::user()->ledgers;
        if ($ledgers->count() > 0) {
            session([
                'ledger' => $ledgers->first()
            ]);
        } else {
            return redirect()->route('starter');
        }

        return redirect()->route('home')->with('reload', true);
    }
}
