
import "@fortawesome/fontawesome-free/css/all.css";
// import MyCarousel from "./component/crunchy";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Head } from "next/document";
import Script from "next/script";
import { Metadata } from "next";
const MyCarousel = dynamic(() => import("../crunchy"), {});
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
  title: "Home | Crunchy Bite",
  description: "Choose the Crunch,bite the crunch Crunchy Bite",
  keywords: keywordsString,
  icons: {
    icon: './favicon.ico',
    apple: './favicon.ico',
    shortcut: './favicon.ico',
  }
};
export default function Home() {
  return (
    <>
  
      <Suspense>
        <MyCarousel />
      </Suspense>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XD2RH1RHJ1" strategy="lazyOnload" /><Script id="google-analytics" strategy="lazyOnload">
      {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-XD2RH1RHJ1');
         
        `}
    </Script>
    <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XD2RH1RHJ1"
/>

  
      
    </>
  );
}
