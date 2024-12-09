<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LedgerCategoryController;
use App\Http\Controllers\LedgerController;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\StarterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
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

Route::middleware(['admin'])->group(function(){
    Route::inertia('/admin/dashboard', 'Admin/Dashboard')->name('admin.dashboard');
    Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users');
    Route::inertia('/admin/settings', 'Admin/Settings')->name('admin.settings');
    Route::inertia('/admin/userprofile', 'Admin/UserProfile')->name('admin.user-profile');


    Route::get('/admin/showuser/{user}', [AdminController::class, 'showUser'])->name('admin.show-user');
    Route::get('/admin/editadmin/{id}', [AdminController::class, 'editAdmin'])->name('admin.edit-admin');
    Route::get('/admin/edituser/{user}', [AdminController::class, 'editUser'])->name('admin.edit-user');

    Route::put('/admin/restoreuser/{id}', [AdminController::class, 'restoreUser'])->name('admin.restore-user');
    Route::put('/admin/restoreledger/{id}', [AdminController::class, 'restoreLedger'])->name('admin.restore-ledger');
    
    Route::delete('/admin/deleteaccount/{id}', [AdminController::class, 'deleteAccount'])->name('admin.delete-account');
    Route::get('/admin/ledger/{id}/transactions', [AdminController::class, 'showLedgerTransactions'])->name('admin.ledger.transactions');
});

Route::middleware(['auth', 'user'])->group(function () {

    Route::get('/home', [HomeController::class, 'index'])->name('home')->middleware('check.ledger');
    Route::post('/home/create-new-ledger', [HomeController::class, 'createNewLedger'])->name('create-new-ledger');
    Route::put('/home/add-goal-money/{id}', [HomeController::class, 'addGoalMoney'])->name('goals.add');
    Route::put('/home/withdraw-goal-money/{id}', [HomeController::class, 'withdrawGoalMoney'])->name('goals.withdraw');

    Route::post('/set-current-ledger', [HomeController::class, 'setCurrentLedger'])->name('set-current-ledger');

    Route::resource('ledger', LedgerController::class);
    Route::resource('transaction', TransactionController::class);
    Route::resource('budget', BudgetController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('goals', GoalController::class);
    Route::resource('user', UserController::class);
    Route::resource('ledger-category', LedgerCategoryController::class);

    Route::inertia('/settings', 'Settings')->name('settings')->middleware('check.ledger');
    Route::put('/settings/{id}', [AuthController::class, "changePass"])->name('change-pass');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});






