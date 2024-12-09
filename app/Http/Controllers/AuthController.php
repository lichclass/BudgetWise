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
        if ($user->role === 'user') {
            if ($user->ledgers->isEmpty()) {
                return redirect()->route('starter');
            } else {
                // Put the first ledger in the session
            $first_ledger = $user->ledgers->first();
            $request->session()->put('ledger', $first_ledger);
    
            // Redirect the user
            return redirect()->route('home');
            }
            
        } else {
            return redirect()->route('admin.dashboard');  
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
            return back()->withErrors(['current_password' => 'The current password is incorrect']);
        }

        if(Hash::check($fields['new_password'], Auth::user()->password)){
            return back()->withErrors(['new_password' => 'The new password cannot be the same as the current password']);
        }

         
        $user->password = Hash::make($fields['new_password']);
        $user->save();

        return redirect()->back();
    }

    public function forceChangePass(Request $request){
        
        $fields = $request->validate([
            'new_password' => ['required', 'string', 'min:3', 'confirmed'],
        ]);
        
        $user = User::withTrashed()->findOrFail($request->user_id);

        if(Hash::check($fields['new_password'], $user->password)){
            return back()->withErrors(['new_password' => 'The new password cannot be the same as the current password']);
        }
    
        $user->password = Hash::make($fields['new_password']);
        $user->save();

        return redirect()->back();
    }
}
