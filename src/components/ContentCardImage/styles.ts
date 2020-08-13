import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  image?: string;
}

export const Container = styled.div<CardProps>`
  .content-item {
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
    background: #2a2d2d;
    color: var(--color-white);
  }

  .content-item header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    ${props =>
      props.image &&
      css`
        background: url(${props.image}) no-repeat center;
      `}
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    div {
      margin-left: 2.4rem;
      strong {
        font: 700 2.4rem Archivo;
        display: block;
      }
      span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
        color: var(--color-text-complement);
      }
    }
  }

  .content-item footer {
    padding: 2.5rem 2rem;
    background: var(--color-primary);
    border-top: 1px solid var(--color-primary);
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.3rem;
      margin-top: 1.2rem;
      strong {
        margin-left: 1rem;
        display: block;
        color: var(--color-text-complement);
        > a + a {
          margin-left: 1rem;
        }
      }
      a {
        margin-left: auto;
        color: var(--color-neon-green);
        transition: 0.2s;
        &:hover {
          color: ${shade(0.5, '#04BF58')};
        }
      }
    }
  }

  @media (min-width: 700px) {
    .content-item header {
      padding: 2rem 3.2rem 10rem 3.2rem;
    }

    .content-item footer {
      padding: 2.5rem 3.2rem;
    }
  }
`;
