<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ledger_categories extends Model
{
    use HasFactory;

    // protected $primaryKey = 'reference_id'; // Custom primary key

    protected $fillable = [
        'ledger_id',
        'category_id',
    ];

    public function ledger()
    {
        return $this->belongsTo(Ledgers::class, 'ledger_id');
    }
    public function category()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }
}
