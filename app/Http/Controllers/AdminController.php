<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function showLedgerTransactions($id)
    {
        $ledger = Ledger::withTrashed()->findOrFail($id);
        $transactions = $ledger->transaction()->get();
        return Inertia::render('Admin/LedgerTransactions', [
            'ledger' => $ledger,
            'transactions' => $transactions
        ]);
    }
}
