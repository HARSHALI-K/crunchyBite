"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { describe } from "node:test";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Crunchy Bite" />
        <meta property="og:site_name" content="Crunchy Bite" />
        <meta property="og:url" content="https://crunchy-bite.vercel.app" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://crunchy-bite.vercel.app/images/CrunchyBite-logo.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
