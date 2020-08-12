import React from 'react';
import './styles.css';

interface CardData {
  cardData: {
    title?: string;
    content?: string;
    image?: string;
    tags?: string;
  };
}

const ContentCard: React.FC<CardData> = ({ cardData }) => {
  return (
    <article className="teacher-item">
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

      <p>{cardData.content}</p>

      <footer>
        <p>
          Tags:
          <strong>{cardData.tags}</strong>
        </p>
      </footer>
    </article>
  );
};

export default ContentCard;
