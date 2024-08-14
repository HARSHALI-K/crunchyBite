
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { describe } from "node:test";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// const keywordsArray = [
//   { key: "Crunchy", description: "crunchy bite" },
//   { key: "Bite", description: "crunchy bite" },
//   { key: "Crunchy Bite Dubai", description: "chrunchy Bite dubai" },
//   { key: "Crunchy Bite Abu Dhabi", description: "chrunchy Bite abu dhabi" },
//   { key: "Fried Chicken", description: "Fried Chicken chrunchy Bite" },
//   { key: "Paprika", description: "paprika chrunchy Bite" },
//   { key: "Pizza", description: "pizza chrunchy Bite" },
//   { key: "chilli and lemon", description: "chilli and lemon chrunchy Bite" },
//   { key: "shish & kebab", description: "shish & kebab chrunchy Bite" },
//   { key: "Barbecue", description: "barbecue crunchy bite" },
//   { key: "White Cheddar", description: "white Cheddar crunchy bite" },
//   { key: "crunchybite.ae", description: "crunchybite.ae" },
// ];
// const keywordsString = keywordsArray.map((keyword) => keyword.key).join(", ");

// export const metadata: Metadata = {
//   title: "",
//   description: "Choose the Crunch,bite the crunch Crunchy Bite Dubai | Fried Chicken chrunchy Bite | paprika chrunchy Bite | pizza chrunchy Bite | chilli and lemon chrunchy Bite | pizza chrunchy Bite | chilli and lemon chrunchy Bite shish & kebab chrunchy Bite | barbecue crunchy bite | white Cheddar crunchy bite | crunchybite.ae",
//   keywords: keywordsString,
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <title>Crunchy Bite | Fried Chicken | Paprika | Pizza | hilli and lemon | shish & kebab | Barbecue | White Cheddar</title>
      <meta name="description" content="Discover Crunchy Bite, your go-to destination for delicious fried chicken, pizza, paprika dishes, Fried Chicken chrunchy Bite,paprika chrunchy Bite, pizza chrunchy Bite, chilli and lemon chrunchy Bite, pizza chrunchy Bite, chilli and lemon chrunchy Bite, shish & kebab chrunchy Bite, barbecue crunchy bite, white Cheddar crunchy bite  in Dubai and Abu Dhabi. Experience the perfect crunch with every bite!" />
      <meta name="keywords" content="Crunchy, Fried Chicken, Pizza, Paprika, Dubai, Abu Dhabi, Crunchy Bite,Fried Chicken chrunchy Bite, paprika chrunchy Bite, pizza chrunchy Bite, chilli and lemon chrunchy Bite, pizza chrunchy Bite, chilli and lemon chrunchy Bite shish & kebab chrunchy Bite, barbecue crunchy bite,white Cheddar crunchy bite , crunchybite.ae" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
