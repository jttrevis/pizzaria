import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  background: black;

  .logo {
    width: 100%;
  }

  .cart-icon {
    width: 100px;
  }

  .cart-container {
    display: flex;
    flex-direction: column;
    right: 0;
    justify-content: flex-end;
    align-items: center;
    margin: auto;
    padding: 5rem;
    position: fixed;
  }

  a {
    cursor: pointer;
    color: white;
  }

  .nav-container {
    display: flex;
    margin: 1rem auto;
    position: fixed;
    top: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .cart-container {
      width: 20%;
      display: flex;
      justify-content: center;
      font-size: 1rem;
    }

    .cart-icon {
      top: 0;
      width: 75px;
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 100%;
      margin: auto;
    }

    .cart-container {
      width: 100vw;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      font-size: 0.75rem;
      float: right;
      top: 6px;
      right: 6px;
      padding: 0;
    }

    .cart-icon {
      width: 50px;
    }
  }
`;
