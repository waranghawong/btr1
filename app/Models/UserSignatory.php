<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserSignatory extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'user_signatories';

    protected $fillable = [
        'user_id',
        'signature_of_user',
        'fullname_of_user',
        'position_of_user',
        'date_filed'
    ];
}
