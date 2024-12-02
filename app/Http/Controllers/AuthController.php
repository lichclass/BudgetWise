<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreUserRequest;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(StoreUserRequest $request)
    {
        // Validate the request
        $fields = $request->validated();
    
        // Create a new user with the last_login field set to the current timestamp
        $user = User::create(array_merge($fields, [
            'last_login' => Carbon::now(),
        ]));
    
        // Login the user
        Auth::login($user);
    
        // Redirect the user
        return redirect()->route('starter');
    }

    public function login(Request $request)
    {
        // Validate the request
        $fields = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);
    
        // Check if the user exists and is not deleted
        $user = User::withTrashed()->where('email', $fields['email'])->first();
        if ($user && $user->trashed()) {
            return back()->with('message', 'This account has been deleted. Contact Support');
        }
    
        // Attempt to authenticate the user
        if (!Auth::attempt($fields, $request->remember)) {
            return back()->with('message', 'Invalid login credentials');
        }
    
        // Update the last_login column
        $user = Auth::user();
        $user->last_login = Carbon::now();
        $user->save();
    
        // Check if the user has any ledgers
        if ($user->ledgers->isEmpty()) {
            return redirect()->route('starter');
        } else {
            // Put the first ledger in the session
            $first_ledger = $user->ledgers->first();
            $request->session()->put('ledger', $first_ledger);
    
            // Redirect the user
            return redirect()->route('home');
        }
    }

    public function logout(Request $request){
        
        // Logout the user
        Auth::logout();

        // Invalidate the session
        $request->session()->invalidate();
        
        // Regenerate the CSRF token
        $request->session()->regenerateToken();

        // Redirect the user
        return redirect()->route('login');
        
    }

    public function changePass(Request $request){
        
        $fields = $request->validate([
            'current_password' => ['required', 'string'],
            'new_password' => ['required', 'string', 'min:3', 'confirmed'],
        ]);

        if (!Hash::check($fields['current_password'], Auth::user()->password)) {
            return back()->with('message', 'Invalid password');
        }

        $user = Auth::user();
        $user->password = Hash::make($fields['new_password']);
        $user->save();

        return redirect()->back();
    }
}
