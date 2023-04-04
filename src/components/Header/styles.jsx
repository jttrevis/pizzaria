import styled from "styled-components";

export const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;

  > a > img {
    width: 100px;
    transition: all 0.5s;
    margin-left: 1.8rem;
  }

  > nav {
    font-size: 1.5rem;

    gap: 1rem;
    text-decoration: none;
  }
`;

export const MobileMenu = styled.label`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    gap: 1rem;
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

  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
    transition: all 0.5s;

    &:hover {
      background-color: gold;
      color: #000;
      border-radius: 10px;
    }
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    position: absolute;
    font-size: 1.7rem;
    top: 8rem;
    left: 0;
    background-color: #000;
    text-align: center;
    width: 100%;
    height: calc(100vh - 4.6875rem);
    z-index: 1;
    transition: all 0.3s ease-in;

    a {
      width: 100%;
      max-width: 100px;

      padding: 1rem 0;
      margin-inline: 1rem;

      border-radius: 0;
    }
  }

  @media (min-width: 601px) {
    display: flex;
  }
`;
