<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transactions extends Model
{
    use HasFactory;

    protected $primaryKey = 'reference_id'; // Custom primary key

    protected $fillable = [
        'ledger_id',
        'category_id',
        'amount',
        'transaction_description',
        'transaction_date',
        'transaction_type',
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
