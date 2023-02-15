import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 3rem;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    width: 100%;
  }

  img {
    width: 100px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin-bottom: 100px;
  background: black;
  font-weight: bold;
  font-size: 18px;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 50px;
      height: 40px;
      color: white;
      transition all 0.5s;

      &:hover {
        color: gold;
        scale: 1.3;
      }
    }
  }
`;
