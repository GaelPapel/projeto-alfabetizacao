import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 20px auto;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 15px;
`;

const Content = styled.p`
  color: #34495e;
  line-height: 1.6;
`;

function ForumPage() {
  return (
    <PageContainer>
      <Title>Fórum de Discussões</Title>
      <Content>Conecte-se com outros usuários, tire dúvidas e compartilhe conhecimentos.</Content>
      <Content>Participe ativamente da nossa comunidade!</Content>
    </PageContainer>
  );
}

export default ForumPage;