// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@/Pages/App.css' 
import Sidebar from '@/Components/Sidebar/Sidebar';
import HomePage from './pages/HomePage';
import HomePage from '@/Pages/App/HomePage'
import HomePage from './HomePage';

// import PalavrasPage from './pages/PalavrasPage';
// import JogosPage from './pages/JogosPage';
// import ForumPage from './pages/ForumPage';
// import QuemSomosPage from './pages/QuemSomosPage';
// import ConfigPage from './pages/ConfigPage';
// import MemoriaGame from './pages/gamepage/MemoriaGame';
// import PalavraGame from './pages/gamepage/PalavraGame'; // Importando PalavraGame

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <main className="App-main-content">
          <section className="App-content">
            <Routes>
              {/* Rotas principais */}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/palavras" element={<PalavrasPage />} />
              <Route path="/jogos" element={<JogosPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/quem_somos" element={<QuemSomosPage />} />
              <Route path="/config" element={<ConfigPage />} />

              {/* --- ADICIONE ESTAS DUAS ROTAS PARA OS JOGOS ESPECÍFICOS --- */}
              <Route path="/jogos/memoria" element={<MemoriaGame />} />
              <Route path="/jogos/montapalavra" element={<PalavraGame />} /> 
              <Route path="*" element={<h2>Página Não Encontrada (404)</h2>} />
            </Routes>
          </section>

          <footer className="App-footer">
            <p>&copy; 2025 Projeto Alfabetização.</p>
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;