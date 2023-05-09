"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "use-shopping-cart";
import { Providers } from "./provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
 <head /> will contain the components returned by the nearest parent
 head.js. Find out more at https://beta.nextjs.org/docs/apireference/file-conventions/head
 */}
      <head />
      <body>
        <Providers>
          <CartProvider shouldPersist={true}>
            <SessionProvider>
              <Navbar />
              {children}
            </SessionProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
