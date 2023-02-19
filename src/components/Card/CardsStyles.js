import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 1.3rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const Cards = styled.div`
  background-color: #000000;
  border-radius: 1rem;
  border: rgb(212, 172, 13, 0.2) 0.2rem solid;
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
      font-size: 2rem;
      padding: 12px 0;
    }

    p {
      height: 111px;
      font-size: 1.5rem;
    }
  }

  > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
    max-width: 150px;
  }

  &:hover {
    transform: translateY(-1.5rem);
    border: gold 0.2em solid;
    border-radius: 2.5rem 0 2.5rem 0;
  }

  button {
    padding: 0.6rem 1rem;
    border-radius: 15px;
    background: gold;
    font-size: 1.3rem;
    margin: 0.5rem;
    border: none;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;
