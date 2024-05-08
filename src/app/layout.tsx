"use client"
import { Inter } from "next/font/google";
import "./styles/globals.css";
import StyledComponentsRegistry from "./registry";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { ThemeProvider } from "styled-components";
import { Theme } from './styles/ThemeProvider';
import ToastContainer from "./components/Toast/ToastContainer";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { ShoppingCardProvider } from "./contexts/ShoopingCart.tsx/ShoppinmgCartProvider";

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
            <AuthProvider> 
              <ShoppingCardProvider>
                <>
                  <Header/>
                    {children}
                  <Footer/>
                  <ToastContainer/>
                </>
              </ShoppingCardProvider>  
            </AuthProvider> 
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
