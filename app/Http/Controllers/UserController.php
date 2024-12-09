<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Ledger;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::withTrashed()->get();
        return Inertia::render('Admin/Users', [
            'users' => $users
        ]);
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
    public function store(StoreUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($userId)
    {
        // dd($userId);
        $user = User::withTrashed()->findOrFail($userId);
        $deletedLedgers = Ledger::onlyTrashed()->where('user_id', $userId)->get();
        if($user->role == 'admin') {
            return Inertia::render('Admin/EditAdmin', [
                'user' => $user
            ]);
        } else {
            return Inertia::render("Admin/UserProfile", [
                'user' => $user,
                'deletedLedgers' => $deletedLedgers
            ]);
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('Admin/UserEditSettings', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // $user = User::findOrFail($userId);
        $user->update($request->all());
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($userId)
    {
        $users = User::findOrFail($userId);
        $users->delete();
        return redirect()->route('login');
    }
}
