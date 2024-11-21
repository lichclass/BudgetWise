<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LedgerCategoryView extends Model
{   
    // Set the table name to your view name
    protected $table = 'ledger_categories_view'; // Replace with the actual view name

    // Disable primary key incrementing and timestamps if they are not applicable
    public $incrementing = false;
    public $timestamps = false;

    // If you want, you can define casts for specific fields
    protected $casts = [
        'is_default' => 'boolean',
        'category_type' => 'string', // Adjust based on the type you expect
    ];
}
