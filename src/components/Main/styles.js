import styled from "styled-components";


export const Container = styled.main`
  height: 100vh;
  display: grid;
  background: black;

`;


export const Content = styled.div`
    max-width: 1120px;
    margin: 100px auto;
    display: flex;
    justify-content: left;
    align-items: center;
    color: white;
    font-size: 40px;


  img {
    width: 40%;

  }

  div {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 90px;
    padding: 50px;
  }

  button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 80%;
  font-size: 30px;
  font-weight: bold;
  background-color: var(--primary-color);
  border-radius: 10px;
  transition: filter 0.3s;

    &:hover{
      filter: brightness(0.7);
    }
  }



`