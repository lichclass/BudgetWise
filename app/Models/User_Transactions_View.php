<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User_Transactions_View extends Model
{
    protected $table = 'user_transactions_view'; // Replace with the actual view or table name if needed

    public $incrementing = false; // Assuming goal_id is an auto-increment primary key
    public $timestamps = false; // Enable timestamps

    protected $fillable = [
        'user_id',
        'ledger_id',
        'category_id',
        'reference_id',
        'amount',
        'transaction_description',
        'transaction_type',
        'transaction_date',
    ];

    protected $casts = [
        'amount' => 'decimal:2',  
        'transaction_date' => 'date',
    ];
}