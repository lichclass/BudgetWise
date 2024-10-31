<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckLedger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next) : Response
    {
        $user = Auth::user();

        if ($user) {
            if ($user->ledgers->isEmpty()) {
                // User without ledgers: Redirect to /starter and prevent access to other pages
                if (!$request->is('starter*')) {
                    return redirect()->route('starter');
                }
            } else {
                // User with ledgers: Redirect to /home and prevent access to /starter
                if ($request->is('starter*')) {
                    return redirect()->route('home');
                }
            }
        }

        return $next($request);
    }
}
