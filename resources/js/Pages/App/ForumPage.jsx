import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const nomes = [
  'João', 'Maria', 'Carlos', 'Ana', 'Pedro', 'Fernanda',
  'Lucas', 'Juliana', 'Eduardo', 'Camila', 'Rafael', 'Larissa',
  'Bruno', 'Tatiane', 'Marcos', 'Isabela', 'Felipe', 'Beatriz',
  'Gustavo', 'Patrícia', 'André', 'Bianca', 'Rodrigo', 'Natália',
  'Daniel', 'Letícia', 'Leandro', 'Sabrina', 'Vinícius', 'Paula',
  'Alexandre', 'Tatiana', 'Henrique', 'Carolina', 'Igor', 'Vanessa',
  'Tiago', 'Renata', 'Fábio', 'Amanda'
];

const mensagens = [
  'Achei o site maravilhoso! Consegui aprender a ler palavras básicas em poucos dias. Tudo muito bem explicado.',
  'Nunca imaginei que aprender a ler seria tão fácil. As atividades são divertidas e me ajudaram muito!',
  'Copiaram o Duolingo 🦜 na cara de pau.',
  'Gostei muito das aulas! As explicações com áudio e jogos tornaram o aprendizado muito mais leve.',
  'Esse site mudou minha vida! Aprender a ler com ele foi simples e muito gratificante.',
  'Fiquei muito feliz com meu progresso. As lições são bem organizadas e fáceis de seguir.',
  'Comecei sem saber quase nada e agora já leio textos simples sozinho. Muito obrigado!',
  'Achei incrível como os jogos me ajudaram a memorizar as palavras. Parabéns pelo trabalho!',
  "Meu gato 😾 comeu meu mouse 🐀, não gostei.",
  'A alfabetização pelo site foi uma das melhores experiências que tive. Recomendo para todos!',
  'Os áudios me ajudaram a entender a pronúncia correta. Aprender ficou bem mais fácil.',
  'Adorei as atividades com imagens e sons. Aprender ficou divertido e eficiente!',
  'Foi muito mais fácil do que eu pensava! O site é claro, didático e bem feito.',
  'Receita de Bolo 🎂 de cenoura 🥕 google pesquisar.',
  'Muito obrigado por esse conteúdo! Eu achava que já era tarde para aprender, mas consegui.',
  'A plataforma é intuitiva e muito agradável. Fiquei empolgado a cada lição completada.',
  'COMO TIRAR LETRA GRAMDE ?????.',
  'Recomendo muito! É o tipo de site que faz a diferença na vida de quem quer aprender a ler.'
];

const datas = [
  '08:32 02/01/2024', '10:45 03/01/2024', '14:22 05/01/2024',
  '18:10 06/01/2024', '07:55 07/01/2024', '09:33 08/01/2024',
  '11:48 09/01/2024', '16:17 10/01/2024', '19:45 11/01/2024',
  '13:29 12/01/2024', '08:00 13/01/2024', '17:35 14/01/2024',
  '12:12 15/01/2024', '15:59 16/01/2024', '20:44 17/01/2024',
  '09:25 18/01/2024', '07:18 19/01/2024', '11:05 20/01/2024'
];
function gerarPostagemAleatoria() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  const data = datas[Math.floor(Math.random() * datas.length)];

  return { nome, mensagem, data };
}

function ForumPage() {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    // Simula 5 postagens novas a cada atualização
    const novasPostagens = Array.from({ length: 5 }, () => gerarPostagemAleatoria());
    setPostagens(novasPostagens);
  }, []);

  return (
    <PageContainer>
      <Title>Fórum da Comunidade</Title>
      <Content>
          {postagens.map((post, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              marginTop: '10px',
              backgroundColor: '#f9f9f9'
            }}>
              <p><strong>{post.nome}</strong> <span style={{ color: '#999', fontSize: '12px' }}>{post.data}</span></p>
              <p>{post.mensagem}</p>
              <div style={{
                display: 'flex',
                width: '100%',
                padding: '30px 0 10px 0'
              }} >
                <button style={{
                  flex: '1'
                }}>👍</button>
                <button style={{
                  flex: '1'
                }}>👎</button>
              
              </div>
            </div>
              ))}
      </Content>
    </PageContainer>
  );
}


export default ForumPage;