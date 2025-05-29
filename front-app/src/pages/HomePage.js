import React from 'react';
import styled from 'styled-components';

// --- Styled Components para a HomePage ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px 30px;
  background-color: #F8F9FA; /* MANTIDO: Base neutra para o container principal */
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  width: 95%;
  margin: 40px auto;
  color: #333333; /* ALTERADO: Cor geral do texto */
`;

const Section = styled.section`
  text-align: left;
  padding: 30px;
  background-color: #ffffff; /* MANTIDO: Branco puro para as seções internas */
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #8B4513; /* ALTERADO: Marrom chocolate para o título principal */
  font-size: 3em;
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: #D2691E; /* ALTERADO: Laranja terracota para os subtítulos */
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.9;
  color: #333333; /* ALTERADO: Cor mais escura para melhor legibilidade */
  margin-bottom: 20px;
`;

const CallToAction = styled.button`
  background-color: #8B4513; /* ALTERADO: Marrom chocolate para o botão CTA */
  color: white;
  padding: 18px 35px;
  border: none;
  border-radius: 10px;
  font-size: 1.3em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #A0522D; /* ALTERADO: Marrom-laranja mais suave no hover */
    transform: translateY(-5px);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const FeatureCard = styled.div`
  background-color: #F0F2F5; /* MANTIDO: Fundo ligeiramente diferente para o card */
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  text-align: left;
`;

const FeatureTitle = styled.h4`
  color: #D2691E; /* ALTERADO: Laranja terracota para os títulos dos cards */
  font-size: 1.5em;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 1.05em;
  color: #555555; /* ALTERADO: Cinza um pouco mais claro para descrições de cards */
  line-height: 1.6;
`;

// --- Componente HomePage ---
function HomePage() {
  return (
    <PageContainer>
      <Section>
        <Title>Bem-vindo ao Projeto Alfabetização!</Title>
        <Paragraph>
          Sua jornada para o conhecimento começa aqui. Nosso aplicativo foi criado para tornar o aprendizado da leitura e escrita uma experiência divertida, acessível e engajadora.
        </Paragraph>
        <Paragraph>
          Explore nossos recursos interativos, jogue, aprenda novas palavras e conecte-se com nossa comunidade. Estamos aqui para apoiá-lo em cada passo do caminho.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Descubra Nossos Recursos</Subtitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>Palavras do Dia</FeatureTitle>
            <FeatureDescription>
              Expanda seu vocabulário diariamente! Descubra novas palavras, suas pronúncias, significados e exemplos de uso em frases. Uma maneira simples e eficaz de aprender algo novo todos os dias.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Jogos Educativos</FeatureTitle>
            <FeatureDescription>
              Aprender brincando é mais divertido! Nossos jogos interativos, como caça-palavras e jogo da memória, são projetados para fixar o conhecimento de forma lúdica e estimulante.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Fórum de Discussões</FeatureTitle>
            <FeatureDescription>
              Conecte-se com uma comunidade vibrante de estudantes e educadores. Compartilhe suas dúvidas, ajude outras pessoas e troque experiências para enriquecer seu aprendizado.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Alguma coisa</FeatureTitle>
            <FeatureDescription>
            ...
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>
    </PageContainer>
  );
}

export default HomePage;