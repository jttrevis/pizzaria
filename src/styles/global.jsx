import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
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

:root {
  --primary-color: #D3C224;
}


button {
  cursor: pointer;
}

body{
  -webkit-font-smoothing: antialiased;
  background-color: #000;



}



`;
