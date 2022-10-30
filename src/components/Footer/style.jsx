import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin-bottom: 100px;
  background: black;
  font-weight: bold;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding: 0 25px;
    height: 60px;
  }
`;
