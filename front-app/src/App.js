// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
// import Test from './components/Test'; // Removido por enquanto para simplificar.

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigation = (page) => {
    setActivePage(page);
    alert(`Navegando para: ${page}`);
  };

  return (
    <div className="App">
      <Sidebar activeItem={activePage} onNavigate={handleNavigation} />

      <main className="App-main-content">
        <header className="App-header">
          <h1>Bem-vindo ao Projeto Alfabetização!</h1>
          <p>Esta é a sua página inicial.</p>
        </header>

        <section className="App-content">
          {activePage === 'home' && (
            <>
              <p>Aqui você verá o conteúdo da Página Inicial.</p>
              <p>blablablablabla</p>
              {/* <Test /> */}
            </>
          )}
          {activePage === 'palavras' && (
            <>
              <p>Bem-vindo à seção de Palavras do Dia!</p>
              <p>Aqui teremos palavras.</p>
            </>
          )}
          {activePage === 'jogos' && (
            <>
              <p>Divirta-se com os Jogos Educativos!</p>
              <p>Ainda nao sei quais jogos terá.</p>
            </>
          )}
          {activePage === 'forum' && (
            <>
              <h2>Bem-vindo ao Fórum!</h2>
              <p>Espaço para discussões, dúvidas e compartilhamento de ideias.</p>
            </>
          )}
          {activePage === 'quem_somos' && (
            <>
              <h2>Sobre nós - Quem somos</h2>
              <p>Conheça mais sobre o Projeto Alfabetização e nossa missão.</p>
            </>
          )}
          {activePage === 'config' && (
            <>
              <p>Configurações do aplicativo.</p>
              <p>Ajuste suas preferências aqui.</p>
            </> 
          )}

          
        </section>

        <footer className="App-footer">
          <p>&copy; 2025 Projeto Alfabetização.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;