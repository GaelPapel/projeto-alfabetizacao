// resources/js/Components/Sidebar/Sidebar.jsx
import React from 'react';
// REMOVA: import styled from 'styled-components'; // JÁ REMOVIDO ANTES
import { FaHome, FaBook, FaPuzzlePiece, FaQuestion, FaCog } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
// REMOVA: import { Link, useLocation } from 'react-router-dom';

// Importe Link e usePage do Inertia.js
import { Link, usePage } from '@inertiajs/react'; // <<<< NOVA LINHA

// Importe o CSS Module
import styles from './Sidebar.module.css';

function Sidebar() {
  // Use usePage do Inertia.js para obter a URL atual
  const { url } = usePage(); // <<<< ALTERADO

  // Ajuste a lógica para verificar a URL atual do Inertia
  const isActive = (path) => url === path; // <<<< ALTERADO

  return (
    <aside className={styles.sidebarContainer}>
      <h2 className={styles.sidebarHeader}> Menu </h2>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          {/* Use o Link do Inertia.js */}
          <Link
            href="/" // Use href em vez de to
            className={`${styles.styledLink} ${isActive('/') ? styles.active : ''}`}
          >
            <span className={styles.iconWrapper}><FaHome /></span>
            Página Inicial
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/palavras" className={`${styles.styledLink} ${isActive('/palavras') ? styles.active : ''}`}>
            <span className={styles.iconWrapper}><FaBook /></span>
            Palavras do Dia
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/jogos" className={`${styles.styledLink} ${isActive('/jogos') ? styles.active : ''}`}>
            <span className={styles.iconWrapper}><FaPuzzlePiece /></span>
            Jogos Educativos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/forum" className={`${styles.styledLink} ${isActive('/forum') ? styles.active : ''}`}>
            <span className={styles.iconWrapper}><AiFillMessage /></span>
            Forum
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/quem_somos" className={`${styles.styledLink} ${isActive('/quem_somos') ? styles.active : ''}`}>
            <span className={styles.iconWrapper}><FaQuestion /></span>
            Quem somos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/config" className={`${styles.styledLink} ${isActive('/config') ? styles.active : ''}`}>
            <span className={styles.iconWrapper}><FaCog /></span>
            Configurações
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;