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

    max-width: 1120px;
    margin: 0 auto;


    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;


`;

