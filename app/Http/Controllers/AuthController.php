<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    function getLogin(){
        return view('Auth.login');
    }
    function getCadastro(){
        return view('Auth.cadastro');
    }
    function postCadastro(Request $request){

        
        $request->validate([
            'nome'              => 'required|string|max:255',
            'data_nascimento'   => 'required|date',
            'estado'            => 'required|string|max:100',
            'email'             => 'required|email|unique:users,email',
            'password'          => 'required|min:6|'
        ]);

       
        User::create([
            'nome'              => $request->nome,
            'data_nascimento'   => $request->data_nascimento,
            'estado'            => $request->estado,
            'email'             => $request->email,
            'password'          => Hash::make($request->senha), 
            'nivel_aprendizado' => 0 // Alterar para outro metodo 'HardCode '
        ]);

        return view ("auth.login");
    }
}

