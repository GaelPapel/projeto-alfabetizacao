import React from 'react';
import styled from 'styled-components';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton'; // IMPORTANTE: Importar o ReadTextButton

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
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Para permitir que o botão vá para a linha de baixo em telas pequenas */
`;

const Subtitle = styled.h3`
  color: #D2691E; /* ALTERADO: Laranja terracota para os subtítulos */
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Para permitir que o botão vá para a linha de baixo em telas pequenas */
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.9;
  color: #333333; /* ALTERADO: Cor mais escura para melhor legibilidade */
  margin-bottom: 20px;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Para permitir que o botão vá para a linha de baixo em telas pequenas */
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
  display: flex; /* ADICIONADO: Para o card ser um container flexível */
  flex-direction: column; /* ADICIONADO: Conteúdo em coluna */
`;

const FeatureTitle = styled.h4`
  color: #D2691E; /* ALTERADO: Laranja terracota para os títulos dos cards */
  font-size: 1.5em;
  margin-bottom: 12px;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Para permitir que o botão vá para a linha de baixo em telas pequenas */
`;

const FeatureDescription = styled.p`
  font-size: 1.05em;
  color: #555555; /* ALTERADO: Cinza um pouco mais claro para descrições de cards */
  line-height: 1.6;
  flex-grow: 1; /* Permite que ocupe o espaço restante no FeatureCard */
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Para permitir que o botão vá para a linha de baixo em telas pequenas */
`;

// --- Componente HomePage ---
function HomePage() {
  const introText1 = "Sua jornada para o conhecimento começa aqui. Nosso aplicativo foi criado para tornar o aprendizado da leitura e escrita uma experiência divertida, acessível e engajadora.";
  const introText2 = "Explore nossos recursos interativos, jogue, aprenda novas palavras e conecte-se com nossa comunidade. Estamos aqui para apoiá-lo em cada passo do caminho.";
  const feature1Text = "Expanda seu vocabulário diariamente! Descubra novas palavras, suas pronúncias, significados e exemplos de uso em frases. Uma maneira simples e eficaz de aprender algo novo todos os dias.";
  const feature2Text = "Aprender brincando é mais divertido! Nossos jogos interativos, como caça-palavras e jogo da memória, são projetados para fixar o conhecimento de forma lúdica e estimulante.";
  const feature3Text = "Conecte-se com uma comunidade vibrante de estudantes e educadores. Compartilhe suas dúvidas, ajude outras pessoas e troque experiências para enriquecer seu aprendizado.";
  const feature4Text = "..."; // Texto para "Alguma coisa"

  return (
    <PageContainer>
      <Section>
        <Title>
          Bem-vindo ao Projeto Alfabetização!
          <ReadTextButton text="Bem-vindo ao Projeto Alfabetização!" /> {/* Botão ao lado do título */}
        </Title>
        <Paragraph>
          {introText1}
          <ReadTextButton text={introText1} /> {/* Botão ao lado do parágrafo */}
        </Paragraph>
        <Paragraph>
          {introText2}
          <ReadTextButton text={introText2} /> {/* Botão ao lado do segundo parágrafo */}
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>
          Descubra Nossos Recursos
          <ReadTextButton text="Descubra Nossos Recursos" /> {/* Botão ao lado do subtítulo */}
        </Subtitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>
              Palavras do Dia
              <ReadTextButton text="Palavras do Dia" /> {/* Botão ao lado do título do card */}
            </FeatureTitle>
            <FeatureDescription>
              {feature1Text}
              <ReadTextButton text={feature1Text} /> {/* Botão ao lado da descrição do card */}
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>
              Jogos Educativos
              <ReadTextButton text="Jogos Educativos" /> {/* Botão ao lado do título do card */}
            </FeatureTitle>
            <FeatureDescription>
              {feature2Text}
              <ReadTextButton text={feature2Text} /> {/* Botão ao lado da descrição do card */}
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>
              Fórum de Discussões
              <ReadTextButton text="Fórum de Discussões" /> {/* Botão ao lado do título do card */}
            </FeatureTitle>
            <FeatureDescription>
              {feature3Text}
              <ReadTextButton text={feature3Text} /> {/* Botão ao lado da descrição do card */}
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>
              Alguma coisa
              <ReadTextButton text="Alguma coisa" /> {/* Botão ao lado do título do card */}
            </FeatureTitle>
            <FeatureDescription>
              {feature4Text}
              <ReadTextButton text={feature4Text} /> {/* Botão ao lado da descrição do card */}
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>
    </PageContainer>
  );
}

export default HomePage;