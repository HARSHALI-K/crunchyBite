
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { describe } from "node:test";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

const keywordsArray = [
  { key: "Crunchy", description: "crunchy bite" },
  { key: "Bite", description: "crunchy bite" },
  { key: "Crunchy Bite Dubai", description: "chrunchy Bite dubai" },
  { key: "Crunchy Bite Abu Dhabi", description: "chrunchy Bite abu dhabi" },
  { key: "Fried Chicken", description: "Fried Chicken chrunchy Bite" },
  { key: "Paprika", description: "paprika chrunchy Bite" },
  { key: "Pizza", description: "pizza chrunchy Bite" },
  { key: "chilli and lemon", description: "chilli and lemon chrunchy Bite" },
  { key: "shish & kebab", description: "shish & kebab chrunchy Bite" },
  { key: "Barbecue", description: "barbecue crunchy bite" },
  { key: "White Cheddar", description: "white Cheddar crunchy bite" },
  { key: "crunchybite.ae", description: "crunchybite.ae" },
];
const keywordsString = keywordsArray.map((keyword) => keyword.key).join(", ");

export const metadata: Metadata = {
  title: "Crunchy Bite",
  description: "Choose the Crunch,bite the crunch",
  keywords: keywordsString,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body className={inter.className}>{children}</body>
    </html>
  );
}
