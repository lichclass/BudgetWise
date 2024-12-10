<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ledger;
use Carbon\Carbon;

class LedgerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $totalLedgers = 20;

        Ledger::factory()
            ->count($totalLedgers)
            ->state(function (array $attributes, $index) {
                return [
                    'user_id' => random_int(5, 24),
                ];
            })
            ->create();

        Ledger::create([
            'user_id' => 25,
            'ledger_name' => 'Personal',
            'deleted_at' => null,
        ]);
    }
}