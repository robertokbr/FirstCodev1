import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

interface CardData {
  cardData: {
    title?: string;
    content?: string;
    tags?: string[];
    link?: string;
    profile?: string;
    name?: string;
  };
}
const ContentCard: React.FC<CardData> = ({ cardData }) => {
  return (
    <Container>
      <article className="content-item">
        <header>
          <img src={cardData.profile} alt="blog manager" />
          <div>
            <strong>{cardData.title}</strong>
            <span>{cardData.name}</span>
          </div>
        </header>

        <p>{cardData.content}</p>

        <footer>
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

export default ContentCard;
