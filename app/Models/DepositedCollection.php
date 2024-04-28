<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepositedCollection extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'deposited_collection';

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'provincial_office',
        'requestor_name',
        'requestor_position',
        'agency_name_requestor',
        'office_address',
        'sex_requestor',
        'offician_email',
        'designated_contact_person',
        'type_of_request_cert',
        'uacs_organization_code',
        'name_of_agency',
        'bank_branch_deposit',
        'name_of_national_collecting_officer',
        'national_collecting_officer_code',
        'date_period_covered',
        'amount_figures',
        'depository_bank',
        'general_fund',
        'special_accounts_in_general_fund1',
        'special_accounts_in_general_fund_other',
        'trust_fund',
        'file_dir',
        'status',
    ];


}
