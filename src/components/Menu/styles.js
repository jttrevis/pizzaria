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


    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;


    div{
      width: 30%;
      border: 2px solid gold;
      margin: 6px;

      img {
        display: block;
        margin: 0 auto;
        width: 100%;
        transition: filter 0.2s;
        cursor: pointer;

        &:hover{
          filter: brightness(0.7);
        }
      }

    }
`;