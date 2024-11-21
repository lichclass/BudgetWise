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
        DB::statement("CREATE OR REPLACE VIEW user_budgets_view AS
            SELECT 
                u.user_id,
                l.ledger_id,
                c.category_id,
                c.category_name,
                b.budget_id,
                b.amount_limit,
                b.is_active
            FROM 
                users u 
            JOIN ledgers l ON u.user_id = l.user_id
            JOIN budgets b ON l.user_id = b.ledger_id
            JOIN categories c ON b.category_id = c.category_id;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_budgets_view');
    }
};
