import{j as e}from"./app-DdmJdZgC.js";import{d as o}from"./styled-components.browser.esm-CwFy9ndy.js";import{A as j,c as b,d as v,e as y,f as z}from"./AppLayout-XFxKGA60.js";import{R as i}from"./ReadTextButton-l-CEnWgp.js";const a={primary:"#8B4513",secondary:"#D2691E",textDark:"#333333",textMedium:"#555555",bgLight:"#F8F9FA",bgWhite:"#FFFFFF"},w=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: calc(100vh - 60px);
    background-color: ${a.bgLight};
    padding: 40px 20px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    color: ${a.textDark};
`,s=o.section`
    background-color: ${a.bgWhite};
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    text-align: center;
    max-width: 800px;
    width: 100%;
    margin-bottom: 30px;
`,F=o.h1`
    font-size: 2.8em;
    color: ${a.primary};
    margin-bottom: 25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    @media (max-width: 768px) {
        font-size: 2em;
        flex-direction: column;
        gap: 10px;
    }
`,$=o.img`
    width: auto;
    max-width: 120px;
    height: 90px;
    flex-shrink: 0;

    @media (max-width: 768px) {
        height: 70px;
        max-width: 90px;
    }
`,c=o.p` // MANTENHA COMO <p> SE FOR APENAS TEXTO
    font-size: 1.1em;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: justify;
    color: ${a.textMedium};
`,d=o.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px; /* Para manter o espaçamento como o parágrafo anterior */
    flex-wrap: wrap; /* Para responsividade */
    justify-content: center; /* Centraliza o conteúdo se FlexContainer for usado para itens únicos */
    /* Se isso for para um parágrafo longo, talvez não precise de justify-content: center */
`,n=o.h3`
    font-size: 2em;
    color: ${a.secondary};
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
        font-size: 1.6em;
    }
`,g=o.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
    margin-top: 30px;
`,C=o.div`
    background-color: ${a.bgLight};
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
    }

    svg {
        font-size: 2.5em;
        color: ${a.primary};
        margin-bottom: 15px;
    }
`,T=o.h4`
    font-size: 1.4em;
    color: ${a.textDark};
    margin-bottom: 10px;
    font-weight: 600;
`,A=o.p`
    font-size: 0.95em;
    color: ${a.textMedium};
    text-align: center;
    line-height: 1.5;
`,P=o.div`
    background-color: ${a.bgLight};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`,M=o.h4`
    font-size: 1.3em;
    color: ${a.primary};
    font-weight: 600;
`,N=o.p`
    font-size: 0.9em;
    color: ${a.textMedium};
`,S=o.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
`,k=o.span`
    background-color: ${a.secondary};
    color: ${a.bgWhite};
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
`;function B(){const l="Sobre o Projeto Alfabetização",x="Este é um trabalho desenvolvido para a UNA Cristiano Machado, com o foco em auxiliar na alfabetização de adultos, utilizando jogos interativos e métodos inclusivos. Nosso projeto se inspira profundamente nos princípios de Paulo Freire, buscando uma alfabetização que vá além da mera decodificação de palavras. Acreditamos na conexão do aprendizado à realidade e às experiências de vida dos alunos. Nossa abordagem se baseia na utilização de temas geradores relevantes para o cotidiano dos adultos, promovendo o diálogo, a reflexão crítica e a valorização do seu conhecimento prévio.",p="Nossa visão é ser uma plataforma de referência na alfabetização de adultos, transformando vidas através da educação e da tecnologia. Queremos capacitar indivíduos, abrir portas para novas oportunidades e promover a inclusão social.",m="Nossos valores fundamentais são: Inovação, Inclusão, Colaboração, Respeito, Ética e Comprometimento com a transformação social através da educação.",h=[{icon:e.jsx(b,{}),title:"Facilitar o Aprendizado",description:"Tornar o processo de alfabetização mais acessível e engajador para adultos."},{icon:e.jsx(v,{}),title:"Desenvolvimento Integral",description:"Promover não apenas a decodificação de palavras, mas também a compreensão crítica do mundo."},{icon:e.jsx(y,{}),title:"Estimular a Autonomia",description:"Incentivar a curiosidade, a reflexão e a capacidade de aprender continuamente."},{icon:e.jsx(z,{}),title:"Promover a Inclusão",description:"Utilizar métodos inclusivos para atender às diversas necessidades dos alunos."}],u=["HTML","CSS","JavaScript","React (Frontend)","PHP (Backend)","MySQL (Banco de Dados)"],f=[{name:"Gabriel Freitas",role:"Desenvolvedor Frontend"},{name:"Emerson Pedrosa",role:"Desenvolvedor Backend"},{name:"Gabriel Haziel",role:"Colaborador"},{name:"Artur Camargos",role:"Colaborador"},{name:"Bernardo Araujo",role:"Colaborador"}];return e.jsxs(j,{children:[" ",e.jsxs(w,{children:[e.jsxs(s,{children:[e.jsxs(F,{children:[e.jsx($,{src:"/imagens/novo-logo.png",alt:"Logo do Projeto Alfabetização"}),e.jsx("span",{children:l}),e.jsx(i,{text:l})]}),e.jsxs(d,{children:[e.jsx(c,{style:{margin:0},children:x}),e.jsx(i,{text:x})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Nossos Objetivos"}),e.jsx(g,{children:h.map((t,r)=>e.jsxs(C,{children:[t.icon,e.jsx(T,{children:t.title}),e.jsx(A,{children:t.description}),e.jsx(i,{text:`${t.title}. ${t.description}`})]},r))})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Tecnologias Utilizadas"}),e.jsx(S,{children:u.map((t,r)=>e.jsxs(d,{children:[e.jsx(k,{children:t}),e.jsx(i,{text:t})]},r))})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Nossa Equipe e Colaboradores"}),e.jsx(g,{children:f.map((t,r)=>e.jsxs(P,{children:[e.jsx(M,{children:t.name}),e.jsx(N,{children:t.role}),e.jsx(i,{text:`${t.name}, ${t.role}`})]},r))})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Nossa Visão"}),e.jsxs(d,{children:[e.jsx(c,{style:{margin:0},children:p}),e.jsx(i,{text:p})]})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Nossos Valores"}),e.jsxs(d,{children:[e.jsx(c,{style:{margin:0},children:m}),e.jsx(i,{text:m})]})]})]})]})}export{B as default};
