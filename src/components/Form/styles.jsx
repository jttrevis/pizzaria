import styled from 'styled-components'


export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;

  color: white;

  form {
    display: grid;
    gap: 0.5rem;
    width: 70%;

    input{
      height: 2rem;
      border: none;
      border-radius: 0.20rem;
      padding: 0.5rem;
    }

    textarea{
      padding: 0.5rem;
    }

    button{
      background-color: var(--primary-color);
      border-radius: 0.25rem;
      transition: filter 0.3s;
      height: 4rem;
      font-weight: bold;
      font-size: 1rem;
      margin-top: 1rem;




      &:hover{
        filter: brightness(0.7);
      }
    }


    img {
      width: 100%;

    }


  }

  .adress {

    font-size: 1.5rem;
    text-align: center;
    color: var(--primary-color);


  }

  @media (max-width: 1200px){
    grid-template-columns: 1fr;
    height: 100vh;





    form {
      margin: 0 auto;

    }

    .mapa {
      display: grid;
      justify-items: center;
      align-items: center;
      width: 80%;




    }

    .adress {
      font-size: 1rem;
    }

  }

`
