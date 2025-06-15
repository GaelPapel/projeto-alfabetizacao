<?php

use App\Models\Palavras;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('App');
});

Route::get('/palavras', function () {
    $idAleatorio = rand(1, 30);
    $palavras = Palavras::where('id',$idAleatorio)->get();
    
    return response()->json($palavras);
});


require __DIR__.'/auth.php';
