import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: black;
  color: white;
  margin: 0;

  h3 {
    font-size: 60px;
    padding: 80px;
  }

  a {
    color: gold;
    transition: all 0.5s;
    border-bottom: 2px solid gold;

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
