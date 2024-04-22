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
    'Albay',
    'Camarines Norte',
    'Camarines Sur',
    'Catanduanes',
    'Masbate',
    'Sorsogon'
]

const client_types = [
    '',
    'NGA',
    'LGU'
]

export default function ReportCollection({auth, pending}) {

  const [isOpen , setDialog] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setDialog(false)
  };


  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Report of Collections and Deposits</h2>}
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
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel"> Monthly Report of Collections and Deposits Submission (Region V)</h5>
                            <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div class="flex-auto overflow-y-auto relative p-4">
                            <article class="max-w-none format lg:format-lg format-red">
                                <h1>All NCOs/LTs shall accomplish and submit the Monthly Report of Collections and Deposits (MRCD) to the concerned BTr District/Provincial Office in their area on or before the 10th day of the ensuing month per DOF Order No. 23-99.</h1>
                                <br />
                                <p class="lead">INSTRUCTIONS :</p>
                                <ul class="max-w-lg space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li>
                                    Use this template in accomplishing the Report on a monthly basis: http://bit.ly/3HTf4dY
                                    </li>
                                    <li>
                                        Accomplish and submit separate report per funding source. (e.g separate submission for Regular, Trust, etc) 
                                    </li>
                                    <li>
                                        All files to be uploaded as attachments must be in .PDF format. Also please ensure to upload a clear/readable version of the file attachment.
                                        <br />
                                        <p class="indent-8">Note: Use this file name when uploading the file:</p>
                                        <p class="indent-10"> [Agency_Name of Collecting Officer_Reporting Period] </p>
                                        <p class="">e.g. DPWH-2nd DEO_Maria Clara Cervantes_October 2022</p>
                                    </li>
                                </ul>
                                <br />
                                <p class="text-gray"> Note: Kindly merge all the requirements in one single pdf file.</p>'
                                <br />
                                            
                                <p>Consent to collect, use, share and store information:
                                BTr requires your consent before it collects personal and sensitive personal information.
                                By submitting this form, you are agreeing & giving BTr consent to collect, use, share and store these information</p>
                                <br />
                                <p>To read more on Data Privacy, kindly click <a className='text-blue' href="https://privacy.gov.ph/data-privacy-act/">https://privacy.gov.ph/data-privacy-act/</a></p>
                           
                            </article>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <div className="max-w-xl">
                                        <header>
                                            <h2 className="text-lg font-medium text-gray-900"></h2>
                                        </header>
                                        <div>
                                        <br />
                                        <div class="mb-2">
                                            <InputLabel htmlFor="email" value="Email Address" />
                                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="client_type" value="Province" />
                                                <SelectInput
                                                    name="client_type"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    options={provincial_office}
                                                />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="client_type" value="Client Type" />
                                                <SelectInput
                                                    name="client_type"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    options={client_types}
                                                />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="name_of_agency" value="Name of Agency" />
                                            <input type="text" id="name_of_agency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="collecting_officer" value="Name of Collecting Officer (NCO)/Local Treasurer (LT)"/>
                                            <input type="text" id="collecting_officer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="lt_code" value="NCO/LT Code"/>
                                            <input type="text" id="lt_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="contact_of_ncolt" value="Contact No. of the NCO/LT"/>
                                            <input type="text" id="contact_of_ncolt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="sex" value="Sex"/>
                                            <input type="text" id="sex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        <div class="mb-2">
                                            <InputLabel htmlFor="age" value="Age"/>
                                            <input type="text" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                            <InputError className="mt-2" message="" />
                                        </div>
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                              
                                <div class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
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
