<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/',[AuthController::class, 'getLogin'])->name('getLogin');
Route::get('/cadastro',[AuthController::class, 'getCadastro'])->name('getCadastro');

Route::post('/cadastro',[AuthController::class, 'postCadastro'])->name('postCadastro');