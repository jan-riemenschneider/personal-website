import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700", "200", "300"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #3864AB;
    --secondary-color: #FEF6EB;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${poppins.style.fontFamily};
    padding: 0 5px;
    max-width: 2000px;
    margin: 0 auto;
    letter-spacing: 0.5px; 
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
  letter-spacing: 1px; 
}

p {
  letter-spacing: 0.3px;
}

a {
  letter-spacing: 0.2px;
  text-decoration: none;
}

html {
    font-size: 10px;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
