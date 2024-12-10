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
        Schema::create('ledger_categories', function (Blueprint $table) {
            $table->foreignId('ledger_id')->constrained('ledgers','ledger_id')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('categories','category_id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ledger_categories');
    }
};
