<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Palavras extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       
        $palavras = [
            ['palavra' => 'Casa',        'questao' => 'C*sa'],
            ['palavra' => 'Pato',        'questao' => 'Pa*o'],
            ['palavra' => 'Bola',        'questao' => 'Bo*a'],
            ['palavra' => 'Mesa',        'questao' => 'Me*a'],
            ['palavra' => 'Luz',         'questao' => 'L*z'],
            ['palavra' => 'Chave',       'questao' => '*have'],
            ['palavra' => 'Sapo',        'questao' => 'Sa*o'],
            ['palavra' => 'Copo',        'questao' => 'C*p*'],
            ['palavra' => 'Livro',       'questao' => 'Liv*o'],
            ['palavra' => 'Rato',        'questao' => 'Ra*o'],
            ['palavra' => 'Gato',        'questao' => '*ato'],
            ['palavra' => 'Leite',       'questao' => 'Lei*e'],
            ['palavra' => 'Faca',        'questao' => 'Fac*'],
            ['palavra' => 'Peixe',       'questao' => 'P*ix*'],
            ['palavra' => 'Dente',       'questao' => 'Den*e'],
            ['palavra' => 'Cama',        'questao' => 'Ca*a'],
            ['palavra' => 'Janela',      'questao' => 'Ja*e*a'],
            ['palavra' => 'Caderno',     'questao' => 'Cade*no'],
            ['palavra' => 'Banho',       'questao' => 'B*nho'],
            ['palavra' => 'Roupa',       'questao' => 'Ro*pa'],
            ['palavra' => 'Chuva',       'questao' => 'Chu*a'],
            ['palavra' => 'Porta',       'questao' => 'P*rta'],
            ['palavra' => 'Areia',       'questao' => 'Ar*ia'],
            ['palavra' => 'Sol',         'questao' => 'S*l'],
            ['palavra' => 'Flor',        'questao' => 'F*or'],
            ['palavra' => 'Maçã',        'questao' => '*açã'],
            ['palavra' => 'Pão',         'questao' => 'P*o'],
            ['palavra' => 'Dado',        'questao' => 'D*d*'],
            ['palavra' => 'Bolo',        'questao' => 'Bo*o'],
            ['palavra' => 'Tempo',       'questao' => 'T*m*o'],
        ];

        foreach ($palavras as $p) {
            DB::table('palavras')->insert($p);
        }
    }
}
