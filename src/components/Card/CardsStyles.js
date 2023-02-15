import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const Cards = styled.div`
  background-color: #000000;
  border-radius: 1rem;
  border: #212121 0.2rem solid;
  transition: all 0.4s ease-in;
  width: 300px;
  color: #fff;
  box-shadow: 0.4rem 0.4rem 0.6rem #00000040;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }

  &:hover {
    transform: translateY(-1.5rem);
    border: gold 0.2em solid;
    border-radius: 2.5rem 0 2.5rem 0;
  }

  button {
    padding: 0.6rem 2rem;
    border-radius: 15px;
    background: gold;
    font-size: 1.3rem;
    margin: 1rem;
    border: none;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;
