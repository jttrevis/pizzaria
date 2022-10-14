import styled from "styled-components";


export const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);

`;


export const Content = styled.div`
    max-width: 1120px;
    height: 100vh;
    background: black;
    font-weight: bold;
    font-size: 18px;


  div {
    text-align: center;
    margin: 50px auto;
    padding: 10px;

    iframe{
      width: 1100px;
      height: 500px;
    }


  }
`;