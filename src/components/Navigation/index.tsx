import React from 'react';
import { Container } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>📄 1THBlog</li>
        <li>🏗 Projetos</li>
        <li>🐙 Github</li>
      </ul>
    </Container>
  );
};

export default Navigation;
