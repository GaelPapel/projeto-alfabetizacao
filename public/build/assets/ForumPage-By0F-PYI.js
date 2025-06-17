import{r as n,j as a}from"./app-Cv2p_eYH.js";import{d as r}from"./styled-components.browser.esm-DZRar_If.js";import{R as s}from"./ReadTextButton-q3n4hmCN.js";import{G as x,A as g}from"./AppLayout-D0iBk3W4.js";function f(e){return x({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"},child:[]}]})(e)}function h(e){return x({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"},child:[]}]})(e)}const b=e=>{const t=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return(.299*t+.587*o+.114*i)/255>.6},d=["#AEC6CF","#FFDDC1","#DAF7A6","#FFABAB","#ADD8E6","#C1E1C1","#FFB7B2","#B0E0E6","#FFDAB9","#E6E6FA","#DDA0DD","#FFE4E1","#F0E68C","#87CEEB","#98FB98","#F5DEB3","#D3D3D3","#E0FFFF","#FFFACD","#C0C0C0"],c=e=>{let t=0;for(let i=0;i<e.length;i++)t=e.charCodeAt(i)+((t<<5)-t);const o=Math.abs(t%d.length);return d[o]},A=r.div`
    padding: 30px 20px;
    text-align: center;
    background-color: #f0f2f5;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    max-width: 900px;
    margin: 30px auto;
    color: #333;
`,v=r.h2`
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 2.5em;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
`,C=r.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,F=r.div`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
    padding: 20px 25px;
    text-align: left;
    border-left: 5px solid ${e=>e.userColor};
    position: relative;
`,j=r.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${e=>e.userColor};
    /* Lógica para a cor do texto baseada na cor de fundo */
    color: ${e=>b(e.userColor)?"#333":"#fff"}; /* Texto preto se a cor de fundo for clara, branco se for escura */
    padding: 5px 10px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 0.9em;
    font-weight: bold;
`,E=r.div`
    display: flex;
    justify-content: flex-end; /* Alinha a data à direita */
    align-items: center;
    margin-bottom: 15px;
    padding-top: 10px; /* Espaço para o user tag */
`,z=r.span`
    color: #95a5a6;
    font-size: 0.85em;
`,B=r.p`
    color: #555;
    line-height: 1.7;
    font-size: 1em;
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
`,D=r.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
`,l=r.button`
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
`,M=r.span`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`,m=["João","Maria","Carlos","Ana","Pedro","Fernanda","Lucas","Juliana","Eduardo","Camila","Rafael","Larissa","Bruno","Tatiane","Marcos","Isabela","Felipe","Beatriz","Gustavo","Patrícia","André","Bianca","Rodrigo","Natália","Daniel","Letícia","Leandro","Sabrina","Vinícius","Paula","Alexandre","Tatiana","Henrique","Carolina","Igor","Vanessa","Tiago","Renata","Fábio","Amanda"],p=["Achei o site maravilhoso! Consegui aprender a ler palavras básicas em poucos dias. Tudo muito bem explicado.","Nunca imaginei que aprender a ler seria tão fácil. As atividades são divertidas e me ajudaram muito!","Copiaram o Duolingo na cara de pau.","Gostei muito das aulas! As explicações com áudio e jogos tornaram o aprendizado muito mais leve.","Esse site mudou minha vida! Aprender a ler com ele foi simples e muito gratificante.","Fiquei muito feliz com meu progresso. As lições são bem organizadas e fáceis de seguir.","Comecei sem saber quase nada e agora já leio textos simples sozinho. Muito obrigado!","Achei incrível como os jogos me ajudaram a memorizar as palavras. Parabéns pelo trabalho!","Meu gato comeu meu mouse, não gostei.","A alfabetização pelo site foi uma das melhores experiências que tive. Recomendo para todos!","Os áudios me ajudaram a entender a pronúncia correta. Aprender ficou bem mais fácil.","Adorei as atividades com imagens e sons. Aprender ficou divertido e eficiente!","Foi muito mais fácil do que eu pensava! O site é claro, didático e bem feito.","Receita de Bolo de cenoura google pesquisar.","Muito obrigado por esse conteúdo! Eu achava que já era tarde para aprender, mas consegui.","A plataforma é intuitiva e muito agradável. Fiquei empolgado a cada lição completada.","COMO TIRAR LETRA GRAMDE ?????.","Recomendo muito! É o tipo de site que faz a diferença na vida de quem quer aprender a ler."],u=["08:32 02/01/2024","10:45 03/01/2024","14:22 05/01/2024","18:10 06/01/2024","07:55 07/01/2024","09:33 08/01/2024","11:48 09/01/2024","16:17 10/01/2024","19:45 11/01/2024","13:29 12/01/2024","08:00 13/01/2024","17:35 14/01/2024","12:12 15/01/2024","15:59 16/01/2024","20:44 17/01/2024","09:25 18/01/2024","07:18 19/01/2024","11:05 20/01/2024"];function L(){const e=m[Math.floor(Math.random()*m.length)],t=p[Math.floor(Math.random()*p.length)],o=u[Math.floor(Math.random()*u.length)];return{nome:e,mensagem:t,data:o}}function T(){const[e,t]=n.useState([]);return n.useEffect(()=>{const o=Array.from({length:5},()=>L());t(o)},[]),a.jsxs(g,{children:[" ",a.jsxs(A,{children:[a.jsxs(v,{children:["Fórum da Comunidade",a.jsx(s,{text:"Fórum da Comunidade"})]}),a.jsx(C,{children:e.map((o,i)=>a.jsxs(F,{userColor:c(o.nome),children:[a.jsx(j,{userColor:c(o.nome),children:o.nome}),a.jsx(E,{children:a.jsx(z,{children:o.data})}),a.jsx(B,{children:a.jsxs(M,{children:[o.mensagem,a.jsx(s,{text:o.mensagem})]})}),a.jsxs(D,{children:[a.jsxs(l,{children:[a.jsx(h,{})," 0 "]}),a.jsxs(l,{children:[a.jsx(f,{})," 0 "]})]})]},i))})]})]})}export{T as default};
