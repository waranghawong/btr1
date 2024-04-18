import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Table from '@/Components/UserTables';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import PrimaryButton from '@/Components/PrimaryButton';
import {regions, provinces, cities, barangays} from 'select-philippines-address';
import InputError from '@/Components/InputError';

const columns = [
    'name',
    'status',
] 
const client_types = [
    'NGA',
    'LGU',
    'GOCC'
]



export default function Users({ auth, active, inactive, pending }) {

    const { data, setData , post, processing, errors, reset } = useForm({
        
        defaultValues: {
        email : '',
        first_name: '',
        middle_name: '',
        last_name: '',
        position_title: '',
        client_types: '',
        department: '',
        agency: '',
        operating_unit: '',
        region: '',
        province: '',
        city: '',
        signature_of_user: '',
        full_name_of_user: '',
        position_of_user: '',
        date_filed: '',
        full_name_of_head_of_agency: '',
        designation_of_head_of_agency: '',
        }

    });

    
    const [regionData, setRegion] = useState([]);
    const [provinceData, setProvince] = useState([]);
    const [cityData, setCity] = useState([]);
    const [barangayData, setBarangay] = useState([]);

    const [regionAddr, setRegionAddr] = useState("");
    const [provinceAddr, setProvinceAddr] = useState("");
    const [cityAddr, setCityAddr] = useState("");
    const [barangayAddr, setBarangayAddr] = useState("");


    const region = () => {
        regions().then(response => {
            setRegion(response);
        });
    }
   
    const province = (e) => {
        setRegionAddr(e.target.selectedOptions[0].text);
     
        provinces(e.target.value).then(response => {
            setProvince(response);
            setCity([]);    
            //setBarangay([]);
            setData(  "region", regionAddr   )
        });

    }

    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity(response);
        });
    }

    const barangay = (e) => {
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay(response);
        });
        console.log(cityAddr)
    }
    


    useEffect(() => {
        region()
    }, [])
 

  




    const [tabs, setTab] = useState(1)
    const [isOpen , setDialog] = useState(false);

    function toggleTab(id){
        setTab(id)
    }


    const submit = (e) => {
        e.preventDefault();
        post(route('users.store'));
        setDialog(false)
    };


    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <div className="py-32">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                            <li class="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tabs === 1 ? 'border-blue-500 text-blue-500' : 'hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900'}`} onClick={() => toggleTab(1)} id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pending</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tabs === 2 ? 'border-blue-500 text-blue-500' : 'hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900'}`} onClick={() => toggleTab(2)}  id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Active</button>
                            </li>
                            <li class="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-2 rounded-t-lg ${tabs === 3 ? 'border-blue-500 text-blue-500' : 'hover:text-gray-900 hover:border-gray-900 dark:hover:text-gray-900'}`} onClick={() => toggleTab(3)}  id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Inactive</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-styled-tab-content">
                        <div className={`${tabs === 1 ? "show" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div  className=" mx-auto sm:px-6 lg:px-8"> <button onClick={() => setDialog(true)} className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register User</button></div> <br />
                                <Table items={pending} columns={columns} primary="Id Number" action="users.edit"></Table>
                        </div>
                        <div className={`${tabs === 2 ? "show" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <div  className=" mx-auto sm:px-6 lg:px-8"> <button onClick={() => setDialog(true)} className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register User</button></div> <br />
                            <Table items={active} columns={columns} primary="Id Number" action="users.edit"></Table>
                        </div>
                        <div className={`${tabs === 3 ? "show" : "hidden"} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <div  className=" mx-auto sm:px-6 lg:px-8"> <button onClick={() => setDialog(true)} className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register User</button></div> <br />
                                <Table items={inactive} columns={columns} primary="Id Number" action="users.edit"></Table>
                        </div>
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
                                            
                                            <div class="mb-2">
                                                <InputLabel htmlFor="email" value="Email Address" />
                                                <input type="email" id="email" value={data.email} onChange={(e) => setData('email', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                                                <InputError className="mt-2" message={errors.email} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="first_name" value="First Name" />
                                                <input type="text" id="first_name" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.first_name} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="middle_name" value="Middle Name" />
                                                <input type="text" id="password" value={data.middle_name} onChange={(e) => setData('middle_name', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.middle_name} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="last_name" value="Last Name" />
                                                <input type="text" id="last_name" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.last_name} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="position_title" value="Position Title" />
                                                <input type="text" id="position_title" value={data.position_title} onChange={(e) => setData('position_title', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.position_title} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <div className="max-w-xl">
                                        <header>
                                            <h2 className="text-lg font-medium text-gray-900">Organization</h2>
                                            <br />
                                            <div class="mb-2">
                                                <InputLabel htmlFor="client_type" value="Client Type" />
                                                <SelectInput
                                                    name="client_type"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    options={client_types}
                                                    value={data.client_types}
                                                    onChange={(e) => setData('client_types', e.target.value)}
                                                />
                                              <InputError className="mt-2" message={errors.client_types} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="department" value="Department" />
                                                <input type="text" id="department" value={data.department} onChange={(e) => setData('department', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.department} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="agency" value="Agency (Whole Name)(Acronym)" />
                                                <input type="text" id="agency" value={data.agency} onChange={(e) => setData('agency', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.agency} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="operating_unit" value="Operating Unit" />
                                                <input type="text" value={data.operating_unit} onChange={(e) => setData('operating_unit', e.target.value)} id="operating_unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                <InputError className="mt-2" message={errors.operating_unit} />
                                            </div>

                                        </header>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <div className="max-w-xl">
                                        <header>
                                            <h2 className="text-lg font-medium text-gray-900">Location</h2>
                                            <br />
                                            <div class="mb-2">
                                                <InputLabel htmlFor="region" value="Region" />
                                                <select 
                                                    onChange={ province } 
                                                    onSelect={region} 
                                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                                        <option disabled>Select Region</option>
                                                        {
                                                            regionData && regionData.length > 0 && regionData.map((item) => <option
                                                                key={item.region_code} value={item.region_code}>{item.region_name}</option>)
                                                        }
                                                </select>
                                                <span className="text-red">{regionAddr}</span>
                                                {/* <input type="text" value={regionAddr} onChange={(e) => setData('region', e.target.value)}/> */}
                                                <InputError className="mt-2" message={errors.region} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="province" value="Province/District" />
                                                <select 
                                                    onChange={city} 
                                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                                        <option>Select Province</option>
                                                        {
                                                            provinceData && provinceData.length > 0 && provinceData.map((item) => <option
                                                                key={item.province_code} value={item.province_code}>{item.province_name}</option>)
                                                        }
                                                </select>
                                                <span className="text-red">{provinceAddr}</span>
                                               {/* <input type="text" value={data.province} onChange={(e) => setData('province', e.target.value)}/> */}
                                                <InputError className="mt-2" message={errors.province} />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="city" value="City/Municipality" />
                                                <select
                                                    onChange={barangay} 
                                                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                                    <option>Select City</option>
                                                    {
                                                        cityData && cityData.length > 0 && cityData.map((item) => <option
                                                            key={item.city_code} value={item.city_code}>{item.city_name}</option>)
                                                    }
                                                </select>
                                                <span className="text-red">{cityAddr}</span>
                                                {/* <input type="text" value={data.city} onChange={(e) => setData('city', e.target.value)}/> */}
                                                <InputError className="mt-2" message={errors.city} />
                                            </div>

                                        </header>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <div className="max-w-xl">
                                        <header>
                                            <h2 className="text-lg font-medium text-gray-900">Signatories</h2>
                                            <br />
                                            <div class="mb-2">
                                                <InputLabel htmlFor="signature_of_user" value="Signature of the User" />
                                                <input type="text" value={data.signature_of_user} onChange={(e) => setData('signature_of_user', e.target.value)} id="signature_of_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="full_name_of_user" value="Fullname of User" />
                                                <input type="text" value={data.full_name_of_user} onChange={(e) => setData('full_name_of_user', e.target.value)} id="full_name_of_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="position_of_user" value="Position of User" />
                                                <input type="text" value={data.position_of_user} onChange={(e) => setData('position_of_user', e.target.value)} id="position_of_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div class="mb-5">
                                                <InputLabel htmlFor="date_filed" value="Date Filed(mm/dd/yyyy)" />
                                                <input type="date" value={data.date_filed} onChange={(e) => setData('date_filed', e.target.value)} id="date_filed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <h3>Signature of Head of Agency</h3>
                                            <br />
                                            <div class="mb-2">
                                                <InputLabel htmlFor="full_name_of_head_of_agency" value="Fullname of Head of Agency" />
                                                <input type="text" value={data.full_name_of_head_of_agency} onChange={(e) => setData('full_name_of_head_of_agency', e.target.value)} id="full_name_of_head_of_agency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div class="mb-2">
                                                <InputLabel htmlFor="designation_of_head_of_agency" value="Designation of Head of Agency" />
                                                <input type="text" value={data.designation_of_head_of_agency} onChange={(e) => setData('designation_of_head_of_agency', e.target.value)} id="designation_of_head_of_agency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>

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
                            <PrimaryButton className="ms-4" disabled={processing}>
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
    );
}
