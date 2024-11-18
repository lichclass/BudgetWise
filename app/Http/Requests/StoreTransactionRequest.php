<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'ledger_id' => ['required', 'numeric'],
            'category_id' => ['required', 'numeric'],
            'amount' => ['required', 'numeric'],
            'transaction_description' => ['string', 'max:255'],
            'transaction_date' => ['required', 'date', 'default:'.now()->toDateString()],
            'transaction_type' => ['required', Rule::in(['income', 'expense'])],
        ];
    }
}
