// src/pages/QuemSomosPage.js
import React from 'react';
import styled from 'styled-components';
// Importe ícones para as outras seções
import { FaGraduationCap, FaBullseye, FaLightbulb, FaUsers, FaCheckCircle, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { IoGameController, IoVolumeHigh } from 'react-icons/io5';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton';

// --- PALETA DE CORES SUGERIDA ---
const Colors = {
  primary: '#8B4513',       // Marrom Chocolate (títulos principais)
  secondary: '#D2691E',     // Laranja Terracota (subtítulos, ícones de destaque)
  accent1: '#4CAF50',      // Verde vibrante para ícones/destaques
  accent2: '#2196F3',      // Azul vibrante para ícones/destaques
  textDark: '#333333',      // Texto escuro para legibilidade
  textMedium: '#555555',    // Texto médio
  bgLight: '#F8F9FA',      // Fundo leve
  bgWhite: '#FFFFFF',      // Fundo branco de seções
  cardBg: '#f0f2f5',         // Fundo de cards de equipe/tecnologia
  hoverLight: '#e2e4e8',    // Fundo de hover mais claro
};

// --- Styled Components para a QuemSomosPage ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px 30px;
  background-color: ${Colors.bgLight};
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
  max-width: 1000px;
  width: 95%;
  margin: 40px auto;
  color: ${Colors.textDark};
`;

const Section = styled.section`
  text-align: left;
  padding: 30px;
  background-color: ${Colors.bgWhite};
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: ${Colors.primary};
  font-size: 3em;
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
  display: flex; /* Para alinhar o ícone e o texto */
  align-items: center; /* Alinha verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  gap: 15px; /* Espaço entre o ícone e o texto */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
`;

// Styled Component para a imagem do logo no título
const TitleLogo = styled.img`
  height: 1.5em; /* Ajusta a altura da imagem proporcionalmente ao tamanho da fonte do título */
  width: auto;
`;

const Subtitle = styled.h3`
  color: ${Colors.secondary};
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.9;
  color: ${Colors.textDark};
  margin-bottom: 20px;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
`;

// DEFINIÇÃO DO COMPONENTE LIST (para listas gerais)
const List = styled.ul`
  list-style: none; /* Remove marcadores de lista padrão */
  padding: 0;
  margin-top: 20px;
`;

// DEFINIÇÃO DO COMPONENTE ListItem (COM ÍCONE customizado)
const ListItem = styled.li`
  font-size: 1.15em;
  color: ${Colors.textMedium};
  margin-bottom: 15px;
  padding-left: 40px; /* Mais espaço para o ícone */
  position: relative;
  line-height: 1.5; /* Melhorar espaçamento */
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */


  & svg { /* Estiliza o ícone do React Icons diretamente */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.6em; /* Tamanho maior para o ícone */
    color: ${Colors.accent1}; /* Cor de destaque para o ícone */
    margin-right: 10px; /* ADICIONADO: Ajuste para separar o ícone do texto */
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const TeamMemberCard = styled.div`
  background-color: ${Colors.cardBg};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex; /* ADICIONADO: Para o card ser um container flexível */
  flex-direction: column; /* ADICIONADO: Conteúdo em coluna */

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const MemberName = styled.h4`
  color: ${Colors.primary};
  font-size: 1.3em;
  margin-bottom: 5px;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
`;

const MemberRole = styled.p`
  font-size: 0.95em;
  color: ${Colors.textMedium};
  margin-bottom: 10px;
  flex-grow: 1; /* ADICIONADO: Para ocupar o espaço restante no TeamMemberCard */
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const TechItem = styled.li`
  background-color: ${Colors.secondary};
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.95em;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  gap: 5px; /* ADICIONADO: Espaço entre o ícone e o texto */
`;

// --- Componente QuemSomosPage ---
function QuemSomosPage() {
  // Textos para facilitar a passagem para o ReadTextButton
  const titleText = "Sobre o Projeto Alfabetização";
  const introText1 = "Este é um trabalho desenvolvido para a UNA Cristiano Machado, com o foco em auxiliar na alfabetização de adultos, utilizando jogos interativos e métodos inclusivos. Nosso projeto se inspira profundamente nos princípios de Paulo Freire, buscando uma alfabetização que vá além da mera decodificação de palavras. Acreditamos na conexão do aprendizado à realidade e às experiências de vida dos alunos. Nossa abordagem se baseia na utilização de temas geradores relevantes para o cotidiano dos adultos, promovendo o diálogo, a reflexão crítica e a valorização do seu conhecimento prévio.";
  const objectiveSubtitle = "Nosso Objetivo";
  const objectiveIntroText = "Desenvolver uma plataforma acessível e intuitiva que ensine leitura e escrita para pessoas analfabetas ou semianalfabetas. Nossos principais focos são:";
  const objective4 = "Facilidade de uso: Uma interface simples e clara para todos os usuários. Acessibilidade: Suporte a áudio e recursos visuais para facilitar o aprendizado. Aprendizado interativo: Através de jogos, quizzes e atividades práticas que tornam o processo divertido. Comunidade: Criação de um espaço de troca e apoio mútuo entre pessoas na mesma jornada de aprendizado.";
  const featuresSubtitle = "Funcionalidades Principais";
  const feature1 = "Jogos e atividades educativas: Incluindo Caça-palavras temáticos, jogos da memória com palavras e imagens, quizzes narrativos sobre situações do cotidiano, e atividades de pareamento palavra-imagem e palavra-definição.";
  const feature2 = "Áudio para auxílio na leitura: Pronúncia de palavras, narração de textos e instruções das atividades.";
  const feature3 = "Conexão entre usuários: Fóruns de discussão sobre os temas geradores, e espaços para compartilhar produções textuais e experiências de aprendizado.";
  const techSubtitle = "Tecnologias Utilizadas";
  const techIntroText = "Nosso projeto é construído com as seguintes tecnologias robustas:";
  const techHtml = "HTML";
  const techCss = "CSS";
  const techJs = "JavaScript";
  const techReact = "React (Frontend)";
  const techPhp = "PHP (Backend)";
  const techMysql = "MySQL (Banco de Dados)";
  const teamSubtitle = "Nossa Equipe e Colaboradores";

  return (
    <PageContainer>
      <Section>
        <Title>
          <TitleLogo src="/assets/novo-logo.png" alt="Logo do Projeto Alfabetização" />
          {titleText}
          <ReadTextButton text={titleText} /> {/* ADICIONADO: Botão de leitura para o título */}
        </Title>
        <Paragraph>
          {introText1}
          <ReadTextButton text={introText1} /> {/* ADICIONADO: Botão de leitura para o primeiro parágrafo */}
        </Paragraph>
        <Paragraph>
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>
          {objectiveSubtitle}
          <ReadTextButton text={objectiveSubtitle} /> {/* ADICIONADO: Botão de leitura para o subtítulo */}
        </Subtitle>
        <Paragraph>
          {objectiveIntroText}
          <ReadTextButton text={objectiveIntroText} /> {/* ADICIONADO: Botão de leitura para o parágrafo */}
        </Paragraph>
        <List>
          <ListItem>
             {objective4}
            <ReadTextButton text={objective4} /> {/* ADICIONADO: Botão de leitura para o item de lista */}
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>
          {featuresSubtitle}
          <ReadTextButton text={featuresSubtitle} /> {/* ADICIONADO: Botão de leitura para o subtítulo */}
        </Subtitle>
        <List>
          <ListItem>
            <IoGameController /> {feature1}
            <ReadTextButton text={feature1} /> {/* ADICIONADO: Botão de leitura para o item de lista */}
          </ListItem>
          <ListItem>
            <IoVolumeHigh /> {feature2}
            <ReadTextButton text={feature2} /> {/* ADICIONADO: Botão de leitura para o item de lista */}
          </ListItem>
          <ListItem>
            <FaUsers /> {feature3}
            <ReadTextButton text={feature3} /> {/* ADICIONADO: Botão de leitura para o item de lista */}
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>
          {techSubtitle}
          <ReadTextButton text={techSubtitle} /> {/* ADICIONADO: Botão de leitura para o subtítulo */}
        </Subtitle>
        <Paragraph>
          {techIntroText}
          
        </Paragraph>
        <TechList>
          <TechItem>
            <FaLaptopCode /> {techHtml}
            
          </TechItem>
          <TechItem>
            <FaLaptopCode /> {techCss}
            
          </TechItem>
          <TechItem>
            <FaLaptopCode /> {techJs}
            
          </TechItem>
          <TechItem>
            <FaLaptopCode /> {techReact}
            
          </TechItem>
          <TechItem>
            <FaLaptopCode /> {techPhp}
           
          </TechItem>
          <TechItem>
            <FaDatabase /> {techMysql}
           
          </TechItem>
        </TechList>
      </Section>

      <Section>
        <Subtitle>
          {teamSubtitle}
          <ReadTextButton text={teamSubtitle} /> {/* ADICIONADO: Botão de leitura para o subtítulo */}
        </Subtitle>
        <TeamGrid>
          <TeamMemberCard>
            <MemberName>Gabriel Freitas</MemberName>
            <MemberRole>Desenvolvedor Frontend</MemberRole>
            <ReadTextButton text="Gabriel Freitas, Desenvolvedor Frontiendi" /> {/* ADICIONADO: Botão de leitura para nome e cargo */}
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Emerson Pedrosa</MemberName>
            <MemberRole>Desenvolvedor Backend</MemberRole>
            <ReadTextButton text="Emerson Pedrosa, Desenvolvedor Backende" /> {/* ADICIONADO: Botão de leitura para nome e cargo */}
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Gabriel Haziel</MemberName>
            
            <ReadTextButton text= "Gabriel Haziel"/> {/* ADICIONADO: Botão de leitura para nome e cargo */}
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Artur Camargos</MemberName>
           
            <ReadTextButton text= "Artur Camargos"/> {/* ADICIONADO: Botão de leitura para nome e cargo */}
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Bernardo Araujo</MemberName>
            
            <ReadTextButton text="Bernardo Araujo"/> {/* ADICIONADO: Botão de leitura para nome e cargo */}
          </TeamMemberCard>
        </TeamGrid>
      </Section>
    </PageContainer>
  );
}

export default QuemSomosPage;