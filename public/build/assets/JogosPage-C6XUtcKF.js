import{j as e,Y as l}from"./app-Cv2p_eYH.js";import{d as o}from"./styled-components.browser.esm-DZRar_If.js";import{A as p,a as u,b as g}from"./AppLayout-D0iBk3W4.js";import{R as t}from"./ReadTextButton-q3n4hmCN.js";const h=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 50px 30px;
    background-color: #F8F9FA;
    border-radius: 12px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
    max-width: 1000px;
    width: 95%;
    margin: 40px auto;
    color: #333333;
`,s=o.section`
    text-align: left;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;
`,a=o.div`
    display: flex;
    align-items: center;
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    gap: 10px; /* Espaço entre o texto e o botão */
    flex-wrap: wrap; /* Permite quebra de linha em telas menores */
    text-align: center; /* Garante que o texto dentro do flexbox permaneça centralizado */
`,f=o.h2`
    color: #8B4513;
    font-size: 3em;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
`,b=o.h3`
    color: #D2691E;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
`,j=o.p`
    font-size: 1.2em;
    line-height: 1.9;
    color: #333333;
    margin-bottom: 20px;
`,v=o.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 30px;
`,d=o(l)` // <<<<< Mudança aqui para usar o Link do Inertia
    background-color: #f0f2f5;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none; /* Remove sublinhado padrão do link */
    color: inherit; /* Garante que a cor do texto seja herdada ou definida explicitamente */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
        background-color: #e2e4e8; /* Cor um pouco mais escura no hover */
    }

    /* Novo estilo para o ReadTextButton dentro do GameCard para posicionamento */
    ${t} {
        margin-top: 15px; /* Adiciona espaço entre a descrição e o botão de áudio */
        align-self: center; /* Garante que o botão fique centralizado horizontalmente no card */
    }
`,c=o.div`
    font-size: 3.5em;
    color: #D2691E;
    margin-bottom: 20px;
`,m=o.h4`
    color: #8B4513;
    font-size: 1.6em;
    margin-bottom: 15px;
`,x=o.p`
    font-size: 1em;
    color: #555555;
    line-height: 1.6;
`;function B(){const r="Jogos Educativos",i="Bem-vindo à nossa seção de jogos! Aqui você encontrará diversas atividades lúdicas para praticar a leitura e a escrita de forma interativa e divertida. Clique em um jogo para começar!",n="Nossos Jogos Disponíveis";return e.jsxs(p,{children:[" ",e.jsxs(h,{children:[e.jsxs(s,{children:[e.jsx(f,{children:e.jsxs(a,{children:[" ",r,e.jsx(t,{text:r})]})}),e.jsx(j,{children:e.jsxs(a,{children:[" ",i,e.jsx(t,{text:i})]})})]}),e.jsxs(s,{children:[e.jsx(b,{children:e.jsxs(a,{children:[" ",n,e.jsx(t,{text:n})]})}),e.jsxs(v,{children:[e.jsxs(d,{href:"/jogos/memoria",children:[" ",e.jsx(c,{children:e.jsx(u,{})}),e.jsxs(m,{children:["Jogo da Memória"," "]}),e.jsxs(x,{children:["Teste sua memória e identifique pares de palavras e imagens."," "]})]}),e.jsxs(d,{href:"/jogos/montapalavra",children:[" ",e.jsx(c,{children:e.jsx(g,{})}),e.jsxs(m,{children:["Desafio Visual"," "]}),e.jsxs(x,{children:["Acerte o nome de cada imagem"," "]})]})]})]})]})]})}export{B as default};
