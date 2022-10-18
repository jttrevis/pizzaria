import styled from "styled-components";


export const Container = styled.div`

    text-align: center;
    background: black;
    color: white;

    h3 {
      font-size: 80px;
      padding: 80px;
    }

`;


export const Content = styled.div`

    max-width: 1200px;
    margin: 0 auto;


    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

  @media (max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);
    margin: 0 10rem;
  }

  @media (max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
    margin: 5rem 10rem;

  }

`;

