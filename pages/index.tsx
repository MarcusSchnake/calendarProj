import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/componet/styles/Home.module.css";
import React from "react";
import { Navbar } from "./navbar";
import 'react-big-calendar/lib/sass/styles';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Schedule It!</title>
        <meta name="description" content="Appointment scheduling page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar/>
        <h1 className={styles.title}>Scheduler for small business</h1>
      </main>
    </>
  );
}
