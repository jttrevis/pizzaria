import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: rgb(0, 0, 0, 0.5);
  width: max-content;

  padding: 0.7rem 1.7rem;
  z-index: 999;
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  font-size: 1.5rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  a {
    color: #7c00b6;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    img {
      width: 25px;
    }

    &:hover {
      background-color: rgb(0, 0, 0, 0.5);
    }
  }
`;
