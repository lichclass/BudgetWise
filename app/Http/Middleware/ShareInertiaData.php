<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Ledger;
use App\Models\LedgerCategoryView;
use App\Models\UserTransactionView;
use App\Models\UserGoalView;

class ShareInertiaData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $ledgers = Ledger::where('user_id', Auth::id())->get();
            $categories = LedgerCategoryView::where('ledger_owner', Auth::id())->get();
            $transactions = UserTransactionView::where('user_id', Auth::id())->get();
            $goals = UserGoalView::where('user_id', Auth::id())->get();

            Inertia::share([
                'ledgers' => $ledgers,
                'categories' => $categories,
                'transactions' => $transactions,
                'goals' => $goals,
            ]);
        }

        return $next($request);
    }
}
