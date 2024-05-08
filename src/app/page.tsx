"use client"
import Image from "next/image";
import styles from "./page.module.css";
import MyCarousel from "./component/crunchy/page";
import '@fortawesome/fontawesome-free/css/all.css'

export default function Home() {
  return (
    <>
    <MyCarousel/>
    </>
  );
}
