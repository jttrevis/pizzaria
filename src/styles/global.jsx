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

  }

::-webkit-scrollbar-track {
  background: #111;
  }

::-webkit-scrollbar-thumb {

  background: gold;
  }




button {
  cursor: pointer;
  color: #000  !important;;
}

body{
  -webkit-font-smoothing: antialiased;
  background-color: #000;



}



`;
