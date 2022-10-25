import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;


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

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 800px;
    background: black;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

`