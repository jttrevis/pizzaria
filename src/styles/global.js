import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;


}


:root {
  --primary-color: #D3C224;
}


button {
  cursor: pointer;
}

body{
  -webkit-font-smoothing: antialiased;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}



`