import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/componet/styles/Home.module.css";
import React from "react";
import { Navbar } from "./navbar";
require('react-big-calendar/lib/css/react-big-calendar.css');
import { MyCalendar } from "../componets/calendar";




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
        <MyCalendar/> 
      </main>
    </>
  );
}
