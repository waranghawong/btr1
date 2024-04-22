import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/UserTables';
import Modal from '@/Components/Modal';
import { useEffect, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import InputError from '@/Components/InputError';


const columns = [
    'name',
    'status',
] 

const lgu_classification = [
    '',
    'Province',
    'City/Municipality',
    'Barangay',
]

const provincial_office = [
    '',
    'Albay',
    'Camarines Norte',
    'Camarines Sur',
    'Catanduanes',
    'Masbate',
    'Sorsogon'
]

const request_to = [
    '',
    'Transfer of Depository Bank',
    'Transfer Branch (same Depository Bank)',
]


export default function ChangeofDepository({auth, pending}) {

const [isOpen , setDialog] = useState(false);

const submit = (e) => {
    e.preventDefault();
    setDialog(false)
};

  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Change in Depository</h2>}
        >
    <Head title="Users" />
        <div className="py-32">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <br />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"><br/>
                    <div  className=" mx-auto sm:px-6 lg:px-8"> <button onClick={() => setDialog(true)} className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button></div> <br />
                        <Table items={pending} columns={columns} primary="Id Number" action="users.edit"></Table>
            </div>
            <Modal show={isOpen} maxWidth={'3xl'} >
                        <div class="sm:h-[calc(100%-3rem)] max-w-3xl my-6 mx-auto relative w-auto pointer-events-none">
                        <div class="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel"> Request for Change/Transfer of Depository Bank/Branch for NTA (Region V) </h5>
                            <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="flex-auto overflow-y-auto relative p-4">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <div className="max-w-2xl">
                                        <h4>INSTRUCTIONS :</h4> <br />
                                        <ul class="max-w-xl space-y-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                                            <li>
                                              Use this form when requesting for Change/Transfer of Depository Bank for NTA in Region V
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



                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <div className="max-w-xl">
                                        <header>
                                            <h2 className="text-lg font-medium text-gray-900"></h2>
                                    

                                        </header>

                                        <div class="mb-2">
                                            <InputLabel htmlFor="email" value="Email Address" />
                                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                                            <InputError className="mt-2" message="" />
                                        </div>

                                        <div class="mb-2">
                                            <InputLabel htmlFor="lgu_classification" value="LGU Classification" />
                                                <SelectInput
                                                    name="lgu_classification"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    options={lgu_classification}
                                                />
                                            <InputError className="mt-2" message="" />
                                        </div>

                                        <div class="mb-2">
                                            <InputLabel htmlFor="province" value="Province" />
                                                <SelectInput
                                                    name="province"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    options={provincial_office}
                                                />
                                            <InputError className="mt-2" message="" />
                                        </div>

                                        <div class="mb-2">
                                            <InputLabel htmlFor="municipality_barangay" value="Municipality/Barangay" />
                                            <input type="text" id="municipality_barangay" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Spell in Full: e.g Brgy. Rawis, Legazpi City" required />
                                            <InputError className="mt-2" message="" />
                                        </div>

                                        <div class="mb-2">
                                            <InputLabel htmlFor="request_to" value="Request To" />
                                                <SelectInput
                                                    name="request_to"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    options={request_to}
                                                />
                                            <InputError className="mt-2" message="" />
                                        </div>

                                     
                                    </div>
                                </div>
                            <div
                            class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" onClick={() => setDialog(false)}
                            class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal">
                            Close
                            </button>
                            <PrimaryButton className="ms-4" >
                                    Save Changes
                            </PrimaryButton>
                        </div>
                            </form>
                        </div>
                 
                        </div>
                    </div>
                </Modal>
    
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
