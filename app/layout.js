"use client";
import { Inter } from "next/font/google";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <LocomotiveScrollProvider options={{ smooth: true }} containerRef={ref}>
          <Header/>
          <div className="bg-black">
          {children}
          </div>
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}
