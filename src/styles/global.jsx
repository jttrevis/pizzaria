import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Julee', sans-serif;
  text-decoration: none;



}


::-webkit-scrollbar {
  width:10px;
  height: 10px;
  border-radius: 10px;

  }

::-webkit-scrollbar-track {
  background: #111;

  }

::-webkit-scrollbar-thumb {

  background: gold;
  border-radius: 10px;
  }




button {
  cursor: pointer;
  color: #000  !important;;
}

body{
  -webkit-font-smoothing: antialiased;
  background-image: linear-gradient(to left bottom, #000000, #412123, #7f3d32, #b86434, #e39728, #bb7e23, #bd7e21, #e39728, #b86434, #7f3d32, #412123, #000000);
  overflow-x: hidden;



}



`;
