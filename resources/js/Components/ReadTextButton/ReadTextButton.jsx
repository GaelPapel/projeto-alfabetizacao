// resources/js/Components/ReadTextButton/ReadTextButton.jsx
import React from 'react';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import './ReadTextButton.css';
// Importe os ícones que deseja usar. Ex: MdVolumeUp, MdPause, MdStop do Material Design Icons
import { MdVolumeUp, MdPause, MdStop } from 'react-icons/md';

const ReadTextButton = ({ text, lang = 'pt-BR' }) => {
  const { speak, pause, resume, stop, isSpeaking, isPaused } = useTextToSpeech();

  const handlePlayClick = () => {
    if (isPaused) {
      resume();
    } else if (isSpeaking) {
      pause();
    } else {
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
        <span className="icon">
          {isSpeaking && !isPaused ? (
            <MdPause /> // Ícone de pausa
          ) : (
            <MdVolumeUp /> // Ícone de som
          )}
        </span>
      </button>
      {(isSpeaking || isPaused) && ( 
        <button
          onClick={handleStopClick}
          className="read-text-stop-button"
          title="Parar leitura"
          aria-label="Parar leitura"
        >
          <span className="icon">
            <MdStop /> {/* Ícone de parar */}
          </span>
        </button>
      )}
    </div>
  );
};

export default ReadTextButton;