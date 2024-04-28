import React from 'react'
import TextInput from '@/Components/TextInput'
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';

export default function SixthStep({ formData, errors }) {
  console.log(errors)
  return (
    <div>
        <div className="max-w-sm mx-auto">
          <div>
            <header class="mb-4">
              <h2 className="text-lg font-medium text-gray-900">Requestor's Information</h2>
            </header>
            <div class="mb-3">
              <label for="name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincial Office</label> 
              <span className="text-gray-500 text-sm font-thin">{formData.provincial_office}</span>
              <InputError className="mt-2" message={errors.provincial_office} />
            </div>
            <div class="mb-3">
              <label for="name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Requestor</label> 
              <span className="text-gray-500 text-sm font-thin">{formData.name_of_requestor}</span>
              <InputError className="mt-2" message={errors.name_of_requestor} />
            </div>
            <div class="mb-3">
              <label for="position_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position of Requestor</label>
              <span className="text-gray-500 text-sm font-thin">{formData.position_of_requestor}</span>
              <InputError className="mt-2" message={errors.position_of_requestor} />
            </div>
            <div class="mb-3">
              <label for="agency_name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agency Name of Requestor</label>
              <span className="text-gray-500 text-sm font-thin">{formData.agency_name_of_requestor}</span>
              <InputError className="mt-2" message={errors.agency_name_of_requestor} />
            </div>
            <div class="mb-3">
              <label for="office_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Office Address</label>
              <span className="text-gray-500 text-sm font-thin">{formData.office_address}</span>
              <InputError className="mt-2" message={errors.office_address} />
             
            </div>
            <div class="mb-3">
              <label for="sex_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex (Requestor)</label>
              <span className="text-gray-500 text-sm font-thin">{formData.sex_requestor}</span>
              <InputError className="mt-2" message={errors.sex_requestor} />
            </div>
            <div class="mb-3">
              <label for="offician_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Official Email Address</label>
              <span className="text-gray-500 text-sm font-thin">{formData.offician_email}</span>
              <InputError className="mt-2" message={errors.offician_email} />
            </div>
            <div class="mb-3">
              <label for="designated_contact_person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No. of the Designated Contact Person</label>
              <span className="text-gray-500 text-sm font-thin">{formData.designated_contact_person}</span>
              <InputError className="mt-2" message={errors.designated_contact_person} />
            </div>
          </div>

          <div>
            <header class="mb-4">
              <h2 className="text-lg font-medium text-gray-900">Certification Requested</h2>
            </header>
            <div class="mb-3">
              <label for="type_of_request_cert" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Request for Certification</label>
              <span className="text-gray-500 text-sm font-thin">{formData.type_of_request_cert}</span>
              <InputError className="mt-2" message={errors.type_of_request_cert} />
            </div>
            <div class="mb-3">
              <label for="uacs_organization_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UACS-Organization Code</label>
              <span className="text-gray-500 text-sm font-thin">{formData.uacs_organization_code}</span>
              <InputError className="mt-2" message={errors.uacs_organization_code} />
            </div>
            <div class="mb-3">
              <label for="name_of_agency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Agency</label>
              <span className="text-gray-500 text-sm font-thin">{formData.name_of_agency}</span>
              <InputError className="mt-2" message={errors.name_of_agency} />
            </div>
            <div class="mb-3">
              <label for="bank_branch_deposit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Branch of Deposit</label>
              <span className="text-gray-500 text-sm font-thin">{formData.bank_branch_deposit}</span>
              <InputError className="mt-2" message={errors.bank_branch_deposit} />
            </div>
            <div class="mb-3">
              <label for="name_of_national_collecting_officer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of National Collecting Officer</label>
              <span className="text-gray-500 text-sm font-thin">{formData.name_of_national_collecting_officer}</span>
              <InputError className="mt-2" message={errors.name_of_national_collecting_officer} />
            </div>
            <div class="mb-3">
              <label for="national_collecting_officer_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National Collecting Officer Code</label>
              <span className="text-gray-500 text-sm font-thin">{formData.national_collecting_officer_code}</span>
              <InputError className="mt-2" message={errors.national_collecting_officer_code} />
            </div>
          </div>

          <div>
            <header class="mb-4">
              <h2 className="text-lg font-medium text-gray-900">Deposited Collections Information</h2>
            </header>
            <div class="mb-3">
              <label for="date_period_covered" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date/Period Covered of the Collection</label>
              <span className="text-gray-500 text-sm font-thin">{formData.date_period_covered}</span>
              <InputError className="mt-2" message={errors.date_period_covered} />
            </div>
            <div class="mb-3">
              <label for="amount_figures" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Figures</label>
              <span className="text-gray-500 text-sm font-thin">{formData.amount_figures}</span>
              <InputError className="mt-2" message={errors.amount_figures} />
            </div>
            <div class="mb-3">
              <label for="depository_bank" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Depository Bank</label>
              <span className="text-gray-500 text-sm font-thin">{formData.depository_bank}</span>
              <InputError className="mt-2" message={errors.depository_bank} />
            </div>
          </div>

          <div>
            <header class="mb-4">
              <h2 className="text-lg font-medium text-gray-900">UACS Funding Source</h2>
            </header>
            <div class="mb-3">
              <label for="provincial_office" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">General Fund</label>
              <span className="text-gray-500 text-sm font-thin">{formData.general_fund}</span>
              <InputError className="mt-2" message={errors.general_fund} />
            </div>
            <div class="mb-3">
              <label for="provincial_office" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Special Accounts in the General Fund (SAGF)</label>
              <span className="text-gray-500 text-sm font-thin">{formData.special_accounts_in_general_fund1 == 'not_applicable' ? 'Not Applicable' : formData.special_accounts_in_general_fund_other}</span>
              <InputError className="mt-2" message={errors.special_accounts_in_general_fund1} />
            </div>
            <div class="mb-3">
              <label for="provincial_office" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Trust Fund</label>
              <span className="text-gray-500 text-sm font-thin">{formData.trust_fund}</span>
              <InputError className="mt-2" message={errors.trust_fund} />
            </div>
          </div>

          <div>
            <header class="mb-4">
              <h2 className="text-lg font-medium text-gray-900">Supporting Document/s</h2>
            </header>
            <div class="mb-3">
              <span className="text-gray-500 text-sm font-thin">{formData.files_dir}</span>
              <InputError className="mt-2" message={errors.files} />
            </div>
          </div>


      </div>
    </div>
  )
}
