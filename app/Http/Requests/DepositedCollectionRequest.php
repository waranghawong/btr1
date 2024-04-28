<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DepositedCollectionRequest extends FormRequest
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
         
            'provincial_office' => 'required',
            'name_of_requestor' => 'required',
            'position_of_requestor' => 'required',
            'agency_name_of_requestor' => 'required',
            'office_address' => 'required',
            'sex_requestor' => 'required',
            'offician_email' => 'required',
            'type_of_request_cert' => 'required',
            'designated_contact_person' => 'required|min_digits:11|max_digits:11',
            'uacs_organization_code' => 'required',
            'name_of_agency' => 'required',
            'bank_branch_deposit' => 'required',
            'name_of_national_collecting_officer' => 'required',
            'national_collecting_officer_code' => 'required',
            'date_period_covered' => 'required|date',
            'amount_figures' => 'required',
            'depository_bank' => 'required',
            'general_fund' => 'required',
            'special_accounts_in_general_fund1' => 'required',
            'special_accounts_in_general_fund_other' => 'nullable',
            'trust_fund' => 'required',
            'files_dir' => 'sometimes|required',
        ];
    }
}
