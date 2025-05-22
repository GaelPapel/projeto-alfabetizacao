
// src/components/Sidebar/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBook, FaPuzzlePiece, FaQuestion,} from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai'; // Já importado, perfeito!

// --- Componentes Estilizados (Styled Components) ---
const SidebarContainer = styled.aside`
  width: 250px;
  background-color: rgb(26, 26, 26); /* Cor de fundo amarela/laranja, como você definiu */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  color: white;
`;

const SidebarHeader = styled.h2`
  font-size: 1.8em;
  margin-bottom: 30px;
  color: #ecf0f1;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
  width: 100%;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 90%;
  padding: 15px 20px;
  background-color: rgb(49, 49, 49); /* Cor de fundo do botão, como você definiu */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: left;
  margin: 0 auto;

  &:hover {
    background-color: rgb(168, 168, 168); /* Cor de fundo ao passar o mouse, como você definiu */
    transform: translateX(5px);
  }

  &.active {
    background-color: rgb(112, 112, 112); /* Cor para o item ativo, como você definiu */
    font-weight: bold;
  }
`;

const IconWrapper = styled.span`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- Componente Sidebar Principal ---
function Sidebar({ activeItem, onNavigate }) {
  return (
    <SidebarContainer>
      <SidebarHeader> Menu </SidebarHeader>
      <NavList>
        <NavItem>
          <NavButton
            className={activeItem === 'home' ? 'active' : ''}
            onClick={() => onNavigate('home')}
          >
            <IconWrapper><FaHome /></IconWrapper>
            Página Inicial
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            className={activeItem === 'palavras' ? 'active' : ''}
            onClick={() => onNavigate('palavras')}
          >
            <IconWrapper><FaBook /></IconWrapper>
            Palavras do Dia
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            className={activeItem === 'jogos' ? 'active' : ''}
            onClick={() => onNavigate('jogos')}
          >
            <IconWrapper><FaPuzzlePiece /></IconWrapper>
            Jogos Educativos
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton
            className={activeItem === 'forum' ? 'active' : ''} // Este é o item 'forum'
            onClick={() => onNavigate('forum')}
          >
            <IconWrapper><AiFillMessage /></IconWrapper> {/* O ícone AiFillMessage para o Fórum */}
            Forum
          </NavButton>
        </NavItem>
        {/* CORREÇÃO AQUI: Este NavItem deve ser um item irmão, não filho do anterior */}
        <NavItem>
          <NavButton
            className={activeItem === 'quem_somos' ? 'active' : ''}
            onClick={() => onNavigate('quem_somos')}
          >
            <IconWrapper><FaQuestion /></IconWrapper> {/* Use FaQuestion para 'Quem somos' */}
            Quem somos
          </NavButton>
        </NavItem>
        {/* Adicione mais itens aqui */}
      </NavList>
    </SidebarContainer>
  );
}

export default Sidebar;