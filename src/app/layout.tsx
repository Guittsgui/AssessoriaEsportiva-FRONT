"use client"
import { Inter } from "next/font/google";
import "./styles/globals.css";
import StyledComponentsRegistry from "./registry";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { ThemeProvider } from "styled-components";
import { Theme } from './styles/ThemeProvider';
import ToastContainer from "./components/Toast/ToastContainer";
import NextAuthSessionProvider from "./providers/sessionProvider/sessionProvider";

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
            <NextAuthSessionProvider>
              <Header/>
                {children}
              <Footer/>
              <ToastContainer/>
            </NextAuthSessionProvider>
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
