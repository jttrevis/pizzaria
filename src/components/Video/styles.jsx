import styled from "styled-components";


export const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);

`;


export const Content = styled.div`
    max-width: 1200px;

    background: black;
    font-weight: bold;
    font-size: 16px;


  div {
    text-align: center;
    margin: 3rem auto;

    iframe{
      width: 63rem;
      height: 35rem;
    }


  }


  @media (max-width: 500px){
    .video {
      width: 100%;

      iframe{
        width: 100%;
      }
    }
  }
`;