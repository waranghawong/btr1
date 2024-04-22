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

const provincial_office = [
    '',
    'Albay',
    'Camarines Norte',
    'Camarines Sur',
    'Catanduanes',
    'Masbate',
    'Sorsogon'
]

const volume_request = [
    '',
    'Single (1 - 7 Accounts)',
    'Batch (8 or more Accounts)',
]

const type_of_bank = [
    '',
    'MDS',
    'Savings Account',
    'Checking Account',
    
]

const funding_source = [
    '',
    'Regular Fund',
    'Trust Fund',
    'Current',
    'Special',
    
]

const bank_name = [
    '',
    'LBP',
    'DBP',
    'PVB',
    
]

const bank_branch = [
    'Legazpi',
    'Daraga',
    'Guinobatan',
    'Ligao',
    'Polangui',
    'Tabaco',
    'Rotunda-Legazpi',
    'Daet',
    'Labo',
    'Naga',
    'Rotunda-Naga',
    'Goa',
    'Iriga',
    'Pili',
    'Sipocot',
    'Tigaon',
    'Calabanga',
    'Virac',
    'San Andres',
    'Masbate',
    'Cataingan',
    'Placer',
    'Sorsogon City',
    'Irosin',
    
]

export default function OpenBankAccount({auth, pending}) {

    const [isOpen , setDialog] = useState(false);

    const submit = (e) => {
      e.preventDefault();
      setDialog(false)
    };

  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Opening of Bank Account</h2>}
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
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel"> Request for Opening of Bank Accounts in Region V (Receipts and MDS) </h5>
                        <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="flex-auto overflow-y-auto relative p-4">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <div className="max-w-2xl">
                                    <p class="lead">INSTRUCTIONS :</p>
                                    <ul class="max-w-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                        <li>
                                            Use this form when requesting for Opening of Bank Account in Region V
                                        </li>
                                        <li>
                                            To ensure prompt processing, please provide ALL information requested below. 
                                        </li>
                                        <li>
                                        Request for 
                                        </li>
                                    </ul>
                                        <br />
                                        <p class="text-gray">Opening of Bank Account CANNOT be processed if there is/are pending supporting documents/reports necessary in the approval of request.</p><br/>
                                    <p class="font-medium">Hard copies <span class="text-gray font-thin">of the documents of the request will be mailed/delivered to the BTr-Provincial Offices <span class="font-medium">after</span> accomplishing this form</span> </p><br/>
                                    <p class="font-medium">Mandatory Supporting Documents<span class="text-gray font-thin">  are as follows: </span> </p> <br />
                                    <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                        <li>
                                            Letter Request from Agency
                                        </li>
                                        <li>
                                        Request for Authority to Open Bank Account (Form 1)
                                            
                                        </li>
                                        <li>
                                            Undertaking (Form 2) 
                                        </li>
                                    
                                        <li>
                                            Waiver of Confidentiality (Form 3)
                                                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                                                <li>I'm not sure if we'll bother styling more than two levels deep.</li>
                                                <li>Two is already too much, three is guaranteed to be a bad idea.</li>
                                                <li>If you nest four levels deep you belong in prison.</li>
                                            </ul>
                                        </li>
                                        <li>Legal Basis to support the opening of bank account</li>
                                    </ol><br />
                                    <p>Note: See attached TC 5-2022 for the enhanced BTr Form 1 and 3:  <a class="text-blue" href="http://bit.ly/3WwE0x9">http://bit.ly/3WwE0x9</a></p>
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
                                        <InputLabel htmlFor="province" value="Province" />
                                            <SelectInput
                                                name="province"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                options={provincial_office}
                                            />
                                        <InputError className="mt-2" message="" />
                                    </div>
                                    <div class="mb-2">
                                        <InputLabel htmlFor="volume_request" value="Volume of Request" />
                                            <SelectInput
                                                name="volume_request"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                options={volume_request}
                                            />
                                        <InputError className="mt-2" message="" />
                                    </div>
                                    <div class="mb-2">
                                        <InputLabel htmlFor="agency_name" value="Agency Name" />
                                        <input type="text" id="agency_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="spell in full" required />
                                        <InputError className="mt-2" message="" />
                                    </div>
                                    <div class="mb-2">
                                        <InputLabel htmlFor="type_of_bank" value="Type of Bank Account" />
                                            <SelectInput
                                                name="type_of_bank"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                options={type_of_bank}
                                            />
                                        <InputError className="mt-2" message="" />
                                    </div>
                                    <div class="mb-2">
                                        <InputLabel htmlFor="legal_basis" value="Purpose/Legal Basis" />
                                        <input type="text" id="legal_basis" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="if the purpose of the bank account is for specified period only" required />
                                        <InputError className="mt-2" message="" />
                                    </div>
                                    <div class="mb-2">
                                        <InputLabel htmlFor="funding_source" value="Funding Source" />
                                            <SelectInput
                                                name="funding_source"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                options={funding_source}
                                            />
                                        <InputError className="mt-2" message="" />
                                    </div>

                                    <div class="mb-2">
                                        <InputLabel htmlFor="funding_code" value="Funding Source Code" />
                                        <input type="text" id="funding_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                        <InputError className="mt-2" message="" />
                                    </div>

                                    <div class="mb-2">
                                        <InputLabel htmlFor="bank_name" value="Bank Name" />
                                            <SelectInput
                                                name="bank_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                options={bank_name}
                                            />
                                        <InputError className="mt-2" message="" />
                                    </div>

                                    <div class="mb-2">
                                        <InputLabel htmlFor="bank_branch" value="Bank Branch" />
                                            <SelectInput
                                                name="bank_branch"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                options={bank_branch}
                                            />
                                        <InputError className="mt-2" message="" />
                                    </div>

                                    <div class="mb-2">
                                        <InputLabel htmlFor="validity_of_fidelity" value="Validity of Fidelity Bond(Authorized Signatory/s)" />
                                        <input type="text" id="validity_of_fidelity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                        <InputError className="mt-2" message="" />
                                    </div>

                                    <div class="mb-2">
                                        <InputLabel htmlFor="validity_of_fidelity" value="Upload Attachments" />
                                        Requirements:
                                        <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                            <li>
                                                Letter Request from Agency
                                            </li>
                                            <li>
                                                Request for Authority to Open Bank Account (Form 1)
                                            </li>
                                            <li>
                                                Undertaking (Form 2) 
                                            </li>
                                            <li>
                                                Waiver of Confidentiality (Form 3)
                                                <ul className='ps-5 mt-2'>
                                                <li> a. BTr Form 3-A for MDS sub-accounts</li>
                                                <li> b. BTr Form 3-B for Other accounts</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Legal Basis to support the opening of bank account
                                            </li>
                                        </ol><br />
                                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Note: Kindly merge all the requirements in <span className="font-bold text-black">one single pdf file</span>.</div>
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
