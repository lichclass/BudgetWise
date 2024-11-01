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
        'total_income',
        'total_expenses',
        'balance',
    ];

    // Belongs to
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    // Has many
    public function transaction()
    {
        return $this->hasMany(Transactions::class, 'ledger_id');
    }
    public function budget()
    {
        return $this->hasMany(Budgets::class, 'ledger_id');
    }
    public function goal()
    {
        return $this->hasMany(Goals::class, 'ledger_id');
    }
    public function ledger_category()
    {
        return $this->hasMany(Ledger_categories::class, 'ledger_id');
    }
}

