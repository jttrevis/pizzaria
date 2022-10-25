import styled from 'styled-components'


export const Container = styled.div`

  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  background: black;



  .logo {
    width: 100%;
  }

  .cart-container  {
    display: flex;
    width: 1200px;
    justify-content: flex-end;
    margin: auto;
    padding: 5rem;


  }

  a {
    cursor: pointer;
    color: white;
  }


  @media (max-width: 700px){
    flex-direction: column;
    .logo {
      display: block;
      margin: auto;

    }

    .cart-container {
      text-align: center;

    }
  }

  @media (max-width: 500px){
    .logo {
      width: 100%;
      margin: auto;
    }
  }




`;