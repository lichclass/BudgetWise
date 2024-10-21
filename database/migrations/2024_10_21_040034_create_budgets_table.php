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
        Schema::create('budgets', function (Blueprint $table) {
            $table->id('budget_id');
            $table->foreignId('ledger_id')->constrained('ledgers','ledger_id');
            $table->foreignId('category_id')->constrained('categories', 'category_id');
            $table->decimal('amount_limit', total: 12, places: 2); 
            $table->boolean('is_active')->default(true);   
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('budgets');
    }
};
