import React from 'react'
import TextInput from '@/Components/TextInput'
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';

export default function FourthStep({ formData, setFormData }) {
  return (
    <div>
         <div className="max-w-sm mx-auto">
                <header class="mb-4">
                    <h2 className="text-lg font-medium text-gray-900">Deposited Collections Information</h2>
                </header>

                <div class="mb-3"> 
                    <label for="date_period_covered" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date/Period Covered of the Collection</label>
                    <p class="text-xs mb-2 font-thin">(Use this format sample: August 01, 2022 to August 31, 2022)</p>
                    <TextInput
                    type="date"
                    name="date_period_covered"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.date_period_covered}
                    onChange={(e) => 
                        setFormData({ ...formData, date_period_covered: e.target.value })
                    }
                    />
                </div> 

                <div class="mb-3"> 
                    <label for="amount_figures" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Figures</label>
                    <TextInput
                    type="number"
                    name="amount_figures"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.amount_figures}
                    onChange={(e) => 
                        setFormData({ ...formData, amount_figures: e.target.value })
                    }
                    />
                </div> 

                <div class="mb-3"> 
                    <label for="depository_bank" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Depository Bank</label>
                    <TextInput
                    name="depository_bank"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.depository_bank}
                    onChange={(e) => 
                        setFormData({ ...formData, depository_bank: e.target.value })
                    }
                    />
                </div> 
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
          </div>
    </div>
  )
}
