import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .content-item {
    background: var(--color-box-base);
    border: 1.5px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;
    color: var(--color-text-title);
    transition: 0.2s;
    &:hover {
      border: 1.5px solid var(--color-neon-green);
      transform: scale(1.01);
    }
  }

  .content-item header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  .content-item header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  .content-item header div {
    margin-left: 2.4rem;
  }

  .content-item header div strong {
    font: 700 2.4rem Archivo;
    display: block;
  }

  .content-item header div span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }

  .content-item > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-weight: 600;
  }

  .content-item footer {
    margin-top: 3.2rem;
    padding: 2.5rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
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
    .content-item header,
    .content-item footer {
      padding: 3.2rem;
    }

    .content-item p {
      padding: 0 3.2rem;
    }

    .content-item footer p strong {
      display: initial;
      margin-left: 1.6rem;
    }
  }
`;
