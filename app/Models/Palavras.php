<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Palavras extends Model
{
    protected $fillable = [
        'id',
        'palavra',
        'questao',
    ];
}
