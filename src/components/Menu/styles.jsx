import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  color: black;
  margin: 0;

  h3 {
    font-size: 60px;
    padding: 80px;
  }

  a {
    color: whitesmoke;
    transition: all 0.5s;
    border-bottom: 2px solid whitesmoke;

    &:hover {
      color: black;
      border-bottom: 2px solid black;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }
`;
