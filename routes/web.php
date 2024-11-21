<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LedgerCategoryController;
use App\Http\Controllers\LedgerController;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\StarterController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route for Testing Page
Route::inertia('/test', 'Test')->name('test');

// Route for Landing Page
Route::inertia('/', 'Landing')->name('landing');


Route::middleware('guest')->group(function () {
    Route::inertia('/login', 'Login')->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login');

    Route::inertia('/register', 'Register')->name('register');
    Route::post('/register', [AuthController::class, 'register'])->name('register');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/starter', [StarterController::class, 'showCategories'])->name('starter')->middleware('check.ledger');
    Route::post('/starter', [StarterController::class, 'submit'])->name('starter.submit');
});

Route::middleware(['auth'])->group(function () {

    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::post('/home', [HomeController::class, 'createNewLedger'])->name('create-new-ledger');
    Route::put('/home', [HomeController::class, 'addGoalMoney'])->name('add-balance');
    Route::put('/home', [HomeController::class, 'withdrawGoalMoney'])->name('withdraw-balance');

    Route::post('/set-current-ledger', [HomeController::class, 'setCurrentLedger'])->name('set-current-ledger');

    Route::resource('transaction', TransactionController::class);
    Route::resource('budget', BudgetController::class);
    Route::resource('category', CategoryController::class);

    Route::inertia('/settings', 'Settings')->name('settings')->middleware('check.ledger');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});




