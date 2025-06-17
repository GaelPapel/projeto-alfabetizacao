// resources/js/Pages/App/QuemSomosPage.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBullseye, FaLightbulb, FaUsers, FaCheckCircle, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { IoGameController, IoVolumeHigh } from "react-icons/io5";
import ReadTextButton from "@/Components/ReadTextButton/ReadTextButton";

// IMPORTAR O AppLayout AQUI
import AppLayout from '@/Layouts/AppLayout'; // <<<<< NOVA LINHA AQUI

// REMOVA A LINHA ABAIXO se ainda estiver lá
// import LogoImage from "@/assets/novo-logo.png";

// Definindo uma paleta de cores para consistência
const Colors = {
    primary: "#8B4513",        // Marrom Chocolate
    secondary: "#D2691E",      // Laranja Terracota
    accent1: "#4CAF50",        // Verde vibrante para feedback positivo
    accent2: "#F4436A",        // Vermelho vibrante para feedback negativo
    textDark: "#333333",
    textMedium: "#555555",
    bgLight: "#F8F9FA",
    bgWhite: "#FFFFFF",
    inputBorder: "#CCCCCC",
    buttonBg: "#2196F3", // Azul para botões
    buttonHover: "#1976D2",
};

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: calc(100vh - 60px);
    background-color: ${Colors.bgLight};
    padding: 40px 20px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    color: ${Colors.textDark};
`;

const Section = styled.section`
    background-color: ${Colors.bgWhite};
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    text-align: center;
    max-width: 800px;
    width: 100%;
    margin-bottom: 30px;
`;

const Title = styled.h1`
    font-size: 2.8em;
    color: ${Colors.primary};
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
`;

const StyledLogoImage = styled.img`
    width: auto;
    max-width: 120px;
    height: 90px;
    flex-shrink: 0;

    @media (max-width: 768px) {
        height: 70px;
        max-width: 90px;
    }
`;

// O ContentParagraph DEVE ser um <p> se for para texto.
// Se ele precisa conter blocos como ReadTextButton (que renderiza um div),
// ele deveria ser um <div> ou o botão precisa ser renderizado FORA do p.
const ContentParagraph = styled.p` // MANTENHA COMO <p> SE FOR APENAS TEXTO
    font-size: 1.1em;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: justify;
    color: ${Colors.textMedium};
`;

// Este é um novo styled component para envolver texto e botão quando necessário ficar na mesma linha ou agrupados
const TextWithButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px; /* Para manter o espaçamento como o parágrafo anterior */
    flex-wrap: wrap; /* Para responsividade */
    justify-content: center; /* Centraliza o conteúdo se FlexContainer for usado para itens únicos */
    /* Se isso for para um parágrafo longo, talvez não precise de justify-content: center */
`;


const Subtitle = styled.h3`
    font-size: 2em;
    color: ${Colors.secondary};
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
`;

const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
    margin-top: 30px;
`;

const GridItem = styled.div`
    background-color: ${Colors.bgLight};
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
        color: ${Colors.primary};
        margin-bottom: 15px;
    }
`;

const ItemTitle = styled.h4`
    font-size: 1.4em;
    color: ${Colors.textDark};
    margin-bottom: 10px;
    font-weight: 600;
`;

const ItemDescription = styled.p`
    font-size: 0.95em;
    color: ${Colors.textMedium};
    text-align: center;
    line-height: 1.5;
`;

const MemberCard = styled.div`
    background-color: ${Colors.bgLight};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const MemberName = styled.h4`
    font-size: 1.3em;
    color: ${Colors.primary};
    font-weight: 600;
`;

const MemberRole = styled.p`
    font-size: 0.9em;
    color: ${Colors.textMedium};
`;

const TechnologiesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
`;

const TechTag = styled.span`
    background-color: ${Colors.secondary};
    color: ${Colors.bgWhite};
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
`;

// REMOVIDO: O Footer agora será gerenciado pelo AppLayout
// const Footer = styled.footer`
//     margin-top: 50px;
//     font-size: 0.9em;
//     color: ${Colors.textMedium};
//     text-align: center;
//     width: 100%;
// `;


function QuemSomosPage() {
    const titleText = "Sobre o Projeto Alfabetização";
    const missionText = "Este é um trabalho desenvolvido para a UNA Cristiano Machado, com o foco em auxiliar na alfabetização de adultos, utilizando jogos interativos e métodos inclusivos. Nosso projeto se inspira profundamente nos princípios de Paulo Freire, buscando uma alfabetização que vá além da mera decodificação de palavras. Acreditamos na conexão do aprendizado à realidade e às experiências de vida dos alunos. Nossa abordagem se baseia na utilização de temas geradores relevantes para o cotidiano dos adultos, promovendo o diálogo, a reflexão crítica e a valorização do seu conhecimento prévio.";
    const visionText = "Nossa visão é ser uma plataforma de referência na alfabetização de adultos, transformando vidas através da educação e da tecnologia. Queremos capacitar indivíduos, abrir portas para novas oportunidades e promover a inclusão social.";
    const valuesText = "Nosso trabalho é guiado pelos princípios do educador Paulo Freire, que defende uma alfabetização crítica e libertadora. Em vez de métodos tradicionais, usamos situações do cotidiano dos aprendizes para construir o conhecimento de forma participativa, respeitando sua cultura, vivências e saberes. Para Freire, educar é um ato político que deve formar sujeitos conscientes e protagonistas da própria história.";

    const objectives = [
        {
            icon: <FaGraduationCap />,
            title: "Facilitar o Aprendizado",
            description: "Tornar o processo de alfabetização mais acessível e engajador para adultos.",
        },
        {
            icon: <FaBullseye />,
            title: "Desenvolvimento Integral",
            description: "Promover não apenas a decodificação de palavras, mas também a compreensão crítica do mundo.",
        },
        {
            icon: <FaLightbulb />,
            title: "Estimular a Autonomia",
            description: "Incentivar a curiosidade, a reflexão e a capacidade de aprender continuamente.",
        },
        
    ];

    const technologies = [
        "HTML", "CSS", "JavaScript", "React (Frontend)", "PHP (Backend)", "MySQL (Banco de Dados)"
    ];

    const teamMembers = [
        { name: "Gabriel Freitas", role: "Desenvolvedor" },
        { name: "Emerson Pedrosa", role: "Desenvolvedor" },
        { name: "Gabriel Haziel", role: "Colaborador" },
        { name: "Artur Camargos", role: "Colaborador" },
        { name: "Bernardo Araujo", role: "Colaborador" },
    ];

    return (
        <AppLayout> {/* <<<<< ENVOLVENDO A PÁGINA COM O LAYOUT */}
            <PageContainer>
                <Section>
                    <Title>
                        <StyledLogoImage src="/assets/images/novo-logo.png" alt="Logo do Projeto Alfabetização" />
                        <span>{titleText}</span>
                        <ReadTextButton text={titleText} />
                    </Title>
                    {/* CORREÇÃO AQUI: Use TextWithButtonContainer se quiser texto e botão na mesma linha */}
                    <TextWithButtonContainer>
                        <ContentParagraph style={{ margin: 0 }}>{missionText}</ContentParagraph>
                        <ReadTextButton text={missionText} />
                    </TextWithButtonContainer>
                </Section>

                <Section>
                    <Subtitle>Nossos Objetivos</Subtitle>
                    <IconGrid>
                        {objectives.map((obj, index) => (
                            <GridItem key={index}>
                                {obj.icon}
                                <ItemTitle>{obj.title}</ItemTitle>
                                <ItemDescription>{obj.description}</ItemDescription>
                                <ReadTextButton text={`${obj.title}. ${obj.description}`} />
                            </GridItem>
                        ))}
                    </IconGrid>
                </Section>

                <Section>
                    <Subtitle>Tecnologias Utilizadas</Subtitle>
                    <TechnologiesGrid>
                        {technologies.map((tech, index) => (
                            // CORREÇÃO AQUI: Use TextWithButtonContainer para TechTag e ReadTextButton
                            <TextWithButtonContainer key={index}>
                                <TechTag>{tech}</TechTag>
                                <ReadTextButton text={tech} />
                            </TextWithButtonContainer>
                        ))}
                    </TechnologiesGrid>
                </Section>

                <Section>
                    <Subtitle>Nossa Equipe e Colaboradores</Subtitle>
                    <IconGrid>
                        {teamMembers.map((member, index) => (
                            <MemberCard key={index}>
                                <MemberName>{member.name}</MemberName>
                                <MemberRole>{member.role}</MemberRole>
                                <ReadTextButton text={`${member.name}, ${member.role}`} />
                            </MemberCard>
                        ))}
                    </IconGrid>
                </Section>

                <Section>
                    <Subtitle>Nossa Visão</Subtitle>
                    {/* CORREÇÃO AQUI: Use TextWithButtonContainer */}
                    <TextWithButtonContainer>
                        <ContentParagraph style={{ margin: 0 }}>{visionText}</ContentParagraph>
                        <ReadTextButton text={visionText} />
                    </TextWithButtonContainer>
                </Section>

                <Section>
                    <Subtitle>Nossos Valores</Subtitle>
                    {/* CORREÇÃO AQUI: Use TextWithButtonContainer */}
                    <TextWithButtonContainer>
                        <ContentParagraph style={{ margin: 0 }}>{valuesText}</ContentParagraph>
                        <ReadTextButton text={valuesText} />
                    </TextWithButtonContainer>
                </Section>
            </PageContainer>
        </AppLayout>
    );
}

export default QuemSomosPage;