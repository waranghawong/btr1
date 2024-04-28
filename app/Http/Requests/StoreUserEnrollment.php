<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserEnrollment extends FormRequest
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
            'email' => 'required|string',
            'first_name' => 'required|string',
            'middle_name' => 'required|string',
            'last_name' => 'required|string',
            'position_title' => 'required|string',
            'client_types' => 'required|string',
            'department' => 'required|string',
            'agency' => 'required|string',
            'operating_unit' => 'required|string',
            'region' => 'required|string',
            'province' => 'required|string',
            'city' => 'required|string',
            'signature_of_user' => 'required|string',
            'full_name_of_user' => 'required|string',
            'position_of_user' => 'required|string',
            'date_filed' => 'required|string',
            'full_name_of_head_of_agency' => 'required|string',
            'designation_of_head_of_agency' => 'required|string',
        ];
    }
}
