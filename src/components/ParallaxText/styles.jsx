import styled from "styled-components";

export const Parallax = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: absolute;
  z-index: -1;
  .scroller {
    text-transform: uppercase;
    font-size: 10rem;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    span {
      color: #ffbb0022;
      display: block;
      margin-right: 30px;
      transition: all 0.2s;

      -webkit-font-smoothing: antialiased;
      height: 100%;

      &:hover {
        color: gold;
      }
    }
  }
`;

export default Parallax;
