import React from 'react';
import './styles.css';
import { title } from 'process';
import PageHeader from '../../components/PageHeader';
import ContentCard from '../../components/ContentCard';

const ContentPage: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Bem vindo ao FirstCode!" />
      <main>
        <a href="https://www.notion.so/Entrando-na-comunidade-f44ef4f7c8f54e57b94902143c1a94f8">
          <ContentCard
            cardData={{
              content: `Ter uma comunidade para compartilhar dúvidas,
            criar projetos em grupo, e programar junto é essencial! entre no nosso
            server do Discord e vamos codar!`,
              tags: `Discord, Starter`,
              title: `Comece Por Aqui 📚`,
            }}
          />
        </a>
      </main>
    </div>
  );
};

export default ContentPage;
