"use client";
import "@fortawesome/fontawesome-free/css/all.css";
// import MyCarousel from "./component/crunchy";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Head } from "next/document";
const MyCarousel = dynamic(() => import("./component/crunchy"), {});
export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Crunchy Bite</title>
        <meta name="description" content="Choose the Crunch,bite the crunch" />
        <meta
          name="keywords"
          content="Crunchy Bite, Bite, Crunchy, Crunchy Bite Dubai, Crunchy Bite Abu Dhabi"
        />
      </Head> */}
      <Suspense>
        {" "}
        <MyCarousel />{" "}
      </Suspense>
    </>
  );
}
