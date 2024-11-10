<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function setCurrentLedger(Request $request)
    {
        $ledger = $request->input('ledger');
        $request->session()->put('ledger', $ledger);
        return redirect()->back();
    }
}
