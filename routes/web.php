<?php

use App\Models\Desvisual;
use App\Models\Palavras;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// REMOVA $renderApp = function () { return Inertia::render('App'); };

// Rotas para as suas páginas frontend, renderizando o componente React correto
Route::get('/', function () {
    return Inertia::render('App/HomePage'); // Renderiza diretamente HomePage
})->name('home');

// Corrigido para apontar para o novo jogo 'MonteAPalavraGame' na pasta 'Games'
Route::get('/jogos/monte-a-palavra', function () {
    return Inertia::render('Games/MonteAPalavra/MonteAPalavraGame'); // >>> PONTO CHAVE AQUI
})->name('jogos.montapalavra');

// A rota 'palavras' renderizará a PalavrasPage diretamente
Route::get('/palavras', function () {
    return Inertia::render('App/PalavrasPage');
})->name('palavras.index');

// Rotas para as outras páginas
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

// Rotas Apis responsavel pela consulta ao banco de dados e entrega ao front por json
Route::get('/api/palavras', function () {
    $idAleatorio = rand(1, 30);
    $palavras = Palavras::where('id',$idAleatorio)->get();
    return response()->json($palavras);
});

// Sua rota API para o novo jogo 'MonteAPalavraGame'
Route::get('/api/jogos/montapalavra', function () {
    $idAleatorio = rand(1, 10);
    // Assegure-se que o modelo Desvisual retorna 'palavra', 'imagem' e 'silabas' ou 'letrasEmbaralhadas'
    $palavras = Desvisual::where('id',$idAleatorio)->get();
    return response()->json($palavras);
});

require __DIR__.'/auth.php';