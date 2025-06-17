// resources/js/Pages/App/HomePage.jsx

import React from 'react';
import styled from 'styled-components';
import ReadTextButton from '@/Components/ReadTextButton/ReadTextButton'; // IMPORTANTE: Importar o ReadTextButton

// IMPORTAR O AppLayout AQUI
import AppLayout from '@/Layouts/AppLayout'; // <<<<< NOVA LINHA AQUI

// --- NOVO: Styled Component para agrupar texto e botão ---
const TextWithButton = styled.span`
    display: flex;
    align-items: center;
    gap: 10px; /* Espaçamento entre o texto e o botão */
    flex-wrap: wrap; /* Permite quebrar linha se necessário */
    justify-content: center; /* Centraliza o conteúdo (texto + botão) */
    text-align: center; /* Garante que o texto dentro do span também seja centralizado, se o flex-wrap ocorrer */
`;

// --- Styled Components para a HomePage (mantidos como estavam, mas o conteúdo deles vai usar TextWithButton) ---
const PageContainer = styled.div`
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
`;

const Section = styled.section`
    text-align: left;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;
`;

const Title = styled.h2`
    color: #8B4513;
    font-size: 3em;
    margin-bottom: 25px;
    font-weight: bold;
    text-align: center;
    /* Os estilos display/justify/align/flex-wrap serão aplicados no TextWithButton interno */
`;

const Subtitle = styled.h3`
    color: #D2691E;
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
    /* Os estilos display/justify/align/flex-wrap serão aplicados no TextWithButton interno */
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    line-height: 1.9;
    color: #333333;
    margin-bottom: 20px;
    /* Os estilos display/align/flex-wrap serão aplicados no TextWithButton interno */
`;

const CallToAction = styled.button`
    background-color: #8B4513;
    color: white;
    padding: 18px 35px;
    border: none;
    border-radius: 10px;
    font-size: 1.3em;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background-color: #A0522D;
        transform: translateY(-5px);
    }
`;

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 30px;
`;

const FeatureCard = styled.div`
    background-color: #F0F2F5;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const FeatureTitle = styled.h4`
    color: #D2691E;
    font-size: 1.5em;
    margin-bottom: 12px;
    /* Os estilos display/align/flex-wrap serão aplicados no TextWithButton interno */
`;

const FeatureDescription = styled.p`
    font-size: 1.05em;
    color: #555555;
    line-height: 1.6;
    flex-grow: 1;
    /* Os estilos display/align/flex-wrap serão aplicados no TextWithButton interno */
`;

// --- Componente HomePage ---
function HomePage() {
    const introText1 = "Sua jornada para o conhecimento começa aqui. Nosso aplicativo foi criado para tornar o aprendizado da leitura e escrita uma experiência divertida, acessível e engajadora.";
    const introText2 = "Explore nossos recursos interativos, jogue, aprenda novas palavras e conecte-se com nossa comunidade. Estamos aqui para apoiá-lo em cada passo do caminho.";
    const feature1Text = "Expanda seu vocabulário diariamente! Descubra novas palavras, suas pronúncias, significados e exemplos de uso em frases. Uma maneira simples e eficaz de aprender algo novo todos os dias.";
    const feature2Text = "Aprender brincando é mais divertido! Nossos jogos interativos, como caça-palavras e jogo da memória, são projetados para fixar o conhecimento de forma lúdica e estimulante.";
    const feature3Text = "Conecte-se com uma comunidade vibrante de estudantes e educadores. Compartilhe suas dúvidas, ajude outras pessoas e troque experiências para enriquecer seu aprendizado.";
    const feature4Text = "..."; // Texto para "Alguma coisa"

    return (
        <AppLayout> {/* <<<<< ENVOLVENDO A PÁGINA COM O LAYOUT */}
            <PageContainer>
                <Section>
                    <Title>
                        <TextWithButton> {/* NOVO WRAPPER */}
                            Bem-vindo ao Projeto Alfabetização!
                            <ReadTextButton text="Bem-vindo ao Projeto Alfabetização!" />
                        </TextWithButton>
                    </Title>
                    <Paragraph>
                        <TextWithButton> {/* NOVO WRAPPER */}
                            {introText1}
                            <ReadTextButton text={introText1} />
                        </TextWithButton>
                    </Paragraph>
                    <Paragraph>
                        <TextWithButton> {/* NOVO WRAPPER */}
                            {introText2}
                            <ReadTextButton text={introText2} />
                        </TextWithButton>
                    </Paragraph>
                </Section>

                <Section>
                    <Subtitle>
                        <TextWithButton> {/* NOVO WRAPPER */}
                            Descubra Nossos Recursos
                            <ReadTextButton text="Descubra Nossos Recursos" />
                        </TextWithButton>
                    </Subtitle>
                    <FeatureGrid>
                        <FeatureCard>
                            <FeatureTitle>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    Palavras do Dia
                                    <ReadTextButton text="Palavras do Dia" />
                                </TextWithButton>
                            </FeatureTitle>
                            <FeatureDescription>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    {feature1Text}
                                    <ReadTextButton text={feature1Text} />
                                </TextWithButton>
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureTitle>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    Jogos Educativos
                                    <ReadTextButton text="Jogos Educativos" />
                                </TextWithButton>
                            </FeatureTitle>
                            <FeatureDescription>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    {feature2Text}
                                    <ReadTextButton text={feature2Text} />
                                </TextWithButton>
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureTitle>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    Fórum de Discussões
                                    <ReadTextButton text="Fórum de Discussões" />
                                </TextWithButton>
                            </FeatureTitle>
                            <FeatureDescription>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    {feature3Text}
                                    <ReadTextButton text={feature3Text} />
                                </TextWithButton>
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureTitle>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    Alguma coisa
                                    <ReadTextButton text="Alguma coisa" />
                                </TextWithButton>
                            </FeatureTitle>
                            <FeatureDescription>
                                <TextWithButton> {/* NOVO WRAPPER */}
                                    {feature4Text}
                                    <ReadTextButton text={feature4Text} />
                                </TextWithButton>
                            </FeatureDescription>
                        </FeatureCard>
                    </FeatureGrid>
                </Section>
            </PageContainer>
        </AppLayout>
    );
}

export default HomePage;