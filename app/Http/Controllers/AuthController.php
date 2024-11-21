<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreUserRequest;

class AuthController extends Controller
{
    public function register(StoreUserRequest $request){
        
        // Validate the request
        $fields = $request->validated();

        // Create a new user
        $user = User::create($fields);

        // Login the user
        Auth::login($user);

        // Redirect the user
        return redirect()->route('starter');
        
    }

    public function login(Request $request){
        
        // Validate the request
        $fields = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        // Attempt to login the user
        if (!Auth::attempt($fields, $request->remember)) {
            return back()->with('message', 'Invalid login credentials');
        }
        
        if(Auth::user()->ledgers->isEmpty()){
            return redirect()->route('starter');
        } else {
            // Put the first ledger in the session
            $user = Auth::user();
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

        dd($request);

    }
}
