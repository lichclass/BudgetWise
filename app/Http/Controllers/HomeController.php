<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function setCurrentLedger(Request $request)
    {
        \Log::info('Request data:', $request->all());
        $ledgerId = $request->input('ledger_id');
        $request->session()->put('ledger', $ledgerId);
        return redirect()->back();
    }
}
