<?php

use App\Models\Desvisual;
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
Route::get('/api/jogos/montapalavra', function () {
    $idAleatorio = rand(1, 10);
    $palavras = Desvisual::where('id',$idAleatorio)->get();
    return response()->json($palavras);
});

Route::get('/jogos/montapalavra', function () {
    return Inertia::render('App');
});




require __DIR__.'/auth.php';
