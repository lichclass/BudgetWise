<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ledgers extends Model
{
    use HasFactory;

    protected $primaryKey = 'ledger_id'; // Custom primary key

    protected $fillable = [
        'user_id',
        'ledger_name',
        'description',
        'total_income',
        'total_expenses',
        'balance',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
