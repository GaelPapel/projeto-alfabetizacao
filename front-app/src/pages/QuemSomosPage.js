// src/pages/QuemSomosPage.js
import React from 'react';
import styled from 'styled-components';
// Importe ícones para as outras seções
import { FaGraduationCap, FaBullseye, FaLightbulb, FaUsers, FaCheckCircle, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { IoGameController, IoVolumeHigh } from 'react-icons/io5';

// --- PALETA DE CORES SUGERIDA ---
const Colors = {
  primary: '#8B4513',       // Marrom Chocolate (títulos principais)
  secondary: '#D2691E',     // Laranja Terracota (subtítulos, ícones de destaque)
  accent1: '#4CAF50',       // Verde vibrante para ícones/destaques
  accent2: '#2196F3',       // Azul vibrante para ícones/destaques
  textDark: '#333333',      // Texto escuro para legibilidade
  textMedium: '#555555',    // Texto médio
  bgLight: '#F8F9FA',      // Fundo leve
  bgWhite: '#FFFFFF',      // Fundo branco de seções
  cardBg: '#f0f2f5',        // Fundo de cards de equipe/tecnologia
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
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.9;
  color: ${Colors.textDark};
  margin-bottom: 20px;
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

  & svg { /* Estiliza o ícone do React Icons diretamente */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.6em; /* Tamanho maior para o ícone */
    color: ${Colors.accent1}; /* Cor de destaque para o ícone */
    margin-right: 10px;
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const MemberName = styled.h4`
  color: ${Colors.primary};
  font-size: 1.3em;
  margin-bottom: 5px;
`;

const MemberRole = styled.p`
  font-size: 0.95em;
  color: ${Colors.textMedium};
  margin-bottom: 10px;
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
`;

// --- Componente QuemSomosPage ---
function QuemSomosPage() {
  return (
    <PageContainer>
      <Section>
        <Title>
          {/* USANDO SEU FAVICON.PNG AQUI */}
        <TitleLogo src="/assets/novo-logo.png" alt="Logo do Projeto Alfabetização" />
          Sobre o Projeto Alfabetização
        </Title>
        <Paragraph>
          Este é um trabalho desenvolvido para a **UNA Cristiano Machado**, com o foco em auxiliar na alfabetização de adultos, utilizando jogos interativos e métodos inclusivos.
        </Paragraph>
        <Paragraph>
          Nosso projeto se inspira profundamente nos princípios de **Paulo Freire**, buscando uma alfabetização que vá além da mera decodificação de palavras. Acreditamos na conexão do aprendizado à realidade e às experiências de vida dos alunos. Nossa abordagem se baseia na utilização de **temas geradores** relevantes para o cotidiano dos adultos, promovendo o diálogo, a reflexão crítica e a valorização do seu conhecimento prévio.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Nosso Objetivo</Subtitle>
        <Paragraph>
          Desenvolver uma plataforma acessível e intuitiva que ensine leitura e escrita para pessoas analfabetas ou semianalfabetas. Nossos principais focos são:
        </Paragraph>
        <List>
          <ListItem>
            <FaCheckCircle /> **Facilidade de uso:** Uma interface simples e clara para todos os usuários.
          </ListItem>
          <ListItem>
            <FaCheckCircle /> **Acessibilidade:** Suporte a áudio e recursos visuais para facilitar o aprendizado.
          </ListItem>
          <ListItem>
            <FaCheckCircle /> **Aprendizado interativo:** Através de jogos, quizzes e atividades práticas que tornam o processo divertido.
          </ListItem>
          <ListItem>
            <FaCheckCircle /> **Comunidade:** Criação de um espaço de troca e apoio mútuo entre pessoas na mesma jornada de aprendizado.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Funcionalidades Principais</Subtitle>
        <List>
          <ListItem>
            <IoGameController /> **Jogos e atividades educativas:** Incluindo Caça-palavras temáticos, jogos da memória com palavras e imagens, quizzes narrativos sobre situações do cotidiano, e atividades de pareamento palavra-imagem e palavra-definição.
          </ListItem>
          <ListItem>
            <IoVolumeHigh /> **Áudio para auxílio na leitura:** Pronúncia de palavras, narração de textos e instruções das atividades.
          </ListItem>
          <ListItem>
            <FaUsers /> **Conexão entre usuários:** Fóruns de discussão sobre os temas geradores, e espaços para compartilhar produções textuais e experiências de aprendizado.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Tecnologias Utilizadas</Subtitle>
        <Paragraph>
          Nosso projeto é construído com as seguintes tecnologias robustas:
        </Paragraph>
        <TechList>
          <TechItem><FaLaptopCode /> HTML</TechItem>
          <TechItem><FaLaptopCode /> CSS</TechItem>
          <TechItem><FaLaptopCode /> JavaScript</TechItem>
          <TechItem><FaLaptopCode /> React (Frontend)</TechItem>
          <TechItem><FaLaptopCode /> PHP (Backend)</TechItem>
          <TechItem><FaDatabase /> MySQL (Banco de Dados)</TechItem>
        </TechList>
      </Section>

      <Section>
        <Subtitle>Nossa Equipe e Colaboradores</Subtitle>
        <TeamGrid>
          <TeamMemberCard>
            <MemberName>Gabriel Freitas</MemberName>
            <MemberRole>Desenvolvedor Frontend</MemberRole>
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Emerson Pedrosa</MemberName>
            <MemberRole>Desenvolvedor Backend</MemberRole>
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Gabriel Haziel</MemberName>
            <MemberRole>Participante</MemberRole>
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Artur Camargos</MemberName>
            <MemberRole>Participante</MemberRole>
          </TeamMemberCard>
          <TeamMemberCard>
            <MemberName>Bernardo Araujo</MemberName>
            <MemberRole>Participante</MemberRole>
          </TeamMemberCard>
        </TeamGrid>
      </Section>
    </PageContainer>
  );
}

export default QuemSomosPage;