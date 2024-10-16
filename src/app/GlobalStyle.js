import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${poppins.style.fontFamily};
    padding: 0 5px;
    scroll-behavior: smooth;
    max-width: 2000px;
    line-height: 1.6;
    margin: 0 auto;
  }

  :root {
    --primary-color: #3864AB;
    --secondary-color: #FEF6EB;
  }
`;

export default GlobalStyle;
