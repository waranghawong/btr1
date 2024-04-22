<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\UserInfo;
use Illuminate\Support\Facades\DB;

class MdsCheckController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pending = UserInfo::select(['id','status',DB::raw("CONCAT(first_name,' ',last_name)  AS name")])->where('status', 'pending')->get();
        return Inertia::render('Admin/MdsCheck', [
            'pending' => $pending
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
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
