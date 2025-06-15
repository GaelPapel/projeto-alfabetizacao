import React from 'react';
import styled from 'styled-components';
import { FaBrain, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton'; // IMPORTADO: ReadTextButton

// --- Styled Components para a JogosPage ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px 30px;
  background-color: #F8F9FA;
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  width: 95%;
  margin: 40px auto;
  color: #333333;
`;

const Section = styled.section`
  text-align: left;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

// Novo styled component para conter texto e botão de fala (usado fora dos cards de jogo)
const TextWithReadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  gap: 10px; /* Espaço entre o texto e o botão */
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
  text-align: center; /* Garante que o texto dentro do flexbox permaneça centralizado */
`;

const Title = styled.h2`
  color: #8B4513;
  font-size: 3em;
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: #D2691E;
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.9;
  color: #333333;
  margin-bottom: 20px;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

// ALTERADO: GameCard agora é um StyledLink
const StyledGameCard = styled(Link)`
  background-color: #f0f2f5;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* Remove sublinhado padrão do link */
  color: inherit; /* Garante que a cor do texto seja herdada ou definida explicitamente */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
    background-color: #e2e4e8; /* Cor um pouco mais escura no hover */
  }

  /* Novo estilo para o ReadTextButton dentro do GameCard para posicionamento */
  ${ReadTextButton} {
    margin-top: 15px; /* Adiciona espaço entre a descrição e o botão de áudio */
    align-self: center; /* Garante que o botão fique centralizado horizontalmente no card */
  }
`;

const GameIcon = styled.div`
  font-size: 3.5em;
  color: #D2691E;
  margin-bottom: 20px;
`;

const GameTitle = styled.h4`
  color: #8B4513;
  font-size: 1.6em;
  margin-bottom: 15px;
`;

const GameDescription = styled.p`
  font-size: 1em;
  color: #555555;
  line-height: 1.6;
`;

// --- Componente JogosPage ---
function JogosPage() {
  // Textos para facilitar a passagem para o ReadTextButton
  const titleText = "Jogos Educativos";
  const introParagraphText = "Bem-vindo à nossa seção de jogos! Aqui você encontrará diversas atividades lúdicas para praticar a leitura e a escrita de forma interativa e divertida. Clique em um jogo para começar!";
  const subtitleText = "Nossos Jogos Disponíveis";
  const memoryGameTitle = "Jogo da Memória";
  const memoryGameDescription = "Teste sua memória e identifique pares de palavras e imagens.";
  const mountWordGameTitle = "Desafio Visual";
  const mountWordGameDescription = "Acerte o nome de cada imagem";

  return (
    <PageContainer>
      <Section>
        <Title>
          <TextWithReadButton> {/* Mantido para o título da página */}
            {titleText}
            <ReadTextButton text={titleText} />
          </TextWithReadButton>
        </Title>
        <Paragraph>
          <TextWithReadButton> {/* Mantido para o parágrafo introdutório */}
            {introParagraphText}
            <ReadTextButton text={introParagraphText} />
          </TextWithReadButton>
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>
          <TextWithReadButton> {/* Mantido para o subtítulo da seção */}
            {subtitleText}
            <ReadTextButton text={subtitleText} />
          </TextWithReadButton>
        </Subtitle>
        <GamesGrid>
          {/* Jogo da Memória como um Link */}
          <StyledGameCard to="/jogos/memoria">
            <GameIcon><FaBrain /></GameIcon>
            <GameTitle>
              {memoryGameTitle} {/* Texto do título do jogo */}
            </GameTitle>
            <GameDescription>
              {memoryGameDescription} {/* Texto da descrição do jogo */}
            </GameDescription>            
          </StyledGameCard>

          {/* Monte a Palavra como um Link */}
          <StyledGameCard to="/jogos/montapalavra">
            <GameIcon><FaEdit /></GameIcon>
            <GameTitle>
              {mountWordGameTitle} {/* Texto do título do jogo */}
            </GameTitle>
            <GameDescription>
              {mountWordGameDescription} {/* Texto da descrição do jogo */}
            </GameDescription>           
          </StyledGameCard>

          {/* Você pode adicionar mais StyledGameCards aqui futuramente */}
        </GamesGrid>
      </Section>
    </PageContainer>
  );
}

export default JogosPage;