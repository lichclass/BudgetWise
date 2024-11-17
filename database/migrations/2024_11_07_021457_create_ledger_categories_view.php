<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE VIEW IF NOT EXISTS ledger_categories_view AS
            SELECT 
                l.ledger_id,
                u.user_id AS ledger_owner,
                c.user_id AS category_owner,
                c.category_id,
                c.category_name,
                c.is_default,
                c.category_type
            FROM Users u
            JOIN Ledgers l ON u.user_id = l.user_id
            JOIN Ledger_categories lc ON l.ledger_id = lc.ledger_id
            JOIN Categories c ON lc.category_id = c.category_id
            ORDER BY l.ledger_id, c.category_name");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS ledger_categories_view");
    }
};