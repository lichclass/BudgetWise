<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transactions>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ledger_id' => $this->faker->randomDigitNot(0),
            'category_id' => $this->faker->randomDigitNot(0),
            'amount' => $this->faker->randomFloat(2, 0, 10000),
            'transaction_description' => $this->faker->sentence(),
            'transaction_date' => $this->faker->dateTimeThisYear(),
            'transaction_type' => $this->faker->randomElement(['income', 'expense']),
        ];
    }
}
