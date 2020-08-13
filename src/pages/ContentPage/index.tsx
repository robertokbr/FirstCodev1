import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import ContentCardImage from '../../components/ContentCardImage';
import ContentCard from '../../components/ContentCard';

const ContentPage: React.FC = () => {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Bem vindo ao FirstCode!" />
      <main>
        <ContentCardImage
          cardData={{
            content: `Ter uma comunidade para compartilhar dúvidas,
            criar projetos em grupo, e programar junto é essencial! entre no nosso
            server do Discord e vamos codar!`,
            tags: ['Discord', 'Starter'],
            title: `Comece Aqui 📚`,
            image: `https://dashboard.snapcraft.io/site_media/appmedia/2017/04/discord.png`,
          }}
        />
        <ContentCard
          cardData={{
            content: `Ter uma comunidade para compartilhar dúvidas,
            criar projetos em grupo, e programar junto é essencial! entre no nosso
            server do Discord e vamos codar!`,
            tags: ['Discord', 'Starter'],
            title: `Configurando ambiente de desenvolvimento 💻⚙`,
          }}
        />
      </main>
    </div>
  );
};

export default ContentPage;
