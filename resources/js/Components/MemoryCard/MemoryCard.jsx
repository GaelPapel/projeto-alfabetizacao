// resources/js/Components/MemoryCard/MemoryCard.jsx

import React from 'react';
import styles from './MemoryCard.module.css';
// Não precisamos mais do FontAwesomeIcon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const MemoryCard = ({ card, onClick, isMatched, isSelected }) => { // isFlipped removido
    // O conteúdo é sempre texto agora
    const cardContent = (
        <span className={styles.cardText}>{card.value}</span>
    );

    return (
        <div
            // A classe 'flipped' não é mais necessária, cartas sempre viradas
            className={`${styles.cardOuter} ${isMatched ? styles.matched : ''} ${isSelected ? styles.selected : ''}`}
            onClick={() => onClick(card)}
        >
            <div className={styles.cardInner}>
                {/* Não há mais cardBack, apenas o cardFront */}
                <div className={styles.cardFront}>
                    {cardContent}
                </div>
            </div>
        </div>
    );
};

export default MemoryCard;