import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import ContentCardImage from '../../components/ContentCardImage';
import ContentCard from '../../components/ContentCard';
import Navigation from '../../components/Navigation';

const ContentPage: React.FC = () => {
  const profileJr = `https://media-exp1.licdn.com/dms/image/C4D03AQHpWNC3325tsQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=BCUEHoUzoIGmcSEu7dPRI3E9iVn3yODkoI6DtgJiHGo`;
  const profileBeltrao = `https://instagram.fbel1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/74981035_436072697076728_6003243598454518411_n.jpg?_nc_ht=instagram.fbel1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=vSk-8dwxg8cAX9JaEaC&oh=8ad251d4ed0106086b0831fb1068080e&oe=5F6E74BC`;
  return (
    <div id="page-teacher-list">
      <PageHeader title="Bem vindo ao FirstCode!" />
      <Navigation />
      <main>
        <ContentCardImage
          cardData={{
            content: `Ter uma comunidade para compartilhar dúvidas,
            criar projetos em grupo, e programar junto é essencial! entre no nosso
            server do Discord e vamos codar!`,
            profile: profileJr,
            name: 'Roberto Junior',
            tags: ['Discord', 'Starter'],
            title: `Comece Aqui 📚`,
            image: `https://cdn.iconscout.com/icon/free/png-256/discord-3-569463.png`,
            link:
              'https://www.notion.so/CONFIGURANDO-AMBIENTE-f44ef4f7c8f54e57b94902143c1a94f8',
          }}
        />
        <ContentCardImage
          cardData={{
            profile: profileBeltrao,
            name: 'Mateus Beltrão',

            content: `WordPress é um sistema livre e aberto de gestão de conteúdo para internet voltado
             principalmente para a criação de páginas eletrônicas (sites) e blogs online. É uma das ferramentas
             mais utilizadas para conteúdo na web...`,
            tags: ['Wordpress', 'Cms'],
            title: `Iniciando com Wordpress 📚`,
            image: `https://upload.wikimedia.org/wikipedia/commons/a/ae/WordPress.svg`,
            link:
              'https://medium.com/@mateus9beltrao/wordprees-na-sua-maquina-cea251122100',
          }}
        />
        <ContentCard
          cardData={{
            profile: profileJr,
            name: 'Roberto Junior',

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
            profile: profileJr,
            name: 'Roberto Junior',

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
