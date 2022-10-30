import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: black;
  color: white;
  margin: 0;

  h3 {
    font-size: 80px;
    padding: 80px;
  }

  .menu-btn-home {
    color: var(--primary-color);
    transition: all 0.5s;
    border-bottom: 2px solid var(--primary-color);

    &:hover {
      filter: brightness(0.5);
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 10rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 5rem 10rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 3rem;
  }
`;
