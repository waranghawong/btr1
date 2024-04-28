import { useEffect, useState } from 'react';
import TextInput from '@/Components/TextInput'
import SelectInput from '@/Components/SelectInput';

export default function FifthStep({ formData, setFormData }) {

  const [setForm, setOtherForm] = useState(formData.special_accounts_in_general_fund);
  const [general_fund, setGeneralFund] = useState(formData.general_fund);
  const [special_funds, setSpecialFunds] = useState(formData.special_accounts_in_general_fund);
  const [special_funds_other, setSpecialFundsOther] = useState(formData.special_accounts_in_general_fund_other);
  const [trust_fund, setTrustFund] = useState(formData.trust_fund);

  const handleRadioChange = (e) => {
    setGeneralFund(e.target.value);

    setFormData({ ...formData, general_fund: e.target.value })
    
  };

  const SpecialAccountRadioChange = (e) => {

    setSpecialFunds(e.target.value);

    setFormData({ ...formData, special_accounts_in_general_fund1: e.target.value })

   
    
  };

  const TrustFundRadioChange = (e) => {
    setTrustFund(e.target.value);

    setFormData({ ...formData, trust_fund: e.target.value })
    
  };

  function removeOtherData(){
    setOtherForm("not_applicable")
    setFormData({ ...formData, special_accounts_in_general_fund_other: "" })
  }

  const onImageChoose = (ev) => {
    const file = ev.target.files[0];
    const value = ev.target.value;

      setFormData({
        ...formData,files: file,files_dir: value,
      });

    };

 
  return (
    <div className="border-b border-gray-200">   
        <div className="max-w-sm mx-auto ">
            <header class="mb-4 ">
                <h2 className="text-lg font-medium text-gray-900">UACS Funding Source</h2>
            </header>

            <div class="mb-3"> 

              <label for="provincial_office" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">General Fund</label>
                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input 
                              id="general_fund_not_applicable" 
                              type="radio" 
                              value="not_applicable" 
                              name="general_fund" 
                              onChange={handleRadioChange}
                              checked={general_fund === "not_applicable"}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label for="general_fund_not_applicable" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not Applicable </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input 
                            id="list-radio-id" 
                            type="radio" 
                            value="01-101101" 
                            name="general_fund" 
                            onChange={handleRadioChange}
                            checked={general_fund === "01-101101"}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">01-101101</label>
                        </div>
                    </li>
                </ul>


            </div>

            <div class="mb-3"> 
                <label for="provincial_office" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Special Accounts in the General Fund (SAGF)</label>
                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class=" border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input
                              id="list-radio-license"
                              onClick={ (e) => removeOtherData(e) }
                              type="radio" 
                              name="special_accounts_in_general_fund" 
                              value="not_applicable" 
                              onChange={SpecialAccountRadioChange}
                              checked={special_funds === "not_applicable"}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                             />
                            <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not Applicable </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input 
                                id="list-radio-id" 
                                type="radio" 
                                name="special_accounts_in_general_fund" 
                                onClick={() => setOtherForm("others")} 
                                value="others" 
                                onChange={SpecialAccountRadioChange}
                                checked={special_funds === "others"}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label for="list-radio-id"  class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                           
                        </div>
                    </li>
                    <li class={setForm == 'not_applicable' ? 'hidden' : '' +"w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"}>
                        <div class=" items-center p-2">
                        <input 
                          type="text" 
                          id="special_accounts_in_general_fund_other"  
                          value={formData.special_accounts_in_general_fund_other}
                          onChange={(e) => 
                              setFormData({ ...formData, special_accounts_in_general_fund_other: e.target.value })
                          }
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        />
                        </div>
                    </li>
                </ul>
             
            </div>
            <div class="mb-3"> 
            <label for="provincial_office" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Trust Fund</label>
            <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input 
                              id="list-radio-license" 
                              type="radio" 
                              value="not_applicable" 
                              onChange={TrustFundRadioChange}
                              checked={trust_fund === "not_applicable"}
                              name="list-radio" 
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not Applicable</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input 
                              id="list-radio-id" 
                              type="radio" 
                              value="07-308601 Inter Agency Transferred Funds (IATF)" 
                              onChange={TrustFundRadioChange}
                              checked={trust_fund === "07-308601 Inter Agency Transferred Funds (IATF)"}
                              name="list-radio" 
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">07-308601 Inter Agency Transferred Funds (IATF)</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input 
                              id="list-radio-id" 
                              type="radio" 
                              value="07-308602 Other then IATF" 
                              onChange={TrustFundRadioChange}
                              checked={trust_fund === "07-308602 Other then IATF"}
                              name="list-radio" 
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">07-308602 Other then IATF</label>
                        </div>
                    </li>
                </ul>
         
              
                <br />
                <br />

                <header>
                    <h2 className="text-lg font-medium text-gray-900">Supporting Document/s</h2>
                </header>
                <div class="mb-3 w-full"> 
                  Kindly Upload the Mandatory Supporting Documents for the Request
                  
                  <p className='underline '>Please take note of the following in uploading the file:</p>
                  <p>(a) All files to be uploaded as attachments must be in .PDF format.</p>
                  <p>(b) Please ensure to upload a clear/readable version of the file attachment.</p>
                  <p>(c)  Use this prescribed file name:</p><br />
                  <p>  [Agency_Name of Collecting Officer_Period Covered_Document Name] 
                     Sample: DPWH_Juan Dela Cruz_8.1.22 to 8.3.22_Request Form</p>

                     <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                        <input 
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                        type="file"
                        name="file"
                        isFocused
                        onChange={onImageChoose}
                     />
                      <div class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="user_avatar_help">  
                        <p>[Agency_Name of Collecting Officer_Period Covered_Document Name] </p>
                        Sample: DPWH_Juan Dela Cruz_8.1.22 to 8.3.22_Request Form</div>
                </div>

            </div>
        </div>
    </div>
  )
}
