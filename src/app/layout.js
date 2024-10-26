"use client";

import Header from "@/components/Header";
import GlobalStyle from "./GlobalStyle";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <GlobalStyle />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
