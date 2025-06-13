// src/components/Sidebar/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaBook, FaPuzzlePiece, FaQuestion, FaCog } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

// --- Componentes Estilizados (Styled Components) ---
const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #222222; /* ALTERADO: Fundo preto escuro */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.4); /* Sombra mais escura */
  color: white; /* Cor do texto padrão para branco */

  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
`;

const SidebarHeader = styled.h2`
  font-size: 1.8em;
  margin-bottom: 30px;
  color: #eeeeee; /* ALTERADO: Branco quase puro para o título */
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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 90%;
  padding: 15px 20px;
  background-color: #333333; /* ALTERADO: Fundo dos botões em cinza escuro */
  color: white; /* Texto dos botões em branco */
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: left;
  margin: 0 auto;
  text-decoration: none;

  &:hover {
    background-color: #555555; /* ALTERADO: Cinza um pouco mais claro no hover */
    transform: translateX(5px);
  }

  &.active {
    background-color: #000000; /* ALTERADO: Fundo preto puro para o item ativo */
    font-weight: bold;
  }
`;

const IconWrapper = styled.span`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <SidebarContainer>
      <SidebarHeader> Menu </SidebarHeader>
      <NavList>
        <NavItem>
          <StyledLink
            to="/"
            className={isActive('/') || isActive('/home') ? 'active' : ''} // Adicionado /home como ativo para a página inicial
          >
            <IconWrapper><FaHome /></IconWrapper>
            Página Inicial
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/palavras"
            className={isActive('/palavras') ? 'active' : ''}
          >
            <IconWrapper><FaBook /></IconWrapper>
            Palavras do Dia
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/jogos"
            className={isActive('/jogos') ? 'active' : ''}
          >
            <IconWrapper><FaPuzzlePiece /></IconWrapper>
            Jogos Educativos
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/forum"
            className={isActive('/forum') ? 'active' : ''}
          >
            <IconWrapper><AiFillMessage /></IconWrapper>
            Forum
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/quem_somos"
            className={isActive('/quem_somos') ? 'active' : ''}
          >
            <IconWrapper><FaQuestion /></IconWrapper>
            Quem somos
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            to="/config"
            className={isActive('/config') ? 'active' : ''}
          >
            <IconWrapper><FaCog /></IconWrapper>
            Configurações
          </StyledLink>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
}

export default Sidebar;