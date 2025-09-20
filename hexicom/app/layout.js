import React from "react";
import Layout from "@/src/components/Layout";

import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hexicom Integrated Bridging of Technology & Infrastructure",
  description: "Official website of Hexicom Infrastructure India Pvt. Ltd",
   icons: {
    icon: '/favicon.ico', // must be in public folder
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
