<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
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
        return Inertia::render('Admin/EditAdmin', [
            'user' => $user
        ]);
    }

    public function showUser($userId)
    {
        // dd($userId);
        $user = User::withTrashed()->findOrFail($userId);
        $deletedLedgers = Ledger::onlyTrashed()->where('user_id', $userId)->get();
       
        return Inertia::render("Admin/UserProfile", [
            'user' => $user,
            'deletedLedgers' => $deletedLedgers
        ]);     
    }

    public function editUser(User $user)
    {
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
