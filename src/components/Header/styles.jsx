import styled from 'styled-components'
import pizzaBG from '../../assets/pizzas.jpg'


export const Container = styled.header`
  background-image: url(${pizzaBG});
  background-size: cover;
  color: white;
  height: 100vh;
  background-attachment: fixed;
  display: grid;



`;


export const Content = styled.div`
  max-width: 1120px;
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
`;


export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px auto;
  line-height: 70px;


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
`;