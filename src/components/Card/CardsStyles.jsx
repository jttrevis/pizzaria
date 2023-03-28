import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background: #141414fb;
  z-index: 1;
  transition: all 0.4s ease-in;
  text-align: center;

  width: 250px;
  height: 100%;

  color: #fff;
  box-shadow: 0.4rem 0.4rem 0.6rem #00000040;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    align-items: center;

    h1 {
      font-size: 1.4rem;
      padding: 12px 0;
    }

    p {
      height: 60px;
      font-size: 1rem;
      padding: 0 5px;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
    max-width: 150px;
    margin-top: 10px;
  }

  &:hover {
    transform: translateY(-1rem);
    border: gold 0.2em solid;
    border-radius: 2.5rem 0 2.5rem 0;
  }

  button {
    font-size: 17px;
    background: #ccb911f9;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1rem 1.8rem;
    border-radius: 15px;
    margin: 0.5rem;
    border: none;
    font-weight: bold;
    transition: all 0.3s;

    &:before {
      content: "£";
      margin-right: 5px;
    }

    &:hover {
      filter: brightness(0.6);
      color: gold;
    }
  }
`;
