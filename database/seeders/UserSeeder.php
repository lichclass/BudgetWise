<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {

        User::create([
            'username' => 'superadmin',
            'email' => 'superadmin@budgetwise.com',
            'email_verified_at' => now(),
            'role' => 'super',
            'password' => Hash::make('super'),
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::create([
            'username' => 'admin1',
            'email' => 'admin1@budgetwise.com',
            'email_verified_at' => now(),
            'role' => 'admin',
            'password' => Hash::make('admin1'),
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::create([
            'username' => 'admin2',
            'email' => 'admin2@budgetwise.com',
            'email_verified_at' => now(),
            'role' => 'admin',
            'password' => Hash::make('admin2'),
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::create([
            'username' => 'admin3',
            'email' => 'admin3@budgetwise.com',
            'email_verified_at' => now(),
            'role' => 'admin',
            'password' => Hash::make('admin3'),
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        User::factory()
            ->count(20)
            ->state(function (array $attributes) {
                return [
                    'created_at' => Carbon::create(2024, rand(1, 12), rand(1, 28)),
                ];
            })
            ->create();

        User::create([
            'username' => 'nash',
            'email' => 'nash@gmail.com',
            'email_verified_at' => now(),
            'role' => 'user',
            'password' => Hash::make('nash'),
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
