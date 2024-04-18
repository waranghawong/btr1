<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserOrganization extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'user_organizations';

    protected $fillable = [
        'user_id',
        'client_type',
        'department',
        'agency',
        'operating_unit'
    ];
}
