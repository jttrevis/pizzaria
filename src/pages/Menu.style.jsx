import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: black;
  color: white;
  margin: 0;

  .logo {
    width: 20rem;
    padding: 2rem;
    margin: 2rem;

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 10rem;

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
    margin: 0 auto;
    width: 80%;
    gap: 3rem;
  }
`;
