import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  width: 100%;
  height: 100%;

  > form {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 10px;
    color: white;

    > input {
      height: 2rem;
      border-radius: 5px;
      border: none;
      background: whitesmoke;
      outline: none;
      padding-left: 5px;
    }

    textarea {
      border-radius: 5px;
      border: none;
      background: whitesmoke;
      outline: none;
      padding-left: 5px;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: 10px;
      font-size: 1.5rem;
      font-weight: bold;
      background-color: gold;
      border-radius: 5px;
      transition: filter 0.3s;
      border: none;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
  > div {
    color: gold;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 5rem;
  justify-content: center;
  align-content: center;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    > iframe {
      width: 100%;
      height: 400px;
      max-width: 800px;
    }
  }
  @media (max-width: 768px) {
    > div {
      width: 100vw;
      iframe {
        width: 100vw;
        padding: 0;
      }
    }
  }
`;
