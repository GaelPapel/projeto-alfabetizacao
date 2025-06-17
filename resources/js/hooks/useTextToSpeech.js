// resources/js/hooks/useTextToSpeech.js

import { useState, useEffect, useRef, useCallback } from 'react';

const useTextToSpeech = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    // Usamos useRef para o SpeechSynthesis, que é a interface principal
    // e o SpeechSynthesisUtterance, que representa o texto a ser falado.
    const synthRef = useRef(null);
    const utteranceRef = useRef(null); // Para manter a referência da Utterance atual

    // Inicializa o SpeechSynthesis API uma vez quando o componente é montado
    useEffect(() => {
        if (window.speechSynthesis) {
            synthRef.current = window.speechSynthesis;

            // Pré-carrega vozes. É bom fazer isso no início, pois getVoices() pode ser assíncrono
            // ou retornar uma lista vazia na primeira vez em alguns navegadores.
            // Adiciona um listener para quando as vozes estiverem disponíveis.
            synthRef.current.onvoiceschanged = () => {
                // console.log("Vozes carregadas ou alteradas.");
            };

        } else {
            console.warn("API de Síntese de Fala não suportada neste navegador.");
        }
    }, []);

    const speak = useCallback((text, lang = 'pt-BR', volume = 1, rate = 1, pitch = 1) => {
        if (!synthRef.current) {
            console.warn("SpeechSynthesis não está disponível.");
            return;
        }

        // Cancela qualquer fala anterior para iniciar uma nova
        if (synthRef.current.speaking || synthRef.current.paused) {
            synthRef.current.cancel();
        }

        // Cria uma nova instância de SpeechSynthesisUtterance para o texto atual
        const utterance = new SpeechSynthesisUtterance(text);
        utteranceRef.current = utterance; // Armazena a referência para o Utterance atual

        utterance.lang = lang;
        utterance.volume = volume;
        utterance.rate = rate;
        utterance.pitch = pitch;

        // Encontra uma voz em português se disponível
        const voices = synthRef.current.getVoices();
        const portugueseVoice = voices.find(voice => voice.lang === 'pt-BR' || voice.lang === 'pt_BR'); // Verifica ambas as variações
        if (portugueseVoice) {
            utterance.voice = portugueseVoice;
        } else {
            console.warn("Nenhuma voz em português (pt-BR) encontrada. Usando a voz padrão do sistema.");
        }

        // Define os callbacks para os eventos
        utterance.onstart = () => {
            setIsSpeaking(true);
            setIsPaused(false);
            // console.log("Fala iniciada");
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            // console.log("Fala finalizada");
        };

        utterance.onerror = (event) => {
            console.error('Erro na síntese de fala:', event.error);
            setIsSpeaking(false);
            setIsPaused(false);
        };

        // Inicia a fala
        synthRef.current.speak(utterance);

    }, []); // Dependências: nenhuma para que a função speak não seja recriada desnecessariamente

    const pause = useCallback(() => {
        if (synthRef.current && synthRef.current.speaking && !synthRef.current.paused) {
            synthRef.current.pause();
            setIsPaused(true);
            // console.log("Fala pausada");
        }
    }, []);

    const resume = useCallback(() => {
        if (synthRef.current && synthRef.current.paused) {
            synthRef.current.resume();
            setIsPaused(false);
            // console.log("Fala resumida");
        }
    }, []);

    const stop = useCallback(() => {
        if (synthRef.current && (synthRef.current.speaking || synthRef.current.paused)) {
            synthRef.current.cancel(); // Cancela todas as SpeechSynthesisUtterances na fila
            setIsSpeaking(false);
            setIsPaused(false);
            // console.log("Fala parada");
        }
    }, []);

    // Efeito de limpeza: garante que qualquer fala ativa seja cancelada ao desmontar o componente que usa o hook
    useEffect(() => {
        return () => {
            if (synthRef.current && (synthRef.current.speaking || synthRef.current.paused)) {
                synthRef.current.cancel();
                // console.log("Fala cancelada na desmontagem do componente");
            }
        };
    }, []);

    return { speak, pause, resume, stop, isSpeaking, isPaused };
};

export default useTextToSpeech;