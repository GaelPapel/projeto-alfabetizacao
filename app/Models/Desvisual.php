<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Desvisual extends Model
{
    protected $fillable = [
        'id',
        'palavra',
        'imagem',
    ];
}
