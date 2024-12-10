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
        Schema::create('goals', function (Blueprint $table) {
            $table->id('goal_id');
            $table->foreignId('ledger_id')->constrained('ledgers', 'ledger_id')->onDelete('cascade');
            $table->string('title');
            $table->decimal('target_income', total: 12, places: 2);
            $table->decimal('current_saving', total: 12, places: 2)->default(0);
            $table->date('target_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('goals');
    }
};
