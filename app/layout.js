"use client";
import { Inter } from "next/font/google";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./globals.css";

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
          <div className="w-full sticky h-16 flex justify-between px-12 items-center z-50 text-white bg-black ">
            <p className="cursor-pointer">Logo</p>
            <div className="flex items-center justify-center gap-7">
              <p className="cursor-pointer">Menu</p>
              <p className="cursor-pointer">Contact</p>
              <p className="cursor-pointer">About Us</p>
            </div>
          </div>
          <div className="bg-black">
          {children}
          </div>
        </LocomotiveScrollProvider>
      </body>
    </html>
  );
}
