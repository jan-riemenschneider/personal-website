"use client";

import Header from "@/components/Header";
import GlobalStyle from "./GlobalStyle";
import Footer from "@/components/Footer";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useServerInsertedHTML } from "next/navigation";

export default function RootLayout({ children }) {
  const sheet = new ServerStyleSheet();

  useServerInsertedHTML(() => sheet.getStyleElement());

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {/* Render StyleSheetManager nur auf dem Server */}
        {typeof window === "undefined" ? (
          <StyleSheetManager sheet={sheet.instance}>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
          </StyleSheetManager>
        ) : (
          <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
