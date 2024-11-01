<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\BudgetsController;
use App\Http\Controllers\StarterController;
use App\Models\Budgets;
use App\Models\Categories;
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
    Route::inertia('/home', 'Home')->name('home')->middleware('check.ledger');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::resource('transactions', TransactionsController::class);
    Route::resource('budgets', BudgetsController::class);
    Route::resource('category', CategoriesController::class);

});

Route::middleware(['auth'])->group(function () {
    Route::get('/starter', [StarterController::class, 'showCategories'])->name('starter')->middleware('check.ledger');
    Route::post('/starter', [StarterController::class, 'submit'])->name('starter.submit');
});




