<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserLocation extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'user_locations';

    protected $fillable = [
        'user_id',
        'region',
        'province',
        'city'
    ];
}
