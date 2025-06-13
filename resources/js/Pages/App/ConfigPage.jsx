// src/pages/ConfigPage.js
import React from 'react';
import styled from 'styled-components';
// Importe um ícone para as configurações
import { FaCog } from 'react-icons/fa'; // Ícone de engrenagem, muito comum para configurações
// import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton'; // IMPORTADO: ReadTextButton
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton';
// --- PALETA DE CORES (usando as já definidas no seu projeto para consistência) ---
const Colors = {
  primary: '#8B4513',       // Marrom Chocolate (títulos principais)
  secondary: '#D2691E',     // Laranja Terracota (subtítulos)
  accent1: '#4CAF50',      // Verde vibrante para ícones/destaques (se quiser usar)
  textDark: '#333333',      // Texto escuro
  textMedium: '#555555',    // Texto médio
  bgLight: '#F8F9FA',      // Fundo leve
  bgWhite: '#FFFFFF',      // Fundo branco de seções
};

// --- Styled Components para a ConfigPage ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px 30px;
  background-color: ${Colors.bgLight};
  border-radius: 12px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 95%;
  margin: 40px auto;
  color: ${Colors.textDark};
`;

const Section = styled.section`
  text-align: center;
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

  & svg { /* Estilos para o ícone */
    font-size: 0.9em; /* Ajusta o tamanho do ícone em relação ao texto */
    color: ${Colors.secondary}; /* Usa a cor secundária para o ícone */
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.9;
  color: ${Colors.textDark};
  margin-bottom: 20px;
  display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
  align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
  flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
  justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
`;

const LinkGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLink = styled.a`
  font-size: 1.1em;
  color: ${Colors.secondary};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  /* ADICIONADO: para permitir que o ReadTextButton seja inserido ao lado se necessário */
  display: flex; 
  align-items: center;
  justify-content: center; /* Centraliza o link e o botão */
  flex-wrap: wrap; 

  &:hover {
    color: ${Colors.primary};
    text-decoration: underline;
  }
`;

// --- Componente ConfigPage ---
function ConfigPage() {
  const introText1 = "Bem-vindo à página de Configurações! Aqui você poderá personalizar sua experiência com o Projeto Alfabetização.";
  const introText2 = "As opções de configuração, como preferências de áudio, tema visual (modo escuro/claro) e tamanho da fonte, serão implementadas em futuras atualizações.";
  const privacyPolicyText = "Política de Privacidade";
  const termsOfUseText = "Termos de Uso";

  return (
    <PageContainer>
      <Section>
        <Title>
          <FaCog /> {/* Adicionando o ícone de engrenagem aqui */}
          Configurações
          <ReadTextButton text="Configurações" /> {/* ADICIONADO: Botão de leitura para o título */}
        </Title>
        <Paragraph>
          {introText1}
          <ReadTextButton text={introText1} /> {/* ADICIONADO: Botão de leitura para o primeiro parágrafo */}
        </Paragraph>
        <Paragraph>
          {introText2}
          <ReadTextButton text={introText2} /> {/* ADICIONADO: Botão de leitura para o segundo parágrafo */}
        </Paragraph>

        <LinkGroup>
          <StyledLink href="/politica-de-privacidade">
            {privacyPolicyText}
            
          </StyledLink>
          <StyledLink href="/termos-de-uso">
            {termsOfUseText}
            
          </StyledLink>
        </LinkGroup>
      </Section>
    </PageContainer>
  );
}

export default ConfigPage;