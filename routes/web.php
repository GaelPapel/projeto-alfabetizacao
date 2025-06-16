<?php

use App\Models\Desvisual;
use App\Models\Palavras;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$renderApp = function () {
    return Inertia::render('App');
};

Route::get('/', $renderApp);
Route::get('/jogos/montapalavra', $renderApp);
Route::get('/palavras', $renderApp);
Route::get('/jogos', $renderApp);
Route::get('/forum', $renderApp);
Route::get('/quem_somos', $renderApp);
Route::get('/config', $renderApp);

//Rotas Apis responsavel pela consulta ao banco de dados e entrega ao front por json

Route::get('/api/palavras', function () {
    $idAleatorio = rand(1, 30);
    $palavras = Palavras::where('id',$idAleatorio)->get();
    return response()->json($palavras);
});
Route::get('/api/jogos/montapalavra', function () {
    $idAleatorio = rand(1, 10);
    $palavras = Desvisual::where('id',$idAleatorio)->get();
    return response()->json($palavras);
});






require __DIR__.'/auth.php';
