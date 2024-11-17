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
        DB::statement("CREATE VIEW IF NOT EXISTS user_goals_view AS
            SELECT 
                g.goal_id,
                g.ledger_id,
                u.user_id,
                g.title,
                g.target_income,
                g.current_saving,
                g.target_date,
                g.created_at,
                g.updated_at
            FROM Users u
            JOIN Ledgers l ON u.user_id = l.user_id
            JOIN Goals g ON l.ledger_id = g.ledger_id
            ORDER BY g.target_date");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS user_goals_view");
    }
};