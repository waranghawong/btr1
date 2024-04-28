import React from 'react'
import TextInput from '@/Components/TextInput'

export default function FirstStep() {
  return (
    <div>
  
         <div className="">
            <h4 className="font-medium">INSTRUCTIONS :</h4> <br />
            <ul class="space-y-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                Use this form when requesting for Certificate of Deposited National Collections covering periods from August 1, 2022 onwards.
                </li>
                <li>
                    To ensure prompt processing, please provide <span class="font-medium text-black">ALL</span> information requested below. 
                </li>
                <li>
                Request for  <span class="font-medium text-black"> CANNOT</span> be processed if there is/are pending supporting documents/reports necessary in the approval of request.
                </li>

                <li><span class="font-medium text-black">Hard copies</span> of the documents of the request will be mailed/delivered to the BTr-Provincial Offices/Regional Office after accomplishing this form  </li>
                <li>
                <span class="font-medium text-black">Mandatory Supporting Documents </span>are as follows: 
                    <ul className='ps-5 mt-2 space-y-1 list-decimal list-inside'>
                        <li>A   <span class="font-medium text-black">certified true copy of Sanggunian Resolution</span> authorizing the LGU to change or transfer its NTA depository bank/ bank branch/ current account;</li>
                        <li> Name of <span class="font-medium text-black">new servicing banks, location</span> and <span class="font-medium text-black">bank account number;</span> and</li>
                        <li><span class="font-medium text-black">Clearance from present depository bank branch</span> allowing the transfer.</li>
                    </ul>
                </li>
            </ul>
            <br />
            <br />
          <p class="underline underline-offset-2">Please take note of the following in uploading the file:</p>
          <p>(a) All files to be uploaded as attachments must be merged in one single file and in .PDF format .</p>
          <p>(b) Please ensure to upload a clear/readable version of the file attachment.</p>
          <p>(c)  Use this prescribed file name:</p>
          <p class="indent-10">  [ OBA_Province_Agency Name_Date of Request(mm/dd/yyyy) ] </p>
            <p class="indent-10">Sample: [OBA_Albay_DTI R5_01252023] </p>

            <br/>
            <p>Consent to collect, use, share and store information:
              BTr requires your consent before it collects personal and sensitive personal information.
              By submitting this form, you are agreeing & giving BTr consent to collect, use, share and store these information. </p>
          <br />
          <p>To read more on Data Privacy, kindly click <a className='text-blue' href="https://privacy.gov.ph/data-privacy-act/">https://privacy.gov.ph/data-privacy-act/</a></p>
      </div>
    </div>
  )
}
