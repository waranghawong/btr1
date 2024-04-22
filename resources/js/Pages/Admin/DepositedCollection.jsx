import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/UserTables';
import Modal from '@/Components/Modal';
import { useEffect, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

const columns = [
    'name',
    'status',
] 


export default function DepositedCollection({auth, pending}) {
const [isOpen , setDialog] = useState(false);

const submit = (e) => {
    e.preventDefault();
    setDialog(false)
};
  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Deposited Collection</h2>}
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
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel"> User Enrollment Form </h5>
                        <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="flex-auto overflow-y-auto relative p-4">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <div className="max-w-xl">
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">User Information</h2>
                                    </header>
                                    <div>
                                    <br />
                                        
                                    
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <div className="max-w-xl">
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">Organization</h2>
                                        <br />
                                    

                                    </header>
                                </div>
                            </div>

                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <div className="max-w-xl">
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">Location</h2>
                                        <br />
                                

                                    </header>
                                </div>
                            </div>

                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <div className="max-w-xl">
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">Signatories</h2>
                                        <br />
                                

                                    </header>
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
