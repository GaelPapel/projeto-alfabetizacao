// src/hooks/useTextToSpeech.js
import { useState, useEffect, useRef } from 'react';

const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef(null); // Ref para o objeto SpeechSynthesisUtterance

  // Inicializa o SpeechSynthesisUtterance
  const initSpeechSynthesis = (text, lang = 'pt-BR') => {
    if (!('speechSynthesis' in window)) {
      console.error('API de Síntese de Fala não suportada neste navegador.');
      return null;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // Define o idioma, crucial para a pronúncia correta

    // Eventos para controlar o estado da reprodução
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = (event) => {
      console.error('Erro na síntese de fala:', event.error);
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance; // Armazena a instância para controle
    return utterance;
  };

  // Função para ler o texto
  const speak = (text, lang = 'pt-BR') => {
    // Cancela qualquer fala anterior antes de iniciar uma nova
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }

    const utterance = initSpeechSynthesis(text, lang);
    if (utterance) {
      window.speechSynthesis.speak(utterance);
    }
  };

  // Função para pausar a leitura
  const pause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  // Função para retomar a leitura
  const resume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  // Função para parar a leitura completamente
  const stop = () => {
    if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  // Efeito de limpeza ao desmontar o componente
  useEffect(() => {
    return () => {
      if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { speak, pause, resume, stop, isSpeaking, isPaused };
};

export default useTextToSpeech;