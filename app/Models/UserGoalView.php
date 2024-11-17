<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserGoalView extends Model
{
    protected $table = 'user_goals_view'; // Replace with the actual view or table name if needed

    public $incrementing = false; // Assuming goal_id is an auto-increment primary key
    public $timestamps = false; // Disable timestamps

    protected $casts = [
        'target_income' => 'decimal:2',
        'current_saving' => 'decimal:2',
        'target_date' => 'date',
    ];
}
