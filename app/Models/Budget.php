<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Budget extends Model
{
    use HasFactory;

    protected $primaryKey = 'budget_id'; // Custom primary key

    protected $fillable = [
        'ledger_id',
        'category_id',
        'amount_limit',
    ];

    public function ledger()
    {
        return $this->belongsTo(Ledger::class, 'ledger_id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    
}