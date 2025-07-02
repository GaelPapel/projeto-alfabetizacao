// resources/js/Pages/Games/MemoriaGame/MemoriaGame.jsx

import React, { useState, useEffect, useCallback } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import MemoryCard from '@/Components/MemoryCard/MemoryCard';
import styles from './MemoriaGame.module.css';

// Dados para os pares de cartas: APENAS TEXTO
// Cada item na lista representa um par de cartas que terá o mesmo 'value'
const GAME_PAIRS_DATA = [
    { id: 1, value: "CASA" },
    { id: 2, value: "BOLA" },
    { id: 3, value: "SAPO" },
    { id: 4, value: "GATO" },
    { id: 5, value: "PATO" },
    { id: 6, value: "PEIXE" },
    { id: 7, value: "OVO" },
    { id: 8, value: "MAÇÃ" },
    { id: 9, value: "SOL" },
    { id: 10, value: "LUA" },
];

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const MemoriaGame = () => {
    const { speak, stop } = useTextToSpeech();

    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]); // Mudança de flippedCards para selectedCards
    const [matchedCards, setMatchedCards] = useState(new Set());
    const [moves, setMoves] = useState(0);
    const [score, setScore] = useState(0);
    const [canSelect, setCanSelect] = useState(true); // Sempre pode selecionar, pois as cartas estão sempre viradas
    const [gameOver, setGameOver] = useState(false);

    // Esta função prepara o tabuleiro com as cartas SEMPRE VIRADAS PARA CIMA
    const initializeGame = useCallback(() => {
        const initialCards = GAME_PAIRS_DATA.flatMap(item => [
            // Crie duas cartas para cada item de dados, ambas com o mesmo valor
            // As cartas SEMPRE começam como 'flipped: true' e 'selected: false'
            { id: item.id * 2 - 1, value: item.value, type: 'word', flipped: true, matched: false, selected: false },
            { id: item.id * 2, value: item.value, type: 'word', flipped: true, matched: false, selected: false },
        ]);
        shuffleArray(initialCards);

        setCards(initialCards);
        setSelectedCards([]); // Reinicia cartas selecionadas
        setMatchedCards(new Set());
        setMoves(0);
        setScore(0);
        setCanSelect(true); // Sempre permite seleção
        setGameOver(false);
        stop();
    }, [stop]);

    useEffect(() => {
        initializeGame();
    }, [initializeGame]);

    const handleCardClick = useCallback((clickedCard) => {
        // Não pode selecionar se o jogo acabou, se a carta já está combinada, ou se já está selecionada (em selectedCards)
        if (gameOver || matchedCards.has(clickedCard.id) || selectedCards.some(c => c.id === clickedCard.id)) {
            return;
        }

        // Se já tem duas cartas selecionadas e não está esperando uma verificação, impede mais seleções
        if (selectedCards.length === 2 && canSelect) {
             return;
        }

        // Adiciona a carta clicada ao array de cartas selecionadas
        const newSelectedCards = [...selectedCards, clickedCard];
        setSelectedCards(newSelectedCards);

        // Atualiza o estado 'selected' da carta clicada para feedback visual
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === clickedCard.id ? { ...card, selected: true } : card
            )
        );

        // Fala a palavra da carta clicada
        speak(clickedCard.value, 'pt-BR');

    }, [gameOver, matchedCards, selectedCards, speak, canSelect]);


    useEffect(() => {
        if (selectedCards.length === 2) {
            setCanSelect(false); // Desativa seleção enquanto verifica par

            const [card1, card2] = selectedCards;

            setMoves(prevMoves => prevMoves + 1);

            if (card1.value === card2.value && card1.id !== card2.id) {
                // Par encontrado
                setMatchedCards(prevMatched => new Set(prevMatched).add(card1.id).add(card2.id));
                setScore(prevScore => prevScore + 1);

                // Remove o estado 'selected' das cartas que foram combinadas
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.id === card1.id || card.id === card2.id
                            ? { ...card, selected: false, matched: true } // Marca como matched
                            : card
                    )
                );

                setSelectedCards([]); // Limpa as cartas selecionadas
                speak("Isso mesmo!", 'pt-BR');

                // Verifica se todos os pares foram encontrados
                if (matchedCards.size + 2 === GAME_PAIRS_DATA.length * 2) {
                    setTimeout(() => {
                        setGameOver(true);
                        speak("Parabéns! Você encontrou todos os pares!", 'pt-BR');
                    }, 1000);
                }
                setCanSelect(true); // Reativa seleção
            } else {
                // Não é um par
                setTimeout(() => {
                    setCards(prevCards =>
                        prevCards.map(card =>
                            card.id === card1.id || card.id === card2.id
                                ? { ...card, selected: false } // Apenas remove o 'selected'
                                : card
                        )
                    );
                    setSelectedCards([]); // Limpa as cartas selecionadas
                    setCanSelect(true); // Reativa seleção
                    speak("Tente de novo.", 'pt-BR');
                }, 1200); // Tempo para o usuário ver que não é um par
            }
        }
    }, [selectedCards, matchedCards, GAME_PAIRS_DATA.length, speak]);

    return (
        <AppLayout>
            <div className={styles.gameContainer}>
                <h1 className={styles.gameTitle}>Jogo da Memória da Alfabetização</h1>

                {/* Não há mais tela inicial separada, o jogo começa direto com as cartas viradas */}
                {!gameOver && (
                    <>
                        <div className={styles.infoBar}>
                            <div className={styles.infoItem}>Movimentos: {moves}</div>
                            <div className={styles.infoItem}>Pares Encontrados: {score} / {GAME_PAIRS_DATA.length}</div>
                            <button onClick={initializeGame} className={styles.resetButton}>Reiniciar</button>
                        </div>
                        <div className={styles.grid}>
                            {cards.map(card => (
                                <MemoryCard
                                    key={card.id}
                                    card={card}
                                    onClick={handleCardClick}
                                    // isFlipped sempre será true, pois as cartas nunca viram para baixo.
                                    // Apenas para manter a prop, mas ela não controla a visibilidade.
                                    isFlipped={true}
                                    isMatched={matchedCards.has(card.id)}
                                    isSelected={card.selected} // Usado para feedback visual de seleção
                                />
                            ))}
                        </div>
                    </>
                )}

                {gameOver && (
                    <div className={styles.endGameScreen}>
                        <h2>Parabéns! Você Venceu!</h2>
                        <p>Você encontrou todos os {GAME_PAIRS_DATA.length} pares em {moves} movimentos!</p>
                        <button onClick={initializeGame} className={styles.startButton}>Jogar Novamente</button>
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default MemoriaGame;