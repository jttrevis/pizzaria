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
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.3rem;
  text-align: center;

  img {
    width: 600px;
    margin-right: 5rem;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.3);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 5rem;
    padding: 50px;
  }

  p {
    padding: 1rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 15px;
    font-size: 2rem;
    font-weight: bold;
    background-color: gold;
    border-radius: 10px;
    transition: filter 0.3s;
    border: none;

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
      font-size: 3rem;
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
