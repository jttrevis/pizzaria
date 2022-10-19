import styled from 'styled-components'




export const Container = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
  background: black;


  .logo {
    width: 20rem;
    padding: 2rem;
    margin: 2rem;

  }

  div {

      }

`;


export const Content = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 10rem;


  @media (max-width: 1100px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 735px){
    grid-template-columns: 1fr;
  }

`


