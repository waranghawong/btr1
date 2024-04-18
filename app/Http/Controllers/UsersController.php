<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\UserInfo;
use App\Models\UserOrganization;
use App\Models\UserLocation;
use App\Models\UserSignatory;
use App\Models\SignatureHeadAgency;
use App\Http\Requests\StoreUserEnrollment;

class UsersController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $active =  UserInfo::select(['id','status',DB::raw("CONCAT(first_name,' ',last_name)  AS name")])->where('status', 'active')->get();
        $inactive =  UserInfo::select(['id','status',DB::raw("CONCAT(first_name,' ',last_name)  AS name")])->where('status', 'inactive')->get();
        $pending = UserInfo::select(['id','status',DB::raw("CONCAT(first_name,' ',last_name)  AS name")])->where('status', 'pending')->get();
        // return $pending;
        return Inertia::render('Admin/Users', [
            'active' => $active,
            'inactive' => $inactive,
            'pending' => $pending,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserEnrollment  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserEnrollment $request)
    {
        $data = $request->validated();

        $user = UserInfo::create([
            'email' => $data['email'],
            'first_name' => $data['first_name'],
            'middle_name' => $data['middle_name'],
            'last_name' => $data['last_name'],
            'position_title' => $data['position_title'],
        ]);

        
        if($user){
            $org = UserOrganization::create([
                'user_id' => $user->id,
                'client_type' => $data['client_types'],
                'department' => $data['department'],
                'agency' => $data['agency'],
                'operating_unit' => $data['operating_unit'],
            ]);

            if($org){
                $location = UserLocation::create([
                    'user_id' => $user->id,
                    'region' => $data['region'],
                    'province' => $data['province'],
                    'city' => $data['city'],
                ]);


                if($location){

                    $signatories = UserSignatory::create([
                        'user_id' => $user->id,
                        'signature_of_user' => $data['signature_of_user'],
                        'fullname_of_user' => $data['full_name_of_user'],
                        'position_of_user' => $data['position_of_user'],
                        'date_filed' => $data['date_filed'],
                    ]);

                    if($signatories){
                            $head = SignatureHeadAgency::create([
                                'user_id' => $user->id,
                                'full_name_of_head_of_agency' => $data['full_name_of_head_of_agency'],
                                'designation_of_head_of_agency' => $data['designation_of_head_of_agency'],
                            ]);
                    }
                }
            }
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserInfo $userprofile)
    {

        $organization = UserOrganization::where('user_id', $userprofile['id'])->get();
        $user_location = UserLocation::where('user_id', $userprofile['id'])->get();
        $user_signatories = UserSignatory::where('user_id', $userprofile['id'])->get();
        $user_signatories_head = SignatureHeadAgency::where('user_id', $userprofile['id'])->get();

        return  Inertia::render('Profile/EditUserInfo',[
            "userprofile" => $userprofile,
            "organization" => $organization == false ? '' : $organization[0] ,
            "user_location" => $user_location == false  ? '' : $user_location[0] ,
            "user_signatories" => $user_signatories == false  ? '' : $user_signatories[0] ,
            "user_signatories_head" => $user_signatories_head == false  ? '' :  $user_signatories_head[0]

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = UserInfo::where('id', $id)
        ->update([
            'email' => $request['email'],
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'position_title' => $request->position_title,
        ]);

        
        if($user){
            $org = UserOrganization::where('user_id', $id)->update([
                'client_type' => $request->client_types,
                'department' => $request->department,
                'agency' => $request->agency,
                'operating_unit' => $request->operating_unit,
            ]);

            if($org){
                $location = UserLocation::where('user_id', $id)->update([
                    'region' => $request->region,
                    'province' => $request->province,
                    'city' => $request->city,
                ]);


                if($location){

                    $signatories = UserSignatory::where('user_id', $id)->update([
                        'signature_of_user' => $request->signature_of_user,
                        'fullname_of_user' => $request->fullname_of_user,
                        'position_of_user' => $request->position_of_user,
                        'date_filed' => $request->date_filed,
                    ]);

                    if($signatories){
                            $head = SignatureHeadAgency::where('user_id', $id)->update([
                                'full_name_of_head_of_agency' => $request->full_name_of_head_of_agency,
                                'designation_of_head_of_agency' => $request->designation_of_head_of_agency,
                            ]);

                           
                    }
                }
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $user=UserInfo::find($id);
        $user->delete(); 

        return redirect()->route('superadmin.users');
    }

    public function activate_user(string $id)
    {
        UserInfo::where('id', $id)
        ->update([
            'status' => 'active'
        ]);
    }

    public function deactivate_user(string $id)
    {
        UserInfo::where('id', $id)
        ->update([
            'status' => 'inactive'
        ]);
    }
}
