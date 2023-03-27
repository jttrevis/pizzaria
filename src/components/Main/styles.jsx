import styled from "styled-components";
import bgImage from "../../assets/pzz1.jpg";
export const Container = styled.main`
  display: grid;
  background-image: linear-gradient(
      to right,
      rgb(0, 0, 0),
      #000000,
      #000000d6,
      #00000097,
      rgba(0, 0, 0, 0)
    ),
    url(${bgImage});
  background-position: center;
  background-size: cover;

  background-attachment: fixed;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: local;
    background-size: cover;
    background-repeat: no-repeat;
  }
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
    /* width: 600px;
    margin-right: 5rem;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.3); */
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

export const photoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  img {
    position: relative;

    0px;
    background: #f9f9f9;
  }
`;
