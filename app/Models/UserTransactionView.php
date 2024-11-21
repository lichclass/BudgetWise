<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserTransactionView extends Model
{
    protected $table = 'user_transactions_view'; // Replace with the actual view or table name if needed

    public $incrementing = false; // Assuming goal_id is an auto-increment primary key
    public $timestamps = false; // Enable timestamps

    protected $casts = [
        'amount' => 'decimal:2',  
        'transaction_date' => 'datetime:Y-m-d',
    ];
}