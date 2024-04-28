import React from 'react'
import TextInput from '@/Components/TextInput'
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';

const provincial_office = [
    '',
    'Albay',
    'Camarines Norte',
    'Camarines Sur',
    'Catanduanes',
    'Masbate',
    'Sorsogon'
]

export default function SecondStep({ formData, setFormData }) {
  return (
    <div>
        <div className="max-w-sm mx-auto">
                <header class="mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Requestor's Information</h2>
                </header>
            <div class="mb-3"> 
                    <label for="provincial_office" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincial Office</label>
                    <SelectInput
                    name="provincial_office"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    options={provincial_office}
                    value={formData.provincial_office}
                    required
                    onChange={(e) => 
                        setFormData({ ...formData, provincial_office: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Requestor</label>
                    <p class="text-xs mb-2 font-thin">(Signatory in the Request Form-- Head of Office)</p>
                    <TextInput
                    name="name_of_requestor"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.name_of_requestor}
                    required
                    onChange={(e) => 
                        setFormData({ ...formData, name_of_requestor: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="position_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position of Requestor</label>
                    <p class="text-xs mb-2 font-thin">(Please do not abbreviate)</p>
                    <TextInput
                    name="position_of_requestor"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.position_of_requestor}
                    onChange={(e) => 
                        setFormData({ ...formData, position_of_requestor: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="agency_name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agency Name of Requestor</label>
                    <p class="text-xs mb-2 font-thin">(Please do not abbreviate)</p>
                    <TextInput
                    name="agency_name_of_requestor"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.agency_name_of_requestor}
                    onChange={(e) => 
                        setFormData({ ...formData, agency_name_of_requestor: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="office_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Office Address</label>
                    <TextInput
                    name="office_address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.office_address}
                    onChange={(e) => 
                        setFormData({ ...formData, office_address: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="sex_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex (Requestor)</label>
                    <TextInput
                    name="sex_requestor"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.sex_requestor}
                    onChange={(e) => 
                        setFormData({ ...formData, sex_requestor: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="offician_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Official Email Address</label>
                    <p class="text-xs mb-2 font-thin">(The Certification will be sent in this nominated e-mail)</p>
                    <TextInput
                    name="offician_email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.offician_email}
                    onChange={(e) => 
                        setFormData({ ...formData, offician_email: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3"> 
                    <label for="designated_contact_person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No. of the Designated Contact Person</label>
                    <p class="text-xs mb-2 font-thin">(The BTr representative/s will contact this number in case of any concern regarding the request)</p>
                    <TextInput
                    type="number"
                    name="designated_contact_person"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.designated_contact_person}
                    onChange={(e) => 
                        setFormData({ ...formData, designated_contact_person: e.target.value })
                    }
                    />
            </div>
        </div>
    </div>
  )
}
