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
            link:
              'https://www.notion.so/CONFIGURANDO-AMBIENTE-f44ef4f7c8f54e57b94902143c1a94f8',
          }}
        />
        <ContentCard
          cardData={{
            content: `Antes de embarcarmos no mundo da programação,
             o primeiro passo é a configuração do nosso ambiente de desenvolvimento, aonde iremos…`,
            tags: ['VSCode', 'JavaScript', 'FullStack', 'IDE'],
            title: `Configurando ambiente de desenvolvimento 💻⚙`,
            link:
              'https://medium.com/@robertojuniordev/configurando-ambiente-javascript-fullstack-extens%C3%B5es-e-personaliza%C3%A7%C3%B5es-vscode-b%C3%B4nus-43043cddc183',
          }}
        />
        <ContentCard
          cardData={{
            content: `Utilizar a maneira tradicional de estilização
            no React.js, sem dúvida pode ser uma dor de cabeça, pois na
             medida em que todo CSS importado para um componente é
             aplicado ao código de maneira global...`,
            tags: ['Styled-components', 'JavaScript', 'FullStack'],
            title: `Iniciando com styled-components 💅`,
            link:
              'https://www.linkedin.com/pulse/styled-components-in%C3%ADcio-r%C3%A1pido-roberto-junior/',
          }}
        />
      </main>
    </div>
  );
};

export default ContentPage;
