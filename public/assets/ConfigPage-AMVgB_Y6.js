import{j as e}from"./app-DdmJdZgC.js";import{d as t}from"./styled-components.browser.esm-CwFy9ndy.js";import{A as c,F as l}from"./AppLayout-XFxKGA60.js";import{R as a}from"./ReadTextButton-l-CEnWgp.js";const o={primary:"#8B4513",secondary:"#D2691E",textDark:"#333333",bgLight:"#F8F9FA",bgWhite:"#FFFFFF"},d=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 50px 30px;
    background-color: ${o.bgLight};
    border-radius: 12px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
    max-width: 800px;
    width: 95%;
    margin: 40px auto;
    color: ${o.textDark};
`,x=t.section`
    text-align: center;
    padding: 30px;
    background-color: ${o.bgWhite};
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;
`,p=t.h2`
    color: ${o.primary};
    font-size: 3em;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
    display: flex; /* Para alinhar o ícone e o texto */
    align-items: center; /* Alinha verticalmente */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    gap: 15px; /* Espaço entre o ícone e o texto */
    flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */

    & svg { /* Estilos para o ícone */
        font-size: 0.9em; /* Ajusta o tamanho do ícone em relação ao texto */
        color: ${o.secondary}; /* Usa a cor secundária para o ícone */
    }
`,n=t.p`
    font-size: 1.2em;
    line-height: 1.9;
    color: ${o.textDark};
    margin-bottom: 20px;
    display: flex; /* ADICIONADO: Para alinhar o texto e o botão na mesma linha */
    align-items: center; /* ADICIONADO: Para alinhar verticalmente o texto e o botão */
    flex-wrap: wrap; /* ADICIONADO: Permite quebra de linha para o botão em telas pequenas */
    justify-content: center; /* ADICIONADO: Para centralizar o conteúdo flex */
`,m=t.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,s=t.a`
    font-size: 1.1em;
    color: ${o.secondary};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease-in-out;
    /* ADICIONADO: para permitir que o ReadTextButton seja inserido ao lado se necessário */
    display: flex; 
    align-items: center;
    justify-content: center; /* Centraliza o link e o botão */
    flex-wrap: wrap; 

    &:hover {
        color: ${o.primary};
        text-decoration: underline;
    }
`;function y(){const r="Bem-vindo à página de Configurações! Aqui você poderá personalizar sua experiência com o Projeto Alfabetização.",i="As opções de configuração, como preferências de áudio, tema visual (modo escuro/claro) e tamanho da fonte, serão implementadas em futuras atualizações.";return e.jsxs(c,{children:[" ",e.jsx(d,{children:e.jsxs(x,{children:[e.jsxs(p,{children:[e.jsx(l,{})," ","Configurações",e.jsx(a,{text:"Configurações"})," "]}),e.jsxs(n,{children:[r,e.jsx(a,{text:r})," "]}),e.jsxs(n,{children:[i,e.jsx(a,{text:i})," "]}),e.jsxs(m,{children:[e.jsx(s,{href:"/politica-de-privacidade",children:"Política de Privacidade"}),e.jsx(s,{href:"/termos-de-uso",children:"Termos de Uso"})]})]})})]})}export{y as default};
