import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MdsCheck({auth}) {
  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">MDS Checks</h2>}
>
    <Head title="Users" />

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="text-gray-900">MDS CHECK</div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  )
}
