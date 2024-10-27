<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StarterController extends Controller
{
    public function showCategories()
    {
        // Get all categories
        $categories = Categories::where('is_default', true)
            ->orWhere('user_id', Auth::id())
            ->get();

        // Return the view
        return Inertia::render('Starter', ['categories' => $categories]);
    }
}
