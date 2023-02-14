import styled from "styled-components";
import bgImage from "../../assets/pizzas.jpg";
export const Container = styled.main`
  display: grid;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  max-width: 1200px;
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

  .order-now-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 400px;
    font-size: 30px;
    font-weight: bold;
    background-color: var(--primary-color);
    border-radius: 10px;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 6rem auto;

    img {
      display: none;
    }

    span {
      font-size: 70px;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 25px;
    }

    .order-now-btn {
      width: 100%;
      color: black;
    }

    @media (max-width: 700px) {
      display: flex;
      width: 100vw;
    }
  }
`;
