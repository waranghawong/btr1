import React, { useState, useEffect} from 'react'
import Select from 'react-select'
import TextInput from '@/Components/TextInput'
import AsyncSelect from 'react-select/async';
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';


const type_of_request_cert = [
  '',
  'For National Collecting Officer (NCO)',
  'Camarines Norte',
]


export default function ThirdStep({ formData, setFormData }) {

const [data, setData] = useState([]);

const handleChange = (selectedOption) => {
    
    setFormData({ ...formData, name_of_agency: selectedOption.value,  uacs_organization_code: selectedOption.label})
}

const loadOptions = (searchValue, callback) => {
    setTimeout(()=>{
      

    const filteredOptions = data.filter((option => option.label.toLowerCase().includes(searchValue.toLowerCase()))

  

    );
    callback(filteredOptions)
    setFormData({ ...formData, name_of_agency: filteredOptions[0].value })
    setFormData({ ...formData, uacs_organization_code: filteredOptions[0].label })
    },1000);
}

useEffect(() => {
    fetch('/uacs.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

}, []);







  return (
    <div>
        <div className="max-w-sm mx-auto">
            <header class="mb-4">
                <h2 className="text-lg font-medium text-gray-900">Certification Requested</h2>
            </header>

            <div class="mb-3"> 
                    <label for="type_of_request_cert" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Request for Certification</label>
                    <SelectInput
                    name="type_of_request_cert"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    options={type_of_request_cert}
                    value={formData.type_of_request_cert}
                    onChange={(e) => 
                        setFormData({ ...formData, type_of_request_cert: e.target.value })
                    }
                    />
            </div>

            
            <div class="mb-3"> 
                    <label for="uacs_organization_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UACS-Organization Code</label>
                    <p class="text-xs mb-2 font-thin">(12-digit UACS Code)</p>
                    <AsyncSelect
                        defaultOptions={data}
                        onChange={(event) =>
                            handleChange(event)
                        }
                        loadOptions={loadOptions}
                         className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'/>
                    {/* <TextInput
                    name="uacs_organization_code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.uacs_organization_code}
                    onChange={(e) => 
                        setFormData({ ...formData, uacs_organization_code: e.target.value })
                    }
                    /> */}
            </div>

            <div class="mb-3"> 
                    <label for="name_of_agency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Agency</label>
                    <p class="text-xs mb-2 font-thin">(Kindly specify the name of the operating unit )</p>
                    <TextInput
                    name="name_of_agency"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.name_of_agency}
                    onChange={(e) => 
                        setFormData({ ...formData, name_of_agency: e.target.value })
                    }
                    />
            </div>

            <p>If request is for the Agency, please provide additional details below:
            <span className="text-red">(Note: This is a required field, Put N/A if Not Applicable)</span></p>

            <div class="mb-3 mt-3"> 
                    <label for="bank_branch_deposit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Branch of Deposit</label>
                    <TextInput
                    name="bank_branch_deposit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.bank_branch_deposit}
                    onChange={(e) => 
                        setFormData({ ...formData, bank_branch_deposit: e.target.value })
                    }
                    />
            </div>

            <p>If request is for the National Collecting Officer (NCO), please provide additional details below:
            <span className="text-red">(Note: This is a required field, Put N/A if Not Applicable)</span></p>.

            <div class="mb-3 mt-3"> 
                    <label for="name_of_national_collecting_officer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of National Collecting Officer</label>
                    <TextInput
                    name="name_of_national_collecting_officer"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.name_of_national_collecting_officer}
                    onChange={(e) => 
                        setFormData({ ...formData, name_of_national_collecting_officer: e.target.value })
                    }
                    />
            </div>

            <div class="mb-3 mt-3"> 
                    <label for="national_collecting_officer_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National Collecting Officer Code</label>
                    <TextInput
                    name="national_collecting_officer_code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.national_collecting_officer_code}
                    onChange={(e) => 
                        setFormData({ ...formData, national_collecting_officer_code: e.target.value })
                    }
                    />
            </div>

        </div>
      
    </div>
  )
}
