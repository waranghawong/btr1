import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, useForm} from '@inertiajs/react';
import Table from '@/Components/UserTables';
import Modal from '@/Components/Modal';
import { useEffect, useState } from 'react';
import DepositCollectionTable from '@/Components/DepositCollectionTable';
import axios from 'axios';
import FirstStep from '@/Components/FirstStep';
import SecondStep from '@/Components/SecondStep';
import ThirdStep from '@/Components/ThirdStep';
import FourthStep from '@/Components/FourthStep';
import FifthStep from '@/Components/FifthStep';
import SixthStep from '@/Components/SixthStep';

const columns = [
    'name',
    'status',
] 

export default function DepositedCollection({auth, data_collection}) {
const [isOpen , setDialog] = useState(false);
const [page, setPage] = useState(0);

const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    provincial_office: '',
    name_of_requestor: '',
    position_of_requestor: '',
    agency_name_of_requestor: '',
    office_address: '',
    sex_requestor: '',
    offician_email: '',
    designated_contact_person: '',

    type_of_request_cert: '',
    uacs_organization_code: '',
    name_of_agency: '',
    bank_branch_deposit: '',
    name_of_national_collecting_officer: '',
    national_collecting_officer_code: '',

    date_period_covered: '',
    amount_figures: '',
    depository_bank: '',

    general_fund: '',
    special_accounts_in_general_fund1: '',
    special_accounts_in_general_fund_other: '',
    trust_fund: '',
    
    files: null,
    files_dir: null,
});

const FormTitles = ["Instruction", "Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

const PageDisplay = () => {
    if (page === 0) {
      return <FirstStep />;
    } else if (page === 1) {
      return <SecondStep  formData={data} setFormData={setData}/>;
    } 
    else if(page == 2){
        return <ThirdStep  formData={data} setFormData={setData}/>;
    }
    else if(page == 3){
        return <FourthStep formData={data} setFormData={setData} />;
    }
    else if(page == 4){
        return <FifthStep formData={data} setFormData={setData} />;
    }
    else {
      return <SixthStep  formData={data} errors={errors}/>;
    }
  };
  const submitData = (e) => {
    if (page === FormTitles.length - 1) {
        e.preventDefault();
    
        post(route('upload'),{
            preserveScroll: true,
            onSuccess: ()=>{
                
                reset(
                'provincial_office',
                'name_of_requestor', 
                'position_of_requestor', 
                'agency_name_of_requestor', 
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
                'national_collecting_officer_code', 
                'date_period_covered', 
                'amount_figures', 
                'depository_bank', 
                'general_fund', 
                'special_accounts_in_general_fund1', 
                'special_accounts_in_general_fund_other', 
                'trust_fund', 
                'files', 
                'files_dir', 
                )
                setPage(0)
                setDialog(false)
                window.location.reload()
            }
        });
    } else {
      setPage((currPage) => currPage + 1);

    }
  }



  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Deposited Collection</h2>}
    >
    <Head title="Deposited Collections" />

    <div className="py-32">
        <div className="max-w-7xl mx-auto lg:px-8">
        <br />

        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"><br/>
             
                    <div className="bg-white dark:bg-slate-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div  className=" mx-auto lg:px-8"> <button onClick={() => setDialog(true)} className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button></div> <br />
                        {/* <div className="p-6 text-gray-900 dark:text-gray-100"></div> */}
                        {/* <Table items={files.data} columns={columns} primary="Id Number" action="users.edit"></Table> */}
                        <DepositCollectionTable items ={data_collection} action="deposited_collections.edit"/>
                    </div>
        </div>
        <Modal show={isOpen} maxWidth={'3xl'} >
            <div className="flex items-center justify-between border-b rounded-t dark:border-gray-600 z-0">
                <h3 className="text-lg font-semibold p-2 sm:p-0 text-gray-900 dark:text-white">
                <span class="hidden sm:inline-flex">Request of Certificate of Deposited National Collections (Region V)</span> &nbsp;
                </h3>
                <button type="button" onClick={() => setDialog(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div class="sm:h-[calc(100%-3rem)] flex-col h-screen mb-auto relative pointer-events-none">
                <div class="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                         <div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className='items-end'>
                      
                            </div>
                            <div class="h-4 bg-sky-600 rounded-full dark:bg-sky-500" style={{ width: page === 0 ? "16.6%" : page == 1 ? " 33.2%" : page == 2 ? " 49.8%" : page == 3 ? " 66.4%" : page == 4 ? " 83%" : "100%"  }}></div>
                                    <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                                        <li class="flex md:w-full items-center text-sky-600 dark:text-sky-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-3 xl:after:mx-3 dark:after:border-gray-700">
                                            <span class="flex text-sky-600 items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                </svg>
                                               Ins<span class="hidden sm:inline-flex">truction</span>
                                            </span>
                                        </li>
                                        <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-4 dark:after:border-gray-700">
                                            {
                                                page >= 1
                                                ?
                                                <li class="flex md:w-full items-center text-sky-600 dark:text-sky-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-3 dark:after:border-gray-700">
                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                     <span class="hidden sm:inline-flex">Step</span> &nbsp;1
                                                </span>
                                                </li>
                                                : 

                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-1 after:text-gray-200 dark:after:text-gray-500">
                                                   <span class="hidden sm:inline-flex">Step</span> &nbsp;1
                                                </span>
                                             }
                                  
                                         </li>
                                         <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-4 dark:after:border-gray-700">
                                            {
                                                page >= 2
                                                ?
                                                <li class="flex md:w-full items-center text-sky-600 dark:text-sky-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-3 dark:after:border-gray-700">
                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-1 after:text-gray-200 dark:after:text-gray-500">
                                        
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                    <span class="hidden sm:inline-flex">Step</span> &nbsp;2
                                                </span>
                                                </li>
                                                : 

                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                       <span class="hidden sm:inline-flex">Step</span> &nbsp;2
                                                </span>
                                             }
                                  
                                         </li>
                                         <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-4 dark:after:border-gray-700">
                                            {
                                                page >= 3
                                                ?
                                                <li class="flex md:w-full items-center text-sky-600 dark:text-sky-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-3 dark:after:border-gray-700">
                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                    <span class="hidden sm:inline-flex">Step</span> &nbsp;3
                                                </span>
                                                </li>
                                                : 

                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <span class="hidden sm:inline-flex">Step</span> &nbsp;3
                                                </span>
                                             }
                                  
                                         </li>
                                         <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-4 dark:after:border-gray-700">
                                            {
                                                page >= 4
                                                ?
                                                <li class="flex md:w-full items-center text-sky-600 dark:text-sky-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-2 dark:after:border-gray-700">
                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                    <span class="hidden sm:inline-flex">Step</span> &nbsp;4
                                                </span>
                                                </li>
                                                : 

                                                <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                  <span class="hidden sm:inline-flex">Step</span> &nbsp;4
                                                </span>
                                             }
                                  
                                         </li>
                                            {
                                                page == 5
                                                ?
                                                <li class="= items-center  text-red-800">
                                                    <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                    </svg>
                                                Confirmation
                                                </li>
                                                :
                                                <li class=" items-center">
                                                    Confirmation
                                                </li>
                                            }
                                 
                                    </ol>
                        </div>
                    </div>
                    <div class="flex-auto overflow-y-auto relative p-4">
                        
                         
                        <div className="body mb-6 ">{PageDisplay()}

                        </div>
                        
                
                    </div>
                    <div className="footer bg-grey-600 border-b ">
                        <div class="flex justify-around mb-10">
                            <button
                            type="button"
                            class="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                            > Prev
                                   
                            </button>
                            <button
                            class="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            disabled={processing}  onClick={submitData}
                            >
                                {page === FormTitles.length - 1 ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    
          
        </div>
    </div>
</AuthenticatedLayout>
  )
}
