"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { ThemeProvider } from "styled-components";
import { Theme } from './(providers)/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ThemeProvider theme={Theme}>
            <Header/>
              {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
