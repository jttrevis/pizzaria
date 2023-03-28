import styled from "styled-components";

export const Container = styled.div`
  padding-top: 6rem;
`;

export const Content = styled.div`
  padding: 6rem 0;
  border-bottom: 1px solid gold;

  > h1 {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    font-size: 3rem;
  }

  h2 {
    position: absolute;
    color: #ffd9002d;
    font-size: 7rem;
    left: 150px;
    z-index: -1;
  }

  h3 {
    position: absolute;
    color: #ffd9002d;
    font-size: 7rem;
    right: 150px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    h2,
    h3 {
      display: none;
    }
  }
`;
