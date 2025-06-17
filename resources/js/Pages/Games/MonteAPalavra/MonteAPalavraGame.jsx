// resources/js/Pages/Games/MonteAPalavra/MonteAPalavraGame.jsx

import React, { useState, useEffect, useMemo, useCallback } from 'react'; //
// Importe os ícones que deseja usar
import { FaPlay, FaRedo, FaCheck, FaTimes, FaVolumeUp } from 'react-icons/fa'; //
import useTextToSpeech from '@/hooks/useTextToSpeech'; // Reutiliza o hook

// Importe o CSS Module
import styles from './MonteAPalavraGame.module.css'; //

// Importar o AppLayout. Certifique-se que o caminho está correto.
import AppLayout from '@/Layouts/AppLayout'; // <<<<<<<< NOVA LINHA AQUI

// Dados mockados para simular a API.
// A 'silabas' ou 'letrasEmbaralhadas' é crucial aqui.
// Para simplificar, vou usar letras embaralhadas. Se preferir sílabas, adapte.
const initialGameData = [
    { id: 1, palavra: "CASA", imagem: "/assets/images/casa.jpg", silabas: ["C", "A", "S", "A"] }, //
    { id: 2, palavra: "BOLA", imagem: "/assets/images/bola.jpg", silabas: ["L", "A", "B", "O"] }, //
    { id: 3, palavra: "SAPO", imagem: "/assets/images/sapo.jpg", silabas: ["P", "O", "S", "A"] }, //
    { id: 4, palavra: "ARVORE", imagem: "/assets/images/arvore.jpg", silabas: ["V", "O", "R", "E", "A", "R"] }, //
    { id: 5, palavra: "SOL", imagem: "/assets/images/sol.jpg", silabas: ["L", "O", "S"] }, //
    { id: 6, palavra: "FLOR", imagem: "/assets/images/flor.jpg", silabas: ["R", "O", "L", "F"] }, //
    { id: 7, palavra: "LUA", imagem: "/assets/images/lua.jpg", silabas: ["A", "L", "U"] }, //
    { id: 8, palavra: "FOGUETE", imagem: "/assets/images/foguete.jpg", silabas: ["T", "E", "F", "O", "G", "U", "E"] }, //
    { id: 9, palavra: "PEIXE", imagem: "/assets/images/peixe.jpg", silabas: ["E", "I", "X", "P", "E"] }, //
    { id: 10, palavra: "BARCO", imagem: "/assets/images/barco.jpg", silabas: ["C", "O", "B", "A", "R"] }, //
];

// Função utilitária para embaralhar um array (Fisher-Yates shuffle)
const shuffleArray = (array) => { //
    let shuffled = [...array]; // Cria uma cópia para não modificar o original
    for (let i = shuffled.length - 1; i > 0; i--) { //
        const j = Math.floor(Math.random() * (i + 1)); //
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; //
    }
    return shuffled; //
};


function MonteAPalavraGame() { //
    const [allQuestions, setAllQuestions] = useState([]); //
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //
    const [currentWordData, setCurrentWordData] = useState(null); //
    const [availableSyllables, setAvailableSyllables] = useState([]); //
    const [userResponseArray, setUserResponseArray] = useState([]); // Array de sílabas/letras selecionadas
    const [feedbackMessage, setFeedbackMessage] = useState(''); //
    const [feedbackType, setFeedbackType] = useState(null); // 'correct', 'incorrect'
    const [score, setScore] = useState(0); //
    const [isLoading, setIsLoading] = useState(true); //
    const [gameFinished, setGameFinished] = useState(false); //

    const { speak, stop } = useTextToSpeech(); // Apenas speak e stop são necessários aqui para feedback

    // Função para buscar as palavras do jogo (API ou mock)
    const fetchGameData = useCallback(async () => { //
        setIsLoading(true); //
        setFeedbackMessage(''); //
        setFeedbackType(null); //
        setUserResponseArray([]); // Limpa a resposta do usuário
        setAvailableSyllables([]); // Limpa as sílabas disponíveis

        try {
            // Se for usar a API, descomente este bloco:
            // const response = await fetch('/api/jogos/montapalavra');
            // if (!response.ok) {
            //     throw new Error(`Erro HTTP! status: ${response.status}`);
            // }
            // const data = await response.json();
            // setAllQuestions(data); // Assume que a API retorna o formato { id, palavra, imagem, silabas }

            // Usando dados mockados:
            setAllQuestions(initialGameData); //
        } catch (error) { //
            console.error('Erro ao buscar dados do jogo:', error); //
            setFeedbackMessage('Erro ao carregar o jogo. Tente novamente mais tarde.'); //
            setAllQuestions([]); //
        } finally { //
            setIsLoading(false); //
        }
    }, []); //

    // Efeito para carregar os dados na montagem inicial
    useEffect(() => { //
        fetchGameData(); //
    }, [fetchGameData]); //

    // Efeito para configurar a questão atual quando o índice muda
    useEffect(() => { //
        if (allQuestions.length > 0) { //
            if (currentQuestionIndex < allQuestions.length) { //
                const current = allQuestions[currentQuestionIndex]; //
                setCurrentWordData(current); //
                // Embaralha as sílabas/letras apenas uma vez por questão
                setAvailableSyllables(shuffleArray(current.silabas.map(s => ({ value: s, used: false })))); // Mapeia para objeto para controle de uso
                setUserResponseArray(Array(current.palavra.length).fill('')); // Inicializa com espaços vazios
                setFeedbackMessage(''); //
                setFeedbackType(null); //
                stop(); // Para qualquer fala anterior
            } else { //
                setGameFinished(true); // Fim do jogo
                stop(); // Para qualquer fala
            }
        } else if (!isLoading && allQuestions.length === 0) { //
            setFeedbackMessage('Nenhuma palavra disponível para o jogo.'); //
            setCurrentWordData(null); //
        }
    }, [currentQuestionIndex, allQuestions, isLoading, stop]); //


    // Manipulador de clique em uma sílaba/letra
    const handleSyllableClick = (syllableValue, originalIndexInShuffled) => { // Alterei o nome do parâmetro para clareza
        // Encontra o próximo slot vazio na resposta do usuário
        const emptyIndex = userResponseArray.indexOf(''); //
        if (emptyIndex !== -1) { //
            const newUserResponseArray = [...userResponseArray]; //
            newUserResponseArray[emptyIndex] = { syllable: syllableValue, originalIndex: originalIndexInShuffled }; // Armazena a sílaba e seu índice original
            setUserResponseArray(newUserResponseArray); //

            // Marca a sílaba como usada
            setAvailableSyllables(prev => //
                prev.map((s, idx) => idx === originalIndexInShuffled ? { ...s, used: true } : s) //
            );
        }
    };

    // Remove uma sílaba/letra da resposta do usuário e a retorna ao banco
    const handleRemoveSyllable = (indexToRemove) => { //
        const syllableRemoved = userResponseArray[indexToRemove]; //
        if (syllableRemoved) { //
            const newUserResponseArray = [...userResponseArray]; //
            newUserResponseArray[indexToRemove] = ''; // Remove do slot

            // Opção 1: Deixar o slot vazio e permitir preenchimento
            // Opção 2: Deslocar os elementos restantes para a esquerda
            // Para "Monte a Palavra", geralmente deixamos o slot vazio para o usuário preencher novamente.
            // Se você quer que as sílabas se desloquem, você precisaria de uma lógica mais complexa.
            // Por simplicidade, vou manter o slot vazio.
            // (Se você quiser a lógica de deslocamento que estava, posso reverter)
            
            // Revertendo a sílaba ao banco de disponíveis
            setAvailableSyllables(prev => //
                prev.map((s, idx) => idx === syllableRemoved.originalIndex ? { ...s, used: false } : s) //
            );
            // Re-organiza a userResponseArray para mover elementos para a esquerda e manter vazios no final
            const filtered = newUserResponseArray.filter(item => item !== '');
            setUserResponseArray([...filtered, ...Array(newUserResponseArray.length - filtered.length).fill('')]); //
        }
    };


    const verificarResposta = () => { //
        stop(); // Para qualquer fala antes de dar o feedback

        if (!currentWordData) return; //

        const correctWord = currentWordData.palavra.toUpperCase(); //
        const userAnswer = userResponseArray.map(item => item ? item.syllable : '').join(''); //

        if (userAnswer === correctWord) { //
            setFeedbackMessage('✅ Parabéns! Você montou a palavra!'); //
            setFeedbackType('correct'); //
            setScore(prevScore => prevScore + 1); //
            speak('Parabéns! ' + currentWordData.palavra, 'pt-BR'); // Fala a palavra completa

            setTimeout(() => { //
                setCurrentQuestionIndex(prevIndex => prevIndex + 1); // Próxima questão
            }, 2000); //
        } else { //
            setFeedbackMessage(`❌ Que pena! Tente novamente.`); //
            setFeedbackType('incorrect'); //
            speak('Que pena! Tente novamente.', 'pt-BR'); // Feedback de erro
        }
    };

    const resetGame = () => { //
        setCurrentQuestionIndex(0); //
        setScore(0); //
        setGameFinished(false); //
        fetchGameData(); // Reinicia o jogo buscando os dados novamente
    };

    // Renderiza o componente
    if (isLoading) { //
        return (
            <AppLayout> {/* <<<<<<<< ADIÇÃO DO LAYOUT AQUI */}
                <div className={styles.gameContainer}>
                    <div className={`${styles.gameCard} ${styles.loadingScreen}`}>
                        <p className={styles.gameInstruction}>Carregando jogo, por favor aguarde...</p>
                        {/* Pode adicionar um spinner aqui se quiser */}
                    </div>
                    {/* O footer do AppLayout já cuidará do rodapé */}
                </div>
            </AppLayout>
        );
    }

    if (gameFinished) { //
        return (
            <AppLayout> {/* <<<<<<<< ADIÇÃO DO LAYOUT AQUI */}
                <div className={styles.gameContainer}>
                    <div className={`${styles.gameCard} ${styles.endGameScreen}`}>
                        <h2>🎉 Fim do Jogo! 🎉</h2>
                        <p>Sua pontuação final: <strong className={styles.scoreDisplay}>{score}</strong> de <strong className={styles.scoreDisplay}>{allQuestions.length}</strong></p>
                        <button onClick={resetGame} className={`${styles.actionButton} ${styles.primary}`}>
                            <FaRedo /> Jogar Novamente
                        </button>
                    </div>
                    {/* O footer do AppLayout já cuidará do rodapé */}
                </div>
            </AppLayout>
        );
    }

    // Renderiza o jogo principal
    return (
        <AppLayout> {/* <<<<<<<< ADIÇÃO DO LAYOUT AQUI */}
            <div className={styles.gameContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Monte a Palavra</h1>
                    <div className={styles.scoreDisplay}>Pontos: {score}</div>
                </header>

                <div className={`${styles.gameCard} ${feedbackType === 'incorrect' ? styles.gameCardShake : ''}`}>
                    <p className={styles.gameInstruction}>Observe a imagem e monte a palavra!</p>

                    <div className={styles.questionSection}>
                        {currentWordData && currentWordData.imagem && (
                            <img
                                src={currentWordData.imagem}
                                alt="Ilustração da palavra"
                                className={styles.questionImage}
                                onClick={() => speak(currentWordData.palavra, 'pt-BR')} // Clicar na imagem fala a palavra
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                        {/* Certifique-se de que ReadTextButton está importado corretamente e disponível */}
                        {/* Se o ReadTextButton é um componente que você criou e não tem dependência de AppLayout, ele pode ser usado diretamente. */}
                        {/* Verifique o caminho de importação do ReadTextButton se ele der erro. */}
                        {/* Provavelmente é: import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton'; */}
                        {/* E certifique-se que você ainda tem o ReadTextButton.css na pasta dele. */}
                        {/* Se você tem um ReadTextButton.jsx e um ReadTextButton.css: */}
                        {/* Certifique-se que o ReadTextButton.jsx importa seu ReadTextButton.css corretamente. */}
                        <ReadTextButton text={currentWordData ? currentWordData.palavra : ''} lang="pt-BR" />
                    </div>
                    
                    <div className={styles.targetWordDisplay}>
                        {/* Garante que userResponseArray.length corresponda ao tamanho da palavra esperada */}
                        {Array.from({ length: currentWordData ? currentWordData.palavra.length : 0 }).map((_, index) => {
                            const item = userResponseArray[index];
                            return (
                                <span
                                    key={index}
                                    className={`${styles.targetWordLetter} ${item ? styles.filled : ''}`}
                                    onClick={() => handleRemoveSyllable(index)} // Clicar remove
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
                                key={index} // Use o índice da sílaba no array embaralhado como key
                                onClick={() => handleSyllableClick(item.value, index)} // Passa o valor e o índice original
                                className={`${styles.syllableChip} ${item.used ? styles.used : ''}`}
                                disabled={item.used || feedbackType === 'correct'} // Desabilita se já usada ou se acertou
                            >
                                {item.value}
                            </button>
                        ))}
                    </div>

                    <div className={styles.buttonsContainer}>
                        <button
                            onClick={verificarResposta}
                            className={`${styles.actionButton} ${styles.success}`}
                            disabled={userResponseArray.some(item => !item) || feedbackType === 'correct'} // Desabilita se nem todos os slots estão preenchidos ou já acertou
                        >
                            <FaCheck /> Verificar
                        </button>
                        <button
                            onClick={() => {
                                // Resetar apenas a resposta do usuário, não a questão
                                setUserResponseArray(Array(currentWordData.palavra.length).fill(''));
                                // Resetar o estado de "usado" das sílabas disponíveis
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

                {/* O footer do AppLayout já cuidará do rodapé, então pode remover este footer se for duplicado. */}
                {/* <footer className={styles.footer}>© 2025 Projeto Alfabetização.</footer> */}
            </div>
        </AppLayout>
    );
}

export default MonteAPalavraGame;