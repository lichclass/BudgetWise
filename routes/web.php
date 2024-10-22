<?php

use App\Http\Controllers\AuthController;
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

Route::middleware('auth')->group(function () {
    Route::inertia('/home', 'Home')->name('home');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});