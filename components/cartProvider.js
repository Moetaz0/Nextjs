"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "use-shopping-cart";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CartProvider
          // Enables local storage
          shouldPersist={true}
        >
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
