import styled from "styled-components";

export const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
  }

  > a > img {
    width: 60px;
    transition: all 0.5s;

    &:hover {
      scale: 1.5;
    }
  }
`;

export const MobileMenu = styled.label`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-block: 1rem;
    cursor: pointer;

    > span {
      border-top: 0.125rem solid;
      width: 1.25rem;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 1.25rem;
        height: 0.125rem;
        background: currentColor;
        margin-top: 0.3125rem;
      }
    }
  }
`;

export const Menu = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  gap: 0.5rem;

  a {
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
    transition: all 0.5s;

    &:nth-child(3) {
      padding: 0;
    }

    &:hover {
      background-color: gold;
      color: #000;
    }
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};

    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 6rem;
    left: 0;
    /* background-color: rgba(0, 0, 0, 0.7); */
    background-color: #000;
    text-align: center;
    width: 100%;
    height: calc(100vh - 4.6875rem);
    z-index: 1;

    a {
      width: 100vw;
      padding: 1rem 0;
      margin-inline: 1rem;
      border-bottom: 0.0625rem solid gold;
      border-radius: 0;
    }
  }

  @media (min-width: 601px) {
    display: flex;
  }
`;
