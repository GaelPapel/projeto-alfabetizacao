// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@/Pages/App.css' 
import Sidebar from '@/Components/Sidebar/Sidebar';
import HomePage  from './App/HomePage';
import PalavraGame from './gamepage/PalavraGame';
import PalavrasPage from './App/PalavrasPage';
import JogosPage from './App/JogosPage';
import ForumPage from './App/ForumPage';
import QuemSomosPage from './App/QuemSomosPage';
import ConfigPage from './App/ConfigPage';
import MemoriaGame from './gamepage/MemoriaGame';


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