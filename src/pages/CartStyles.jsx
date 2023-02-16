import styled from "styled-components";

export const Container = styled.div`
  display: block;
  text-align: center;
  height: 100%;

  background-color: black;
  color: white;
  padding: 7rem 0;

  .item-cart {
    margin: 1rem;
    width: 150px;
    border: 1px solid gold;
    border-radius: 15px;
  }
  img {
    display: flex;
    width: 100%;
  }
  .item-container {
    display: flex;
    border-bottom: 1px solid gold;
    border-radius: 0.25rem;
    margin: 1rem;
  }
  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    background: transparent;
    color: #ce2f2f;
    width: 5rem;
    height: 100%;
    tab-size: 50px;
    border: none;
  }
  .item-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
  .total {
    display: flex;
    justify-content: flex-end;
    margin-right: 5rem;
  }
  > button {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    max-width: 500px;
    font-size: 15px;
    font-weight: bold;
    background-color: gold;
    border-radius: 10px;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.7);
    }
  }
  @media (max-width: 768px) {
    .item-cart {
      display: none;
    }
    .remove {
      border: none;
      padding: 0;
    }
  }
`;
