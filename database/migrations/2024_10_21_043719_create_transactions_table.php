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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id('reference_id');
            $table->foreignId('ledger_id')->constrained('ledgers', 'ledger_id');
            $table->foreignId('category_id')->constrained('categories', 'category_id');
            $table->decimal('amount', 12, 2);    
            $table->date('transaction_date');
            $table->enum('transaction_type', ['expense', 'income']);
            $table->boolean('is_deleted')->default(false);  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
