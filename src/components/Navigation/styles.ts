import styled from 'styled-components';

export const Container = styled.section`
  color: var(--color-primary);
  left: 10%;
  top: 40%;
  ul {
    position: relative;
    color: white;
    font-size: 2rem;
    li {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      transition: 0.2s;
      overflow: hidden;
      max-height: 3.2rem;
      max-width: 12rem;

      &.selected {
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 2rem;
      }
      &:hover {
        transform: scale(1.1);
        max-height: 28rem;
        max-width: 20rem;
        padding: 10px;
        border: 1px solid var(--color-neon-purple);
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
`;
