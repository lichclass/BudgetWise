<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $primaryKey = 'category_id'; // Custom primary key

    protected $fillable = [
        'user_id',
        'category_name',
        'category_type',
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Has many
    public function transaction()
    {
        return $this->hasMany(Transaction::class, 'category_id');
    }

    public function budget()
    {
        return $this->hasMany(Budget::class, 'category_id');
    }

    public function ledger_category()
    {
        return $this->hasMany(LedgerCategory::class, 'category_id');
    }
}
