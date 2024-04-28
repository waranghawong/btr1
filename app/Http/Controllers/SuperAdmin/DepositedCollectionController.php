<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\UserInfo;
use App\Models\DepositedCollection;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\DepositedCollectionRequest;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\Storage;

class DepositedCollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DepositedCollection::select(['id','requestor_name','office_address', 'designated_contact_person','name_of_agency'])->orderBy('id', 'DESC')->get();
        return Inertia::render('Admin/DepositedCollection', [
        'data_collection' => $data,
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
         * @param  \App\Http\Requests\DepositedCollectionRequest  $request
         * @return \Illuminate\Http\Response
     */
    public function uploadFile(DepositedCollectionRequest $request)
{
        $data = $request->validated();
        $post = new DepositedCollection;

        //upload file
        $file = $request->file('files');
        $fileName = $file->getClientOriginalName();
        $filePath = $file->store('files');
     
        //store to database
        $post->provincial_office = $data['provincial_office'];
        $post->requestor_name = $data['name_of_requestor'];
        $post->requestor_position = $data['position_of_requestor'];
        $post->agency_name_requestor = $data['agency_name_of_requestor'];
        $post->office_address = $data['office_address'];
        $post->sex_requestor = $data['sex_requestor'];
        $post->offician_email = $data['offician_email'];
        $post->type_of_request_cert = $data['type_of_request_cert'];
        $post->designated_contact_person = $data['designated_contact_person'];
        $post->uacs_organization_code = $data['uacs_organization_code'];
        $post->name_of_agency = $data['name_of_agency'];
        $post->bank_branch_deposit = $data['bank_branch_deposit'];
        $post->name_of_national_collecting_officer = $data['name_of_national_collecting_officer'];
        $post->national_collecting_officer_code = $data['national_collecting_officer_code'];
        $post->date_period_covered = $data['date_period_covered'];
        $post->amount_figures = $data['amount_figures'];
        $post->depository_bank = $data['depository_bank'];
        $post->general_fund = $data['general_fund'];
        $post->special_accounts_in_general_fund1 = $data['special_accounts_in_general_fund1'];
        $post->special_accounts_in_general_fund_other = $data['special_accounts_in_general_fund_other'];
        $post->trust_fund = $data['trust_fund'];
        $post->file_dir = $filePath;
        $post->save();



        return redirect(route('superadmin.deposited_collections', absolute: false));
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
    public function edit(string $id)
    {

        $deposit_collection = DepositedCollection::where('id', $id)->get();
     

        return Inertia::render('DepositCollection/EditDepositCollection',[
            'deposit_collection'=> $deposit_collection[0],
            // 'deposit_collection'=> $deposit_collection[0],
        ]);
    }

    /**
         * Store a newly created resource in storage.
         *
         * @param  \App\Http\Requests\DepositedCollectionRequest  $request
         * @return \Illuminate\Http\Response
     */
    public function update(DepositedCollectionRequest $request, string $id)
    {
        dd($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        
    }

    private function saveImage($image)
    {
        // Check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }

    public function showpdf(string $id){
        $deposit_collection = DepositedCollection::where('id', $id)->get();
        foreach($deposit_collection as $data){
            $data = $data->file_dir;
          
            
        }
       
        $path = Storage::path($data);
        return response()->file($path);
    }
}
