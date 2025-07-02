<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Desvisual extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('Desvisuals')->insert([
            [
                'palavra' => 'Cadeira',
                'imagem' => '/imagens/cadeira.png',
            ],
            [
                'palavra' => 'Dinheiro',
                'imagem' => '/imagens/dinheiro.png',
            ],
            [
                'palavra' => 'Cama',
                'imagem' => '/imagens/cama.png',
            ],
            [
                'palavra' => 'Armario',
                'imagem' => '/imagens/armario.png',
            ],
            [
                'palavra' => 'chuva',
                'imagem' => '/imagens/chuva.png',
            ],
            [
                'palavra' => 'Panela',
                'imagem' => '/imagens/panela.png',
            ],
            [
                'palavra' => 'Geladeira',
                'imagem' => '/imagens/geladeira.png',
            ],
            [
                'palavra' => 'Arvore',
                'imagem' => '/imagens/arvore.png',
            ],
            [
                'palavra' => 'Cachorro',
                'imagem' => '/imagens/cachorro.png',
            ],
            [
                'palavra' => 'Celular',
                'imagem' => '/imagens/celular.png',
            ]
           
        ]);
    }
}
