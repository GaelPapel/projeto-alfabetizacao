// resources/js/Pages/App/PalavrasPage.jsx

import React, { useState, useEffect, useMemo } from 'react';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton';

// IMPORTAR O AppLayout AQUI
import AppLayout from '@/Layouts/AppLayout'; // <<<<< NOVA LINHA AQUI

// Importe o CSS Module
import styles from './PalavrasPage.module.css';

// Remova todas as definições de keyframes (fadeIn, shake) se elas estavam aqui
// Ex:
// const fadeIn = keyframes`
//     from { opacity: 0; transform: translateY(10px); }
//     to { opacity: 1; transform: translateY(0); }
// `;
// const shake = keyframes`
//     0%, 100% { transform: translateX(0); }
//     10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
//     20%, 40%, 60%, 80% { transform: translateX(5px); }
// `;

// Remova todas as definições de styled-components (GameCard, GameInstruction, etc.)
// Ex:
// const PageContainer = styled.div`...`;
// const GameCard = styled.div`...`;


const initialGameQuestions = [
    { id: 1, palavra: "CACHORRO", questao: "CACHORR*" },
    { id: 2, palavra: "GATO", questao: "GAT*" },
    { id: 3, palavra: "PÁSSARO", questao: "PÁSSAR*" },
    { id: 4, palavra: "PEIXE", questao: "PEIX*" },
    { id: 5, palavra: "ELEFANTE", questao: "ELEFANT*" },
    { id: 6, palavra: "GIRAFA", questao: "GIRAF*" },
    { id: 7, palavra: "SAPO", questao: "SAP*" },
    { id: 8, palavra: "BORBOLETA", questao: "BORBOLET*" },
    { id: 9, palavra: "TIGRE", questao: "TIGR*" },
    { id: 10, palavra: "COELHO", questao: "COELH*" },
];


function PalavrasPage() {
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [palavra, setPalavra] = useState(null);
    const [questao, setQuestao] = useState(null);
    const [respostaUsuario, setRespostaUsuario] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [feedbackType, setFeedbackType] = useState(null); // 'correct' ou 'incorrect'
    const [score, setScore] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const displayQuestao = useMemo(() => {
        return questao ? questao.replace(/\*/g, '_') : '';
    }, [questao]);

    const buscarPalavras = async () => {
        setIsLoading(true);
        try {
            // Se você buscar da API, descomente isso e configure sua rota Laravel
            // const resposta = await fetch('/api/palavras'); 
            // if (!resposta.ok) {
            //     throw new Error(`Erro HTTP! status: ${resposta.status}`);
            // }
            // const dados = await resposta.json();
            // setAllQuestions(dados);
            setAllQuestions(initialGameQuestions); // Usando dados mockados por enquanto
        } catch (erro) {
            console.error('Erro ao buscar palavras para o jogo:', erro);
            setMensagem('Erro ao carregar as questões do jogo. Tente novamente mais tarde.');
            setAllQuestions([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        buscarPalavras();
    }, []);

    useEffect(() => {
        if (allQuestions.length > 0) {
            if (currentQuestionIndex < allQuestions.length) {
                const current = allQuestions[currentQuestionIndex];
                setPalavra(current.palavra);
                setQuestao(current.questao);
                setRespostaUsuario('');
                setMensagem('');
                setFeedbackType(null); // Reseta o feedback para a nova questão
            } else {
                setGameFinished(true); // Todas as perguntas foram respondidas
            }
        } else if (!isLoading) {
            setPalavra(null);
            setQuestao("Nenhuma palavra encontrada.");
        }
    }, [currentQuestionIndex, allQuestions, isLoading]);


    const verificarResposta = (e) => {
        e.preventDefault();

        if (!palavra || isLoading) {
            setMensagem('Nenhuma palavra para verificar ou carregando.');
            setFeedbackType(null);
            return;
        }
        
        if (!respostaUsuario.trim()) {
            setMensagem('Por favor, digite a palavra completa.');
            setFeedbackType('incorrect');
            return;
        }

        if (respostaUsuario.trim().toLowerCase() === palavra.toLowerCase()) {
            setMensagem('✅ Parabéns! Você acertou!');
            setFeedbackType('correct');
            setScore(prevScore => prevScore + 1);
            
            // Avança para a próxima pergunta após um pequeno delay
            setTimeout(() => {
                setRespostaUsuario('');
                setMensagem('');
                setFeedbackType(null);
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            }, 1500);
        } else {
            setMensagem(`❌ Que pena! O correto era: ${palavra}`);
            setFeedbackType('incorrect');
        }
    };

    const resetGame = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameFinished(false);
        setRespostaUsuario('');
        setMensagem('');
        setFeedbackType(null);
        buscarPalavras(); // Recarrega as perguntas para um novo jogo
    };

    // Renderiza a tela de Fim de Jogo
    if (gameFinished) {
        return (
            <AppLayout> {/* <<<<< ADICIONADO: Envolvendo a tela de fim de jogo */}
                <div className={styles.pageContainer}>
                    <div className={styles.gameCard}>
                        <p className={styles.gameInstruction}>Fim do Jogo!</p>
                        <h2 className={styles.questionDisplay} style={{ fontSize: '3em' }}>
                            Sua pontuação: {score} de {allQuestions.length}
                        </h2>
                        <button onClick={resetGame} className={styles.gameButton}>Jogar Novamente</button>
                    </div>
                </div>
            </AppLayout>
        );
    }

    // Renderiza o jogo principal
    return (
        <AppLayout> {/* <<<<< ADICIONADO: Envolvendo a página principal do jogo */}
            <div className={styles.pageContainer}>
                {/* Aplica classes condicionais para o feedback */}
                <div className={`${styles.gameCard} ${feedbackType === 'correct' ? styles.gameCardCorrect : ''} ${feedbackType === 'incorrect' ? styles.gameCardIncorrect : ''}`}>
                    <div className={styles.scoreDisplay}>Pontos: {score}</div>
                    <p className={styles.gameInstruction}>Ouça e complete a Palavra:</p>

                    {isLoading ? (
                        <h2 className={styles.questionDisplay}>Carregando Questão...</h2>
                    ) : (
                        questao && (
                            <h2 className={styles.questionDisplay}>
                                <span>{displayQuestao}</span>
                                {palavra && (
                                    <ReadTextButton
                                        text={palavra}
                                    />
                                )}
                            </h2>
                        )
                    )}

                    <form onSubmit={verificarResposta} className={styles.gameInputGroup}>
                        <input
                            type="text"
                            placeholder="Digite a palavra completa"
                            value={respostaUsuario}
                            onChange={(e) => setRespostaUsuario(e.target.value)}
                            // Desabilita o input se estiver carregando ou a questão não existe, ou se já acertou
                            disabled={isLoading || !questao || (feedbackType === 'correct')} 
                            className={styles.gameInput}
                        />
                        <button 
                            type="submit" 
                            // Desabilita o botão se estiver carregando, resposta vazia, sem questão ou se já acertou
                            disabled={isLoading || !respostaUsuario.trim() || !questao || (feedbackType === 'correct')}
                            className={styles.gameButton}
                        >
                            Verificar
                        </button>
                    </form>

                    {mensagem && (
                        <p className={`${styles.gameFeedbackMessage} ${feedbackType === 'correct' ? styles.gameFeedbackMessageCorrect : styles.gameFeedbackMessageIncorrect}`}>
                            {mensagem}
                        </p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

export default PalavrasPage;