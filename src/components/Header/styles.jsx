import styled from 'styled-components'
import pizzaBG from '../../assets/pizzas.jpg'
import pizzaBG02 from '../../assets/pizzaBG6.jpg'


export const Container = styled.header`
  background-image: url(${pizzaBG});
  background-size: cover;
  color: white;

  background-attachment: fixed;
  display: flex;
  width: 100%;


  @media (max-width: 640px){
    background-image: url(${pizzaBG02});
    background-size: cover;
    max-width: 100vh;
  }
`;


export const Content = styled.div`
  max-width: 100%;
  margin: 100px auto;




  ul{
    align-items: center;
    display: flex;
    font-size: 28px;
    color: white;
    text-decoration: none;



    li {
      display: flex;

      a{
        text-decoration: none;
        margin: 50px;
        color: white;

        transition: color 0.2s;



        &:hover{
          color: var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
        }
      }


      a {
        img:after {

        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;

        }
      }
    }
  }



  .logo {
    width: 300px;

  }

  @media (max-width: 950px){
    ul {
      display: flex;
      flex-direction: column;
      font-size: 2rem;

    }
    img {
      display: none;

    }




`;


export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px auto;




  span {
    font-size: 25px;
    text-decoration: underline;
  }

  h1 {
    font-size: 110px;
    padding: 16px;
    color: var(--primary-color);
  }

  h2{
    text-decoration: underline;
    font-size: 30px;
  }

  @media (max-width: 1210px) {


    h1 {
      display: none;

    }
  }

  @media (max-width: 1200px){
    h1{
      font-size: 10rem;
    }
  }
`;


