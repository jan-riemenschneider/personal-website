"use client";

import Header from "@/components/Header";
import GlobalStyle from "./GlobalStyle";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <GlobalStyle />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
