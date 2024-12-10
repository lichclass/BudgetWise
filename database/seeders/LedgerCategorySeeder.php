<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\LedgerCategory;
use App\Models\Ledger;
use App\Models\Category;
use Illuminate\Database\Seeder;

class LedgerCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::pluck('category_id')->toArray();
        $ledgers = Ledger::where('ledger_id', '!=', 21)->pluck('ledger_id')->toArray();

        foreach ($ledgers as $ledgerId) {
            LedgerCategory::create([
                'ledger_id' => $ledgerId,
                'category_id' => $categories[array_rand($categories)],
            ]);
        }
        
        LedgerCategory::create([
            'ledger_id' => 21,
            'category_id' => 1,
        ]);

        LedgerCategory::create([
            'ledger_id' => 21,
            'category_id' => 16,
        ]);
    }
}
