<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ledgers', function (Blueprint $table) {
            $table->id('ledger_id');
            $table->foreignId('user_id')->constrained('users', 'user_id'); 
            $table->string('ledger_name');
            $table->string('description');
            $table->decimal('total_income', 12, 2);
            $table->decimal('total_expenses', 12, 2);
            $table->decimal('balance', 12, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ledgers');
    }
};
