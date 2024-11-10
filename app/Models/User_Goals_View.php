<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User_Goals_View extends Model
{
    protected $table = 'user_goals_view'; // Replace with the actual view or table name if needed

    public $incrementing = true; // Assuming goal_id is an auto-increment primary key
    public $timestamps = true; // Enable timestamps

    protected $fillable = [
        'goal_id',
        'ledger_id',
        'user_id',
        'title',
        'target_income',
        'current_saving',
        'target_date',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'target_income' => 'decimal:2',
        'current_saving' => 'decimal:2',
        'target_date' => 'date',
    ];
}
