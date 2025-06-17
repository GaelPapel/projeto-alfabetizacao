// resources/js/Pages/Games/MonteAPalavra/MonteAPalavraGame.jsx

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FaPlay, FaRedo, FaCheck, FaTimes, FaVolumeUp } from 'react-icons/fa';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton.jsx';
import styles from './MonteAPalavraGame.module.css';
import AppLayout from '@/Layouts/AppLayout';

// ... (initialGameData e shuffleArray permanecem os mesmos) ...
const initialGameData = [
    { id: 1, palavra: "CASA", imagem: "/assets/images/casa.png", silabas: ["C", "A", "S", "A"] },
    { id: 2, palavra: "BOLA", imagem: "/assets/images/bola.png", silabas: ["L", "A", "B", "O"] },
    { id: 3, palavra: "SAPO", imagem: "/assets/images/sapo.png", silabas: ["P", "O", "S", "A"] },
    { id: 4, palavra: "ARVORE", imagem: "/assets/images/arvore.png", silabas: ["V", "O", "R", "E", "A", "R"] },
    { id: 9, palavra: "PEIXE", imagem: "/assets/images/peixe.png", silabas: ["E", "I", "X", "P", "E"] },
    { id: 11, palavra: "CACHORRO", imagem: "/assets/images/cachorro.png", silabas: ["C", "A", "C", "H", "O", "R", "R", "O"] },
    { id: 12, palavra: "GATO", imagem: "/assets/images/gato.png", silabas: ["T", "G", "A", "O"] },
    { id: 13, palavra: "CADEIRA", imagem: "/assets/images/cadeira.png", silabas: ["I", "R", "A", "C", "A", "D", "E"] },
    { id: 14, palavra: "CAMA", imagem: "/assets/images/cama.png", silabas: ["M", "A", "C", "A"] },
    { id: 15, palavra: "ARMÁRIO", imagem: "/assets/images/armario.png", silabas: ["M", "Á", "R", "I", "O", "A", "R"] },
    { id: 16, palavra: "CELULAR", imagem: "/assets/images/celular.png", silabas: ["L", "U", "C", "E", "L", "A", "R"] },
    { id: 17, palavra: "CHUVA", imagem: "/assets/images/chuva.png", silabas: ["V", "A", "C", "H", "U"] },
    { id: 18, palavra: "DINHEIRO", imagem: "/assets/images/dinheiro.png", silabas: ["D", "I", "N", "H", "E", "I", "R", "O"] },
    { id: 19, palavra: "GELADEIRA", imagem: "/assets/images/geladeira.png", silabas: ["G", "E", "L", "A", "D", "E", "I", "R", "A"] },
    { id: 20, palavra: "PANELA", imagem: "/assets/images/panela.png", silabas: ["P", "A", "N", "E", "L", "A"] },
    { id: 21, palavra: "PATO", imagem: "/assets/images/pato.png", silabas: ["T", "O", "A", "P"] },
];
const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};


function MonteAPalavraGame() {
    // ... (restante do seu state e hooks permanecem os mesmos) ...
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentWordData, setCurrentWordData] = useState(null);
    const [availableSyllables, setAvailableSyllables] = useState([]);
    const [userResponseArray, setUserResponseArray] = useState([]);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackType, setFeedbackType] = useState(null);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [gameFinished, setGameFinished] = useState(false);

    const { speak, stop } = useTextToSpeech();

    const fetchGameData = useCallback(async () => {
        setIsLoading(true);
        setFeedbackMessage('');
        setFeedbackType(null);
        setUserResponseArray([]);
        setAvailableSyllables([]);

        try {
            setAllQuestions(shuffleArray(initialGameData));
        } catch (error) {
            console.error('Erro ao buscar dados do jogo:', error);
            setFeedbackMessage('Erro ao carregar o jogo. Tente novamente mais tarde.');
            setAllQuestions([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGameData();
    }, [fetchGameData]);

    useEffect(() => {
        if (allQuestions.length > 0) {
            if (currentQuestionIndex < allQuestions.length) {
                const current = allQuestions[currentQuestionIndex];
                setCurrentWordData(current);
                setAvailableSyllables(shuffleArray(current.silabas.map(s => ({ value: s, used: false }))));
                setUserResponseArray(Array(current.palavra.length).fill(''));
                setFeedbackMessage('');
                setFeedbackType(null);
                stop();
            } else {
                setGameFinished(true);
                stop();
            }
        } else if (!isLoading && allQuestions.length === 0) {
            setFeedbackMessage('Nenhuma palavra disponível para o jogo.');
            setCurrentWordData(null);
        }
    }, [currentQuestionIndex, allQuestions, isLoading, stop]);

    const handleSyllableClick = (syllableValue, originalIndexInShuffled) => {
        const emptyIndex = userResponseArray.indexOf('');
        if (emptyIndex !== -1) {
            const newUserResponseArray = [...userResponseArray];
            newUserResponseArray[emptyIndex] = { syllable: syllableValue, originalIndex: originalIndexInShuffled };
            setUserResponseArray(newUserResponseArray);

            setAvailableSyllables(prev =>
                prev.map((s, idx) => idx === originalIndexInShuffled ? { ...s, used: true } : s)
            );
        }
    };

    const handleRemoveSyllable = (indexToRemove) => {
        const syllableRemoved = userResponseArray[indexToRemove];
        if (syllableRemoved) {
            const newUserResponseArray = [...userResponseArray];
            newUserResponseArray[indexToRemove] = '';

            setAvailableSyllables(prev =>
                prev.map((s, idx) => idx === syllableRemoved.originalIndex ? { ...s, used: false } : s)
            );
            // Reorganiza o array para preencher os vazios se uma sílaba do meio for removida
            const filtered = newUserResponseArray.filter(item => item !== '');
            setUserResponseArray([...filtered, ...Array(newUserResponseArray.length - filtered.length).fill('')]);
        }
    };

    const verificarResposta = () => {
        stop();

        if (!currentWordData) return;

        const correctWord = currentWordData.palavra.toUpperCase();
        const userAnswer = userResponseArray.map(item => item ? item.syllable : '').join('');

        if (userAnswer === correctWord) {
            setFeedbackMessage('✅ Parabéns! Você montou a palavra!');
            setFeedbackType('correct');
            setScore(prevScore => prevScore + 1);
            speak('Parabéns! ' + currentWordData.palavra, 'pt-BR');

            setTimeout(() => {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            }, 2000);
        } else {
            setFeedbackMessage(`❌ Que pena! Tente novamente.`);
            setFeedbackType('incorrect');
            speak('Que pena! Tente novamente.', 'pt-BR');
        }
    };

    const resetGame = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameFinished(false);
        fetchGameData();
    };

    if (isLoading) {
        return (
            <AppLayout>
                <div className={styles.gameContainer}>
                    <div className={`${styles.gameCard} ${styles.loadingScreen}`}>
                        <p className={styles.gameInstruction}>Carregando jogo, por favor aguarde...</p>
                    </div>
                </div>
            </AppLayout>
        );
    }

    if (gameFinished) {
        return (
            <AppLayout>
                <div className={styles.gameContainer}>
                    <div className={`${styles.gameCard} ${styles.endGameScreen}`}>
                        <h2>Fim do Jogo!</h2>
                        <p>Sua pontuação final: <strong className={styles.scoreDisplay}>{score}</strong> de <strong className={styles.scoreDisplay}>{allQuestions.length}</strong></p>
                        <button onClick={resetGame} className={`${styles.actionButton} ${styles.primary}`}>
                            <FaRedo /> Jogar Novamente
                        </button>
                    </div>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout>
            <div className={styles.gameContainer}>
                {/* O header do jogo AGORA está DENTRO do gameCard */}
                <div className={`${styles.gameCard} ${feedbackType === 'incorrect' ? styles.gameCardShake : ''}`}>
                    <header className={styles.header}> {/* Este header foi movido para cá */}
                        
                        <div className={styles.scoreDisplay}>Pontos: {score}</div>
                    </header>

                    <p className={styles.gameInstruction}>Observe a imagem e monte a palavra!</p>

                    <div className={styles.questionSection}>
                        {currentWordData && currentWordData.imagem && (
                            <img
                                src={currentWordData.imagem}
                                alt="Ilustração da palavra"
                                className={styles.questionImage}
                                onClick={() => speak(currentWordData.palavra, 'pt-BR')}
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                        <ReadTextButton text={currentWordData ? currentWordData.palavra : ''} lang="pt-BR" />
                    </div>

                    <div className={styles.targetWordDisplay}>
                        {Array.from({ length: currentWordData ? currentWordData.palavra.length : 0 }).map((_, index) => {
                            const item = userResponseArray[index];
                            return (
                                <span
                                    key={index}
                                    className={`${styles.targetWordLetter} ${item ? styles.filled : ''}`}
                                    onClick={() => handleRemoveSyllable(index)}
                                    style={{ cursor: item ? 'pointer' : 'default' }}
                                >
                                    {item ? item.syllable : ''}
                                </span>
                            );
                        })}
                    </div>

                    <div className={styles.syllableBank}>
                        {availableSyllables.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleSyllableClick(item.value, index)}
                                className={`${styles.syllableChip} ${item.used ? styles.used : ''}`}
                                disabled={item.used || feedbackType === 'correct'}
                            >
                                {item.value}
                            </button>
                        ))}
                    </div>

                    <div className={styles.buttonsContainer}>
                        <button
                            onClick={verificarResposta}
                            className={`${styles.actionButton} ${styles.success}`}
                            disabled={userResponseArray.some(item => !item) || feedbackType === 'correct'}
                        >
                            <FaCheck /> Verificar
                        </button>
                        <button
                            onClick={() => {
                                setUserResponseArray(Array(currentWordData.palavra.length).fill(''));
                                setAvailableSyllables(prev => prev.map(s => ({ value: s.value, used: false })));
                                setFeedbackMessage('');
                                setFeedbackType(null);
                            }}
                            className={`${styles.actionButton} ${styles.secondary}`}
                        >
                            <FaRedo /> Limpar
                        </button>
                    </div>

                    {feedbackMessage && (
                        <div className={`${styles.feedbackBubble} ${feedbackType === 'correct' ? styles.correct : styles.incorrect}`}>
                            {feedbackType === 'correct' ? '🎉' : '🤔'} {feedbackMessage}
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

export default MonteAPalavraGame;