// src/pages/gamepage/PalavraGame.js
import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


function PalavraGame() {
  const [palavra, setPalavra] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [resposta, setResposta] = useState(null);
  const buscarPalavra = async () => {
    try {
      const resposta = await fetch('/api/jogos/montapalavra');
      const dados = await resposta.json();
      setPalavra(dados[0].palavra);
      setImagem(dados[0].imagem)
    } catch (erro) {
      console.error('Erro ao buscar palavra:', erro);
    }
  };

  useEffect(() => {
      buscarPalavra();
    }, []);

   const verificarResposta = () => {
    console.log(resposta)
    if (resposta.trim().toLowerCase() === palavra.toLowerCase()) {
      setResultado('✅ Parabéns! Você acertou!');
    } else {
      setResultado(`❌ Você errou. A palavra correta era: ${palavra}`);
    }
  };

  if (!palavra) return <p>Carregando questão...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Complete a palavra:</h2>
      <p style={{ fontSize: '20px' }}>Questão: <strong>{palavra.questao}</strong></p>

      {imagem && (
        <img
          src={imagem}
          alt="Ilustração"
          style={{ maxWidth: '300px', display: 'block', margin: '20px 0' }}
        />
      )}

      <input
        type="text"
        
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite a palavra completa"
        style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '300px' }}
      />

      <button
        onClick={verificarResposta}
        style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Verificar
      </button>

      {resultado && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{resultado}</p>}
    </div>
  );
}
export default PalavraGame;