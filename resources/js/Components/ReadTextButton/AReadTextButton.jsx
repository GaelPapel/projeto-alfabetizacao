// src/components/ReadTextButton/ReadTextButton.js
import React from 'react';
import useTextToSpeech from '../../hooks/useTextToSpeech'; // Caminho para o hook
import './ReadTextButton.css'; // Estilos para o botão

const ReadTextButton = ({ text, lang = 'pt-BR' }) => {
  const { speak, pause, resume, stop, isSpeaking, isPaused } = useTextToSpeech();

  const handlePlayClick = () => {
    if (isPaused) {
      resume();
    } else if (isSpeaking) {
      // Se já estiver falando, pausa a leitura atual para retomar mais tarde
      pause(); 
    } else {
      // Se não estiver falando, inicia a leitura
      speak(text, lang);
    }
  };

  const handleStopClick = () => {
    stop();
  };

  return (
    <div className="read-text-button-container">
      <button
        onClick={handlePlayClick}
        className={`read-text-button ${isSpeaking && !isPaused ? 'speaking' : ''} ${isPaused ? 'paused' : ''}`}
        title={isPaused ? "Retomar leitura" : (isSpeaking ? "Pausar leitura" : "Ouvir texto")}
        aria-label={isPaused ? "Retomar leitura" : (isSpeaking ? "Pausar leitura" : "Ouvir texto")}
      >
        {isSpeaking && !isPaused ? (
          <span className="icon">❚❚</span> // Ícone de pausa
        ) : (
          <span className="icon" style={{ color: 'green' }}>🔊</span> // Ícone de som verde
        )}
      </button>
      {/* Mostra o botão de parar apenas se estiver falando ou pausado */}
      {(isSpeaking || isPaused) && ( 
        <button
          onClick={handleStopClick}
          className="read-text-stop-button"
          title="Parar leitura"
          aria-label="Parar leitura"
        >
          <span className="icon">■</span> {/* Ícone de parar */}
        </button>
      )}
    </div>
  );
};

export default ReadTextButton;