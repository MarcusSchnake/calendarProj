import Head from "next/head";
import styles from "../styles/Home.module.css";

import React from "react";
import { Navbar } from "../componets/navbar";
require('react-big-calendar/lib/css/react-big-calendar.css');
import { MyCalendar } from "../componets/calendar";
import { AboutUs } from "../componets/about";
import { AppScheduler } from "../componets/app_scheduler";




export default function Home() {
  return (
    <>
      <Head>
        <title>Schedule It!</title>
        <meta name="description" content="Appointment scheduling page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <a href="styled-jsx/css"/>
      </Head>
      <main>
        <Navbar/>
        <h1 className={styles.title}>Scheduler for small business</h1>
        <AboutUs/>
        <AppScheduler/>
        <MyCalendar/> 
      </main>
    </>
  );
}
