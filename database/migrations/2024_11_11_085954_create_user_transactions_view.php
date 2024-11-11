<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE VIEW user_transactions_view AS
        SELECT 
            u.user_id,
            l.ledger_id,
            c.category_id,
            t.reference_id,
            t.amount,
            t.transaction_description,
            t.transaction_type,
            t.transaction_date
        FROM
            users u 
        JOIN ledgers l ON u.user_id = l.user_id
        JOIN transactions t ON l.ledger_id = t.reference_id
        JOIN categories c ON t.reference_id = c.category_id;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS user_transactions_view');
    }
};
