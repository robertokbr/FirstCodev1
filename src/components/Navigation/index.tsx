import React from 'react';
import { Container } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <ul>
        <li className="selected">
          <span aria-label="Page" role="img">
            📄 1THBLOG
          </span>
          <p>
            Blog pessoal em desenvolvimento, voltado para o compartilhamento
            gratuito de todo conhecimento adquirido ao longo da nossa caminhada
            de aprendizado.
          </p>
        </li>
        <li>
          <span aria-label="Construction Machine" role="img">
            🏗 Projetos
          </span>
        </li>
        <li>
          <span aria-label="Octo" role="img">
            🐙Github
          </span>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
