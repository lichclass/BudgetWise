<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Food & Drinks', 'type' => 'expense'],
            ['name' => 'Groceries', 'type' => 'expense'],
            ['name' => 'Transportation', 'type' => 'expense'],
            ['name' => 'Health & Fitness', 'type' => 'expense'],
            ['name' => 'Bills & Utilities', 'type' => 'expense'],
            ['name' => 'Home', 'type' => 'expense'],
            ['name' => 'Entertainment', 'type' => 'expense'],
            ['name' => 'Shopping', 'type' => 'expense'],
            ['name' => 'Education', 'type' => 'expense'],
            ['name' => 'Gifts & Donations', 'type' => 'expense'],
            ['name' => 'Investments', 'type' => 'expense'],
            ['name' => 'Salary', 'type' => 'income'],
            ['name' => 'Freelance', 'type' => 'income'],
            ['name' => 'Investments', 'type' => 'income'],
            ['name' => 'Savings', 'type' => 'income'],
        ];

        foreach ($categories as $category) {
            Categories::create([
                'category_name' => $category['name'],
                'is_default' => true,
                'category_type' => $category['type'],
            ]);
        }
    }
}
