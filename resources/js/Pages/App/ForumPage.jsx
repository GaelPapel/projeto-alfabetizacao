// resources/js/Pages/App/ForumPage.jsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton'; // Certifique-se de que o caminho está correto!

// IMPORTAR O AppLayout AQUI
import AppLayout from '@/Layouts/AppLayout'; // <<<<< NOVA LINHA AQUI

// IMPORTAR ÍCONES (EXEMPLO COM REACT ICONS - BI de Boxicons)
// Certifique-se de ter instalado: npm install react-icons --save
import { BiLike, BiDislike, BiVolumeFull } from 'react-icons/bi'; //

// Função para determinar se uma cor é clara ou escura
const isLightColor = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    // Fórmula para luminância (perceptual brightness)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6; // Ajuste este valor (0.5 a 0.7) para definir o limiar de "claro"
};

// Função para gerar uma cor baseada no nome (garante consistência)
const colors = [
    '#AEC6CF', '#FFDDC1', '#DAF7A6', '#FFABAB', '#ADD8E6',
    '#C1E1C1', '#FFB7B2', '#B0E0E6', '#FFDAB9', '#E6E6FA',
    '#DDA0DD', '#FFE4E1', '#F0E68C', '#87CEEB', '#98FB98',
    '#F5DEB3', '#D3D3D3', '#E0FFFF', '#FFFACD', '#C0C0C0' // Adicionei mais algumas cores para variedade
];

const getColorForName = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
};

// --- Styled Components ---

const PageContainer = styled.div`
    padding: 30px 20px;
    text-align: center;
    background-color: #f0f2f5;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    max-width: 900px;
    margin: 30px auto;
    color: #333;
`;

const Title = styled.h2`
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 2.5em;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
`;

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CommentCard = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    padding: 20px 25px;
    text-align: left;
    border-left: 5px solid ${(props) => props.userColor};
    position: relative;
`;

const UserTag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.userColor};
    /* Lógica para a cor do texto baseada na cor de fundo */
    color: ${(props) => isLightColor(props.userColor) ? '#333' : '#fff'}; /* Texto preto se a cor de fundo for clara, branco se for escura */
    padding: 5px 10px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 0.9em;
    font-weight: bold;
`;

const CommentHeader = styled.div`
    display: flex;
    justify-content: flex-end; /* Alinha a data à direita */
    align-items: center;
    margin-bottom: 15px;
    padding-top: 10px; /* Espaço para o user tag */
`;

// O UserName estilizado não é mais necessário aqui, pois o nome está na UserTag
// const UserName = styled.span`
//     font-weight: bold;
//     font-size: 1.1em;
//     color: #34495e;
// `;

const CommentDate = styled.span`
    color: #95a5a6;
    font-size: 0.85em;
`;

const CommentMessage = styled.p`
    color: #555;
    line-height: 1.7;
    font-size: 1em;
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
`;

const CommentFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
`;

const ReactionButton = styled.button`
    background: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 8px 12px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;
    color: #555;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: #f0f0f0;
        border-color: #ccc;
    }

    &:active {
        transform: translateY(1px);
    }

    svg { /* Estilo para os ícones SVG dentro do botão */
        font-size: 1.3em; /* Ajusta o tamanho do ícone */
    }
`;

const TextWithButton = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`;

// --- Dados para simulação (mantidos como estavam) ---
const nomes = [
    'João', 'Maria', 'Carlos', 'Ana', 'Pedro', 'Fernanda',
    'Lucas', 'Juliana', 'Eduardo', 'Camila', 'Rafael', 'Larissa',
    'Bruno', 'Tatiane', 'Marcos', 'Isabela', 'Felipe', 'Beatriz',
    'Gustavo', 'Patrícia', 'André', 'Bianca', 'Rodrigo', 'Natália',
    'Daniel', 'Letícia', 'Leandro', 'Sabrina', 'Vinícius', 'Paula',
    'Alexandre', 'Tatiana', 'Henrique', 'Carolina', 'Igor', 'Vanessa',
    'Tiago', 'Renata', 'Fábio', 'Amanda'
];

const mensagens = [
    'Achei o site maravilhoso! Consegui aprender a ler palavras básicas em poucos dias. Tudo muito bem explicado.',
    'Nunca imaginei que aprender a ler seria tão fácil. As atividades são divertidas e me ajudaram muito!',
    'Copiaram o Duolingo na cara de pau.',
    'Gostei muito das aulas! As explicações com áudio e jogos tornaram o aprendizado muito mais leve.',
    'Esse site mudou minha vida! Aprender a ler com ele foi simples e muito gratificante.',
    'Fiquei muito feliz com meu progresso. As lições são bem organizadas e fáceis de seguir.',
    'Comecei sem saber quase nada e agora já leio textos simples sozinho. Muito obrigado!',
    'Achei incrível como os jogos me ajudaram a memorizar as palavras. Parabéns pelo trabalho!',
    "Meu gato comeu meu mouse, não gostei.",
    'A alfabetização pelo site foi uma das melhores experiências que tive. Recomendo para todos!',
    'Os áudios me ajudaram a entender a pronúncia correta. Aprender ficou bem mais fácil.',
    'Adorei as atividades com imagens e sons. Aprender ficou divertido e eficiente!',
    'Foi muito mais fácil do que eu pensava! O site é claro, didático e bem feito.',
    'Receita de Bolo de cenoura google pesquisar.',
    'Muito obrigado por esse conteúdo! Eu achava que já era tarde para aprender, mas consegui.',
    'A plataforma é intuitiva e muito agradável. Fiquei empolgado a cada lição completada.',
    'COMO TIRAR LETRA GRAMDE ?????.',
    'Recomendo muito! É o tipo de site que faz a diferença na vida de quem quer aprender a ler.'
];

const datas = [
    '08:32 02/01/2024', '10:45 03/01/2024', '14:22 05/01/2024',
    '18:10 06/01/2024', '07:55 07/01/2024', '09:33 08/01/2024',
    '11:48 09/01/2024', '16:17 10/01/2024', '19:45 11/01/2024',
    '13:29 12/01/2024', '08:00 13/01/2024', '17:35 14/01/2024',
    '12:12 15/01/2024', '15:59 16/01/2024', '20:44 17/01/2024',
    '09:25 18/01/2024', '07:18 19/01/2024', '11:05 20/01/2024'
];

function gerarPostagemAleatoria() {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    const data = datas[Math.floor(Math.random() * datas.length)];
    return { nome, mensagem, data };
}

function ForumPage() {
    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
        const novasPostagens = Array.from({ length: 5 }, () => gerarPostagemAleatoria());
        setPostagens(novasPostagens);
    }, []);

    return (
        <AppLayout> {/* <<<<< ENVOLVENDO A PÁGINA COM O LAYOUT */}
            <PageContainer>
                <Title>
                    Fórum da Comunidade
                    {/* Você pode adicionar um ícone aqui se quiser, como <BiVolumeFull /> */}
                    <ReadTextButton text="Fórum da Comunidade" />
                </Title>

                <CommentsContainer>
                    {postagens.map((post, index) => (
                        <CommentCard key={index} userColor={getColorForName(post.nome)}>
                            <UserTag userColor={getColorForName(post.nome)}>
                                {post.nome}
                            </UserTag>
                            <CommentHeader>
                                {/* O UserName foi removido daqui para evitar redundância com a UserTag */}
                                <CommentDate>{post.data}</CommentDate>
                            </CommentHeader>
                            <CommentMessage>
                                <TextWithButton>
                                    {post.mensagem}
                                    <ReadTextButton text={post.mensagem} />
                                </TextWithButton>
                            </CommentMessage>
                            <CommentFooter>
                                <ReactionButton>
                                    <BiLike /> 0 {/* Ícone de "curtir" */}
                                </ReactionButton>
                                <ReactionButton>
                                    <BiDislike /> 0 {/* Ícone de "não curtir" */}
                                </ReactionButton>
                            </CommentFooter>
                        </CommentCard>
                    ))}
                </CommentsContainer>
            </PageContainer>
        </AppLayout>
    );
}

export default ForumPage;