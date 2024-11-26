<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Goal extends Model
{
    use HasFactory;

    protected $primaryKey = 'goal_id'; // Custom primary key

    protected $fillable = [
        'ledger_id',
        'title',
        'target_income',
        'current_savings',
        'target_date',
    ];

    public function ledger()
    {
        return $this->belongsTo(Ledger::class, 'ledger_id');
    }
}
