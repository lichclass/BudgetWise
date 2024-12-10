<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Transaction;
use App\Models\Ledger;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        Transaction::factory()
            ->count(320)
            ->state(function (array $attributes, $index) use ($faker) {
                return [
                    'ledger_id' => 21,
                    'category_id' => $faker->randomElement([1, 16]),
                ];
            })
            ->create();

        // Calculate total income and total expenses for ledger_id 21
        $totalIncome = Transaction::where('ledger_id', 21)
            ->where('transaction_type', "income") // Assuming category_id 1 is for income
            ->sum('amount');

        $totalExpenses = Transaction::where('ledger_id', 21)
            ->where('transaction_type', "expense") // Assuming category_id 16 is for expenses
            ->sum('amount');

        // Update the balance of ledger_id 21
        Ledger::where('ledger_id', 21)->update([
            'balance' => $totalIncome - $totalExpenses,
        ]);
    }
}
