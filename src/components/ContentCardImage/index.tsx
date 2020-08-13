import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

interface CardData {
  cardData: {
    title?: string;
    content?: string;
    image?: string;
    tags?: string[];
    link?: string;
  };
}

const ContentCardImage: React.FC<CardData> = ({ cardData }) => {
  return (
    <Container image={cardData.image}>
      <article className="content-item">
        <header>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHpWNC3325tsQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=BCUEHoUzoIGmcSEu7dPRI3E9iVn3yODkoI6DtgJiHGo"
            alt="Roberto Junior"
          />
          <div>
            <strong>{cardData.title}</strong>
            <span>Roberto Junior</span>
          </div>
        </header>

        <footer>
          <p>{cardData.content}</p>
          <div>
            Tags:
            <strong>
              {cardData.tags?.map(tag => (
                <a href={`#${tag}`}>{tag}</a>
              ))}
            </strong>
            <a href={cardData.link}>
              <FiArrowRight size={20} />
            </a>
          </div>
        </footer>
      </article>
    </Container>
  );
};

export default ContentCardImage;
