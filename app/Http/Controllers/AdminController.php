<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use App\Models\LedgerCategoryView;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
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

    public function editAdmin($userId){
        $user = User::withTrashed()->findOrFail($userId);
        return Inertia::render('Admin/AdminEditSettings', [
            'user' => $user
        ]);
    }

    public function showUser($userId)
    {
        // dd($userId);
        $user = User::withTrashed()->findOrFail($userId);
        $ledgers = Ledger::where('user_id', $userId)->get();
        $deletedLedgers = Ledger::onlyTrashed()->where('user_id', $userId)->get();
        $ledgerCategories = LedgerCategoryView::where('ledger_owner', $userId)->get();
       
        return Inertia::render("Admin/UserProfile", [
            'user' => $user,
            'ledgers' => $ledgers,
            'deletedLedgers' => $deletedLedgers,
            'categories' => $ledgerCategories
        ]);     
    }

    public function editUser($userId)
    {
        $user = User::withTrashed()->findOrFail($userId);
        return Inertia::render('Admin/UserEditSettings', [
            'user' => $user
        ]);
    }
    public function restoreUser($id)
    {
        $user = User::withTrashed()->findOrFail($id);
        if($user->trashed()){
            $user->restore();
        }
        return redirect()->route('admin.users');
    }

    public function restoreLedger($id)
    {
        $ledger = Ledger::withTrashed()->findOrFail($id);
        if($ledger->trashed()){
            $ledger->restore();
        }
        return redirect()->route('admin.users');
    }

    public function deleteAccount($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route('admin.users');
    }
    
}
