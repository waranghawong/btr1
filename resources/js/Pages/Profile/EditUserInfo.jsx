import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { useState, useRef, useEffect} from 'react';
import TextInput from '@/Components/TextInput';
import DeleteModal from '@/Components/DeleteModal';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import { Transition } from '@headlessui/react';
import {regions, provinces, cities, barangays} from 'select-philippines-address';

const client_types = [
    'NGA',
    'LGU',
    'GOCC'
]

export default function EditUser({ auth, userprofile, organization, user_location, user_signatories_head, user_signatories }) {

    const {  delete: destroy, } = useForm({});

    console.log(regions);
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    
    const passwordInput = useRef();

    const [passwordData, setPasswordData] = useState({
        password: '',
    })

    const compare_pass = {"password" : "password"}

    const [regionDatas, setRegion] = useState([]);
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
   
           
        });

        setData("region", e.target.selectedOptions[0].text)
      

    }
    
    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity(response);
        });

        setData("province", e.target.selectedOptions[0].text)
    }

    const barangay = (e) => {
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay(response);
        });
        setData("city", e.target.selectedOptions[0].text)
    }
    

 

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();
        const array_match = JSON.stringify(passwordData) == JSON.stringify(compare_pass)
        if(array_match == true){
            destroy(route('users.destroy', userprofile.id), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }

    };

 
    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    const [activateUser, setActivateUser] = useState({
        activate: 'activate',
        id: userprofile.id,
    });
    const [deactivateUser, setdeactivateUser] = useState({
        activate: 'deactivate',
        id: userprofile.id,
    });
    const { data, setData, patch, processing, errors, recentlySuccessful } = useForm({

        email : userprofile.email,
        first_name: userprofile.first_name,
        middle_name: userprofile.middle_name,
        last_name: userprofile.last_name,
        position_title: userprofile.position_title,
        client_types: organization.client_type,
        department: organization.department,
        agency: organization.agency,
        operating_unit: organization.operating_unit,
        region: user_location.region,
        province: user_location.province,
        city: user_location.city,
        signature_of_user: user_signatories.signature_of_user,
        fullname_of_user: user_signatories.fullname_of_user,
        position_of_user: user_signatories.position_of_user,
        date_filed: user_signatories.date_filed,
        full_name_of_head_of_agency: user_signatories_head.full_name_of_head_of_agency,
        designation_of_head_of_agency: user_signatories_head.designation_of_head_of_agency,

    });
    const submit = (e) => {
        e.preventDefault();
        patch(route('users.update', userprofile.id),{
            preserveScroll: true
        });
    };

    const [formData, setFormData] = useState({

    })

    const submitData = () => {
 
          patch(route('activate_user', activateUser),{
            preserveScroll: true
        });
    }
    const deactivateAccount = () => {
 
        patch(route('deactivate_user', deactivateUser),{
          preserveScroll: true
      });
    }

    useEffect(() => {
        region()
    }, [])
      

      
    return (
        <AuthenticatedLayout
            user={auth.user}

            header={<h2 className="font-semibold text-md mt-3 text-gray-800 leading-tight">Edit User {userprofile.first_name+ ' '+userprofile.last_name}</h2>}
            
        >   
    
        <Head title="Profile" />

        <div className="py-32">
            <div className="w-1/2  mx-auto sm:px-6 lg:px-8 space-y-6">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="max-w-2xl">
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
                                    <input type="text" id="middle_name" value={data.middle_name} onChange={(e) => setData('middle_name', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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
                        <div className="max-w-2xl">
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
                        <div className="max-w-2xl">
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
                                                            regionDatas && regionDatas.length > 0 && regionDatas.map((item) => <option
                                                                key={item.region_code} value={item.region_code}>{item.region_name}</option>)
                                                        }
                                                </select>
                                                <span className="text-red">{regionAddr}</span>
                                                <input type="hidden" value={data.region} onChange={(e) => setData({ ...data, region: e.target.value})}/>
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
                                                <input type="hidden" value={data.province} onChange={(e) => setData({ ...data, province: e.target.value})}/>
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
                                                <input type="hidden" value={data.city} onChange={(e) => setData({ ...data, city: e.target.value})}/>
                                                <InputError className="mt-2" message={errors.city} />
                                            </div>

                            </header>
                        </div>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="max-w-2xl">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Signatories</h2>
                                <br />
                                <div class="mb-2">
                                    <InputLabel htmlFor="signature_of_user" value="Signature of the User" />
                                    <input type="text" value={data.signature_of_user} onChange={(e) => setData('signature_of_user', e.target.value)} id="signature_of_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <InputError className="mt-2" message={errors.signature_of_user} />
                                </div>
                                <div class="mb-2">
                                    <InputLabel htmlFor="full_name_of_user" value="Fullname of User" />
                                    <input type="text" value={data.fullname_of_user} onChange={(e) => setData('full_name_of_user', e.target.value)} id="full_name_of_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <InputError className="mt-2" message={errors.fullname_of_user} />
                                </div>
                                <div class="mb-2">
                                    <InputLabel htmlFor="position_of_user" value="Position of User" />
                                    <input type="text" value={data.position_of_user} onChange={(e) => setData('position_of_user', e.target.value)} id="position_of_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <InputError className="mt-2" message={errors.position_of_user} />
                                </div>
                                <div class="mb-5">
                                    <InputLabel htmlFor="date_filed" value="Date Filed(mm/dd/yyyy)" />
                                    <input type="date" value={data.date_filed} onChange={(e) => setData('date_filed', e.target.value)} id="date_filed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <InputError className="mt-2" message={errors.date_filed} />
                                </div>
                                <h3>Signature of Head of Agency</h3>
                                <br />
                                <div class="mb-2">
                                    <InputLabel htmlFor="full_name_of_head_of_agency" value="Fullname of Head of Agency" />
                                    <input type="text" value={data.full_name_of_head_of_agency} onChange={(e) => setData('full_name_of_head_of_agency', e.target.value)} id="full_name_of_head_of_agency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <InputError className="mt-2" message={errors.full_name_of_head_of_agency} />
                                </div>
                                <div class="mb-2">
                                    <InputLabel htmlFor="designation_of_head_of_agency" value="Designation of Head of Agency" />
                                    <input type="text" value={data.designation_of_head_of_agency} onChange={(e) => setData('designation_of_head_of_agency', e.target.value)} id="designation_of_head_of_agency" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <InputError className="mt-2" message={errors.designation_of_head_of_agency} />
                                </div>

                            </header>
                        </div>
                    </div>

                    <div
                        class="flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                        {
                            userprofile.status === 'pending'
                            ?
                            <button type="button" 
                            onClick={submitData}
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal">
                            Activate
                            </button>
                            :
                            (
                                userprofile.status === 'active'
                                ?
                                <button type="button" 
                                onClick={deactivateAccount}
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Deactivate
                                </button>
                                :
                                <button type="button" 
                                onClick={submitData}
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Reactivate
                                </button>
                            )
                           
                        }
                        &nbsp;
                         <PrimaryButton className="" disabled={processing}>
                             Save Changes
                        </PrimaryButton> &nbsp;
                        <button type="button" 
                        onClick={confirmUserDeletion}
                        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal">
                        Delete
                        </button> &nbsp;
                     
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                        </Transition>
             
                    </div>
                </form>
            </div>

            
            <DeleteModal show={confirmingUserDeletion} onClose={closeModal} maxWidth={'md'}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete this account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        type <span className="text-red-800 font-medium">password</span> to confirm you would like to permanently delete the account.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="text"
                            name="password"
                            value={passwordData.password}
                            onChange={(e) => setPasswordData({ ...formData, password: event.target.value })}
                            className="mt-1 block w-full"
                            isFocused
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </DeleteModal>
        </div>
        </AuthenticatedLayout>
    );
}
