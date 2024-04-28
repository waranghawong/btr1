import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useRef, useEffect} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';
import InputLabel from '@/Components/InputLabel';

export default function EditDepositCollection({ auth,deposit_collection, pdf}) {

    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        _method: 'put',
        provincial_office: deposit_collection.provincial_office,
        name_of_requestor: deposit_collection.requestor_name,
        position_of_requestor: deposit_collection.requestor_position,
        agency_name_of_requestor: deposit_collection.agency_name_requestor,
        office_address: deposit_collection.office_address,
        sex_requestor: deposit_collection.sex_requestor,
        offician_email: deposit_collection.offician_email,
        designated_contact_person: deposit_collection.designated_contact_person,
    
        type_of_request_cert: deposit_collection.type_of_request_cert,
        uacs_organization_code: deposit_collection.uacs_organization_code,
        name_of_agency: deposit_collection.name_of_agency,
        bank_branch_deposit: deposit_collection.bank_branch_deposit,
        name_of_national_collecting_officer: deposit_collection.name_of_national_collecting_officer,
        national_collecting_officer_code: deposit_collection.national_collecting_officer_code,
    
        date_period_covered: deposit_collection.date_period_covered,
        amount_figures: deposit_collection.amount_figures,
        depository_bank: deposit_collection.depository_bank,
    
        general_fund: deposit_collection.general_fund,
        special_accounts_in_general_fund1: deposit_collection.special_accounts_in_general_fund1,
        special_accounts_in_general_fund_other: deposit_collection.special_accounts_in_general_fund_other,
        trust_fund: deposit_collection.trust_fund,
        
        files: deposit_collection.file_dir,
        files_dir: deposit_collection.file_dir,

        status: deposit_collection.status,
    });
    console.log(deposit_collection)

    const handleChange = (selectedOption) => {
    
        setData({ ...data, status: selectedOption.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('deposited_collections.update', deposit_collection.id), 
        data,
        { forceFOrmData:true},
        { preserveScroll: true}
        );
        
    };

    const onImageChoose = (ev) => {
        const file = ev.target.files[0];
        const value = ev.target.value;
    
        setData({...data,files: file,files_dir: value,
          });
    
    };
    function openPdfInNewTab(pdfUrl) {
        console.log(pdfUrl)
        // const win = window.open(pdfUrl, '_blank');
        // win.focus();
      }

    return (
        
        <AuthenticatedLayout
            user={auth.user}

            header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">View Requestor</h2>}
            
        >   
        <Head title="Requestor" />

        <div className="py-32">
            <div className="w-3/4  overflow-hidden mx-auto sm:px-6 lg:px-8 space-y-6">
                <form onSubmit={submit} className="mt-6 space-y-6" enctype="multipart/form-data">
                    <div className=" sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="max-w-full ">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 p-2">Requestor Information</h2>
                            </header>
                            <div>
                            <br />
                                <div class="flex flex-wrap 2xl:flex-row lg:flex-col flex-col p-3">
                                    <div className="p-2  ">
                                    <label for="provincial_office" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincial Office</label>
                                        <input 
                                        type="text"  
                                        id="email" 
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        value={data.provincial_office} 
                                        onChange={(e) => 
                                            setData({ ...data, provincial_office: e.target.value })
                                        }
                                        />
                                    </div>
                                    <div className="p-2  ">
                                    <label for="name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Requestor</label>
                                        <input type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={data.name_of_requestor} 
                                            onChange={(e) => 
                                                setData({ ...data, name_of_requestor: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2  ">
                                    <label for="position_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position of Requestor</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.position_of_requestor} 
                                            onChange={(e) => 
                                                setData({ ...data, position_of_requestor: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2  ">
                                    <label for="agency_name_of_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agency Name of Requestor</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.agency_name_of_requestor} 
                                            onChange={(e) => 
                                                setData({ ...data, agency_name_of_requestor: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2  ">
                                    <label for="office_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Office Address</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.office_address} 
                                            onChange={(e) => 
                                                setData({ ...data, office_address: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2  ">
                                    <label for="sex_requestor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex (Requestor)</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.sex_requestor} 
                                            onChange={(e) => 
                                                setData({ ...data, sex_requestor: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2  ">
                                    <label for="offician_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Official Email Address</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.offician_email} 
                                            onChange={(e) => 
                                                setData({ ...data, offician_email: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2 ">
                                    <label for="designated_contact_person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.designated_contact_person} 
                                            onChange={(e) => 
                                                setData({ ...data, designated_contact_person: e.target.value })
                                            }
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="max-w-full">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 p-2">Certification Requested</h2>
                            </header>
                            <div>
                                <br />
                                <div class="flex flex-wrap 2xl:flex-row lg:flex-col flex-col p-3">
                                    <div className="p-2">
                                    <label for="type_of_request_cert" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Request for Certification</label>
                                    <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.type_of_request_cert} 
                                            onChange={(e) => 
                                                setData({ ...data, type_of_request_cert: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="uacs_organization_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UACS-Organization Code</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.uacs_organization_code} 
                                            onChange={(e) => 
                                                setData({ ...data, uacs_organization_code: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="name_of_agency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of Agency</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.name_of_agency} 
                                            onChange={(e) => 
                                                setData({ ...data, name_of_agency: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="bank_branch_deposit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Branch of Deposit</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.bank_branch_deposit} 
                                            onChange={(e) => 
                                                setData({ ...data, bank_branch_deposit: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="name_of_national_collecting_officer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of National Collecting Officer</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.name_of_national_collecting_officer} 
                                            onChange={(e) => 
                                                setData({ ...data, name_of_national_collecting_officer: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="national_collecting_officer_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National Collecting Officer Code</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.national_collecting_officer_code} 
                                            onChange={(e) => 
                                                setData({ ...data, national_collecting_officer_code: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-full">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Deposited Collections Information</h2>
                            </header>
                            <div>
                                <br />
                                <div class="flex flex-wrap 2xl:flex-row lg:flex-col flex-col p-3">
                                    <div className="p-2">
                                    <label for="date_period_covered" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date/Period Covered of the Collection</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.date_period_covered} 
                                            onChange={(e) => 
                                                setData({ ...data, date_period_covered: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="amount_figures" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Figures</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.amount_figures} 
                                            onChange={(e) => 
                                                setData({ ...data, amount_figures: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="depository_bank" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Depository Bank</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.depository_bank} 
                                            onChange={(e) => 
                                                setData({ ...data, depository_bank: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-full">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">UACS Funding Source</h2>
                            </header>
                            <div>
                                <br />
                                <div class="flex flex-wrap 2xl:flex-row lg:flex-col flex-col p-3">
                                    <div className="p-2">
                                    <label for="general_fund" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">General Fund</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.general_fund} 
                                            onChange={(e) => 
                                                setData({ ...data, general_fund: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="special_accounts_in_general_fund1" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Special Accounts in the General Fund (SAGF)</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.special_accounts_in_general_fund1} 
                                            onChange={(e) => 
                                                setData({ ...data, special_accounts_in_general_fund1: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="p-2">
                                    <label for="trust_fund" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Trust Fund</label>
                                        <input 
                                            type="text"  
                                            id="email" 
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            value={data.trust_fund} 
                                            onChange={(e) => 
                                                setData({ ...data, trust_fund: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-full">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Supporting Document/s</h2>
                            </header>
                            <div>
                                <br />
                                <div class="flex flex-wrap 2xl:flex-row lg:flex-col flex-col p-3">
                                    <div className="p-2">
                                    <a href={route("deposited_collections.vewpdf", deposit_collection.id)}  target="__blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Show PDF
                                    </a> 
                                    <div class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="user_avatar_help">  
                                        <p>[Agency_Name of Collecting Officer_Period Covered_Document Name] </p>
                                        Sample: DPWH_Juan Dela Cruz_8.1.22 to 8.3.22_Request Form</div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-full">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Update Status</h2>
                            </header>
                            <br />
                            <div>
                                <select 
                                onChange={(event) =>
                                    handleChange(event)
                                } 
                                value={data.status}
                                
                                className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value=""></option>
                                    <option value="lack_of_documents">Lack of Documents</option>
                                    <option value="for_approval">For Approval</option>
                                    <option value="completed">Completed</option>
                                </select>                
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                        &nbsp;
                         <PrimaryButton className="">
                             Save Changes
                        </PrimaryButton> &nbsp;
                        <button type="button" 
                        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal">
                        Delete
                        </button> &nbsp;
             
                    </div>
                    
                </form>
             
            </div>
        </div>

        </AuthenticatedLayout>

    )
}