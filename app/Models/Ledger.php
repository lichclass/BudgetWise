<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\SoftDeletes;

class Ledger extends Model
{
    use HasFactory, SoftDeletes;

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
        return $this->hasMany(Transaction::class, 'ledger_id');
    }
    public function budget()
    {
        return $this->hasMany(Budget::class, 'ledger_id');
    }
    public function goal()
    {
        return $this->hasMany(Goal::class, 'ledger_id');
    }
    public function ledger_category()
    {
        return $this->hasMany(LedgerCategory::class, 'ledger_id');
    }
}

