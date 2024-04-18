<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignatureHeadAgency extends Model
{
  
    use HasFactory;

    protected $guarded = [];
    
    protected $table = 'signature_head_agencies';

    protected $fillable = [
        'user_id',
        'full_name_of_head_of_agency',
        'designation_of_head_of_agency',
    ];
}
