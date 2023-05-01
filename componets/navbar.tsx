import React from "react";
import styles from "../styles/navbar.module.css"


export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="#abouttitle">About Us</a>
      <a href="#scheduler">Schedule Appointment</a>
      <a href="#calendar">Calendar</a>
    </nav>
  );
};
