<?php

use App\Models\Desvisual;
use App\Models\Palavras;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('App/HomePage');
})->name('home');

Route::get('/jogos/monte-a-palavra', function () {
    return Inertia::render('Games/MonteAPalavra/MonteAPalavraGame');
})->name('jogos.montapalavra');

Route::get('/jogos/memoria', function () {
    return Inertia::render('Games/MemoriaGame/MemoriaGame');
})->name('games.memoria');


Route::get('/palavras', function () {
    return Inertia::render('App/PalavrasPage');
})->name('palavras.index');

Route::get('/jogos', function () {
    return Inertia::render('App/JogosPage');
})->name('jogos.index');

Route::get('/forum', function () {
    return Inertia::render('App/ForumPage');
})->name('forum.index');

Route::get('/quem_somos', function () {
    return Inertia::render('App/QuemSomosPage');
})->name('quem_somos.index');

Route::get('/config', function () {
    return Inertia::render('App/ConfigPage');
})->name('config.index');

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