import React from 'react';
import styled from 'styled-components';
import { useState,useEffect } from 'react';

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 20px auto;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 15px;
`;

const Content = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

function PalavrasPage() {
  const [palavra, setPalavra] = useState(null);
  const [questao, setQuestao] = useState(null);
  const [respostaUsuario, setRespostaUsuario] = useState('');
  const [mensagem, setMensagem] = useState('');
  const buscarPalavra = async () => {
    try {
      const resposta = await fetch('/api/palavras');
      const dados = await resposta.json();
      
      setPalavra(dados[0].palavra);
      setQuestao(dados[0].questao);
    } catch (erro) {
      console.error('Erro ao buscar palavra:', erro);
    }
  };

   useEffect(() => {
    buscarPalavra();
  }, []);

   const verificarResposta = (e) => {
    e.preventDefault();

    if (respostaUsuario.trim().toLowerCase() === palavra.toLowerCase()) {
      setMensagem('✅ Parabéns! Você acertou!');
    } else {
      setMensagem(`❌ O correto era: ${palavra}`);
    }
  };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Complete a Palavra</h2>

      {questao && (
        <p style={{ fontSize: '2rem', marginTop: '1rem' }}>
          Palavra: <strong>{questao}</strong>
        </p>
      )}

      <form onSubmit={verificarResposta} style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Digite a palavra completa"
          value={respostaUsuario}
          onChange={(e) => setRespostaUsuario(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Verificar
        </button>
      </form>

      {mensagem && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}






export default PalavrasPage;