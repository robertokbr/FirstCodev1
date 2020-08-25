import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

interface CardData {
  cardData: {
    profile?: string;
    title?: string;
    content?: string;
    image?: string;
    tags?: string[];
    link?: string;
    name?: string;
  };
}

const ContentCardImage: React.FC<CardData> = ({ cardData }) => {
  return (
    <Container image={cardData.image}>
      <article className="content-item">
        <header>
          <img src={cardData.profile} alt="Roberto Junior" />
          <div>
            <strong>{cardData.title}</strong>
            <span>{cardData.name}</span>
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
