"use client";

import Header from "@/components/Header";
import GlobalStyle from "./GlobalStyle";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={poppins.className}>
      <GlobalStyle />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
