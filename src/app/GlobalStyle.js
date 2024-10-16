import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif; 
    padding: 0 10px;
    scroll-behavior: smooth;
    max-width: 1440px;
    margin: 0 auto;  
  }

  :root {
    --primary-color: #3864AB;
    --secondary-color: #FEF6EB;
  }
`;

export default GlobalStyle;
