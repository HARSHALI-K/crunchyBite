"use client"
import '@fortawesome/fontawesome-free/css/all.css'
import MyCarousel from "./component/crunchy";
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
    <Suspense>    <MyCarousel/> </Suspense>

    </>
  );
}
